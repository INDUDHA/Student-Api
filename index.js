const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const fs = require("fs");
const xlsxtojson = require("xlsx-to-json-lc");

app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb://0.0.0.0:27017/";
const DB_NAME = "studentDB";
const DB_COLLECTION_NAME = "studentDetails";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    db = client.db(DB_NAME);
    // console.log("You successfully connected to MongoDB!");
  } catch (err) {
    //console.error("Error connecting to MongoDB:", err);
    res.status(500).send({
      status: 500,
      message: "Error while connecting to Mongo db",
    });
  }
}

run().catch(console.dir);

app.post("/addStudentDetails", async (req, res) => {
  try {
    let fileData = req.files.files;
    let currentTimestamp = Date.now();
    let file_name = currentTimestamp + ".xlsx";
    let json_file_name = currentTimestamp + ".json";
    let page_number = parseInt(req.body.page_number) || 1;
    let page_size = parseInt(req.body.page_size) || 10;
    let startIndex = (page_number - 1) * page_size;

    console.log("req " + JSON.stringify(req.files.files.name));
    console.log("page_no " + req.body.page_number);
    console.log("pagesize " + req.body.page_size);

    if (req.files.files.name == "") {
      res.status(500).send("Please Upload the xlsv file");
      return;
    } else {
      await fileData.mv("./temp/" + file_name, async function (err) {
        if (err) {
          console.error(err);
          res.status(500).send("Please Upload the xlsv file");
          return;
        }

        xlsxtojson(
          {
            input: "./temp/" + file_name,
            output: "./temp/" + json_file_name,
            sheet: "Sheet1",
            lowerCaseHeaders: true,
          },
          async function (err, result) {
            if (err) {
              console.error(err);
              res.status(500).send("Error converting file to JSON");
              return;
            }
            const collection = db.collection(DB_COLLECTION_NAME);
            await collection.insertMany(result);
            const totalStudents = result.length;
            const totalPages = Math.ceil(totalStudents / page_size);
            const students = result.slice(startIndex, startIndex + page_size);

            fs.unlink("./temp/" + file_name, function (err) {
              if (err) {
                console.error("Error deleting file:", err);
              } else {
                console.log("File deleted successfully");
              }
            });

            res.status(200).send({
              status: 200,
              page_number: page_number,
              page_size: page_size,
              total_pages: totalPages,
              total_students: totalStudents,
              message: "Student Details uploaded to MongoDB",
              student_data: students,
            });
          }
        );
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: 500,
      message: "Please Upload Student Details File",
    });
  }
});

app.get("/fetchStudentDetails", async (req, res) => {
  try {
    const query = {};
    //  console.log("params"+JSON.stringify(req.query));
    for (const key in req.query) {
      query[key] = req.query[key];
    }

    const collection = db.collection(DB_COLLECTION_NAME);
    const students = await collection.find(query).toArray();
    // console.log(students);

    if (Object.keys(query).length === 0) {
      res.status(200).send({
        status: 200,
        message:
          "You have not entered the params in Api .So all details is fetched",
        student_data: students,
      });
    } else {
      res.status(200).json({
        status: 204,
        message: "Student Details fetched successfully",
        student_data: students,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: 500,
      message: "Error while fetech student details",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
