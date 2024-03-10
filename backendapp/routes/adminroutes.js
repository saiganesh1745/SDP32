const admincontroller = require("../controllers/admincontroller")

const express = require("express")
const adminrouter = express.Router()

// admin routes
adminrouter.get("/viewstudents",admincontroller.viewstudents)
adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)
adminrouter.delete("/deletestudent/:email",admincontroller.deletestudent)
adminrouter.patch("/updatestudent/:email", admincontroller.updateStudentInfo);



module.exports = adminrouter