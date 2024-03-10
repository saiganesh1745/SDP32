const Recruiter = require("../models/Recruiter")        // models

const insertrecruiter = async (request, response) => {
    try 
    {
      const input =  request.body;
      const recruiter = new Recruiter(input);
      await recruiter.save();
      response.send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };

//   app.put("/updatestudent", async (request,response)=>{
    
  const checkrecruiterlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const recruiter = await Recruiter.findOne(input)
       response.json(recruiter)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };


  module.exports = {insertrecruiter,checkrecruiterlogin}