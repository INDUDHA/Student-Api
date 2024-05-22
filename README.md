Student_apis
To run the api
Clone the repo

- url :https://github.com/INDUDHA/Student_apis.git
- cd Student_details_api
- then run npm run dev command in integrated terminal
- Api url : http://localhost:8000/addStudentDetails
- method : post
- body(form-data) :{
  files : "uploaded file path (should be in xlsx format) template xlsx file is given.",
  page_number : "1",
  page_size :"5"
  }
- output : 
case 1: Success{
    "status": 200,
    "page_number": 2,
    "page_size": 5,
    "total_pages": 2,
    "total_students": 10,
    "message": "Student Details uploaded to MongoDB",
    "student_data": [
        {
            "total_marks": "528",
            "id": "6",
            "name": "Ganesh",
            "father_name": "Shivakumar",
            "mother_name": "Parvathi",
            "english": "86",
            "kannada": "89",
            "hindi": "89",
            "science": "86",
            "social": "89",
            "maths": "89",
            "_id": "664ce3b62f3252770d2c9a01"
        },
        {
            "total_marks": "494",
            "id": "7",
            "name": "Harish",
            "father_name": "Omkar",
            "mother_name": "Sushma",
            "english": "80",
            "kannada": "78",
            "hindi": "89",
            "science": "80",
            "social": "78",
            "maths": "89",
            "_id": "664ce3b62f3252770d2c9a02"
        },
        {
            "total_marks": "500",
            "id": "8",
            "name": "Indudhara",
            "father_name": "Gnaneshwara",
            "mother_name": "Suvarna",
            "english": "70",
            "kannada": "90",
            "hindi": "90",
            "science": "70",
            "social": "90",
            "maths": "90",
            "_id": "664ce3b62f3252770d2c9a03"
        },
        {
            "total_marks": "514",
            "id": "9",
            "name": "Jayanth",
            "father_name": "Paramesh",
            "mother_name": "Lalitha",
            "english": "89",
            "kannada": "78",
            "hindi": "90",
            "science": "89",
            "social": "78",
            "maths": "90",
            "_id": "664ce3b62f3252770d2c9a04"
        },
        {
            "total_marks": "412",
            "id": "10",
            "name": "Karthik",
            "father_name": "Lokesh",
            "mother_name": "Lella",
            "english": "90",
            "kannada": "56",
            "hindi": "60",
            "science": "90",
            "social": "56",
            "maths": "60",
            "_id": "664ce3b62f3252770d2c9a05"
        }
    ]
}

case 2: If file is not uploaded 
{
    "status": 500,
    "message": "Please Upload Student Details File"
}

case 3: If pagination is not given then it will take page_number=1 and page_size=10

{
    "status": 200,
    "page_number": 1,
    "page_size": 10,
    "total_pages": 1,
    "total_students": 10,
    "message": "Student Details uploaded to MongoDB",
    "student_data": [
        {
            "total_marks": "519",
            "id": "1",
            "name": "Abishek",
            "father_name": "Harsha",
            "mother_name": "Poornima",
            "english": "80",
            "kannada": "90",
            "hindi": "100",
            "science": "89",
            "social": "70",
            "maths": "90",
            "_id": "664d81d5008b95ce016648a4"
        },
        {
            "total_marks": "439",
            "id": "2",
            "name": "Bharat",
            "father_name": "Suresh",
            "mother_name": "Uma",
            "english": "90",
            "kannada": "70",
            "hindi": "50",
            "science": "60",
            "social": "80",
            "maths": "89",
            "_id": "664d81d5008b95ce016648a5"
        },
        {
            "total_marks": "456",
            "id": "3",
            "name": "Chandan",
            "father_name": "Umesh",
            "mother_name": "Anu",
            "english": "100",
            "kannada": "78",
            "hindi": "50",
            "science": "100",
            "social": "78",
            "maths": "50",
            "_id": "664d81d5008b95ce016648a6"
        },
        {
            "total_marks": "420",
            "id": "4",
            "name": "Dinesh",
            "father_name": "Jayashankar",
            "mother_name": "Revati",
            "english": "50",
            "kannada": "100",
            "hindi": "60",
            "science": "50",
            "social": "100",
            "maths": "60",
            "_id": "664d81d5008b95ce016648a7"
        },
        {
            "total_marks": "440",
            "id": "5",
            "name": "Erresh",
            "father_name": "Yash",
            "mother_name": "Priya",
            "english": "60",
            "kannada": "90",
            "hindi": "70",
            "science": "60",
            "social": "90",
            "maths": "70",
            "_id": "664d81d5008b95ce016648a8"
        },
        {
            "total_marks": "528",
            "id": "6",
            "name": "Ganesh",
            "father_name": "Shivakumar",
            "mother_name": "Parvathi",
            "english": "86",
            "kannada": "89",
            "hindi": "89",
            "science": "86",
            "social": "89",
            "maths": "89",
            "_id": "664d81d5008b95ce016648a9"
        },
        {
            "total_marks": "494",
            "id": "7",
            "name": "Harish",
            "father_name": "Omkar",
            "mother_name": "Sushma",
            "english": "80",
            "kannada": "78",
            "hindi": "89",
            "science": "80",
            "social": "78",
            "maths": "89",
            "_id": "664d81d5008b95ce016648aa"
        },
        {
            "total_marks": "500",
            "id": "8",
            "name": "Indudhara",
            "father_name": "Gnaneshwara",
            "mother_name": "Suvarna",
            "english": "70",
            "kannada": "90",
            "hindi": "90",
            "science": "70",
            "social": "90",
            "maths": "90",
            "_id": "664d81d5008b95ce016648ab"
        },
        {
            "total_marks": "514",
            "id": "9",
            "name": "Jayanth",
            "father_name": "Paramesh",
            "mother_name": "Lalitha",
            "english": "89",
            "kannada": "78",
            "hindi": "90",
            "science": "89",
            "social": "78",
            "maths": "90",
            "_id": "664d81d5008b95ce016648ac"
        },
        {
            "total_marks": "412",
            "id": "10",
            "name": "Karthik",
            "father_name": "Lokesh",
            "mother_name": "Lella",
            "english": "90",
            "kannada": "56",
            "hindi": "60",
            "science": "90",
            "social": "56",
            "maths": "60",
            "_id": "664d81d5008b95ce016648ad"
        }
    ]
}
  
- Api url : http://localhost:8000/fetchStudentDetails?total_marks=456
here i passed total_marks you can change parameter name like you can filter name,father_name etc
- Method : Get
- Output : Success {
  "status": 200,
  "message": "Records found in that name",
  "no_of_students": 1,
  "student_data": [
  {
  "total_marks": "440",
  "id": "5",
  "name": "Erresh",
  "father_name": "Yash",
  "mother_name": "Priya",
  "english": "60",
  "kannada": "90",
  "hindi": "70",
  "science": "60",
  "social": "90",
  "maths": "70"
  }
  ]
  }

