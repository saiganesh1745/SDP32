const Student = require("../models/Student")        // models

const insertstudent = async (request, response) => {
    try 
    {
      const input =  request.body;
      const student = new Student(input);
      await student.save();
      response.send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };

//   app.put("/updatestudent", async (request,response)=>{
    
  const checkstudentlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const student = await Student.findOne(input)
       response.json(student)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };


  module.exports = {insertstudent,checkstudentlogin}