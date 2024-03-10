const Student = require("../models/Student")
const Admin = require("../models/Admin")

const viewstudents = async (request, response) => 
{
   try 
   {
    const students = await Student.find();
    if(Student.length ==0)
    {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(students);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
};


const updateStudentInfo = async (request, response) => {
  try {
    const email = request.params.email;
    const updatedInfo = request.body;
    const student = await Student.findOneAndUpdate({ email: email }, updatedInfo, { new: true });
    if (student) {
      response.send("Student information updated successfully");
    } else {
      response.status(404).send("Student not found");
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};





const deletestudent = async (request, response) => 
 {
    try 
    {
      const email = request.params.email
      const student = await Student.findOne({"email":email})
      if(student!=null)
      {
        await Student.deleteOne({"email":email})
        response.send("Deleted Successfully")
      }
      else
      {
        response.send("Email ID Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  const checkadminlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       console.log(input)
       const admin = await Admin.findOne(input)
       response.json(admin)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };
  

  module.exports = {viewstudents,deletestudent,checkadminlogin,updateStudentInfo}