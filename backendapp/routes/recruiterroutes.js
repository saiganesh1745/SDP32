const recruitercontroller = require("../controllers/recruitercontroller")

const express = require("express")
const recruiterrouter = express.Router()

// job seekeer routes
recruiterrouter.post("/insertrecruiter",recruitercontroller.insertrecruiter)
recruiterrouter.post("/checkrecruiterlogin",recruitercontroller.checkrecruiterlogin)


module.exports = recruiterrouter