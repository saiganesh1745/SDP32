const mongoose = require("mongoose")

const recruiterschema = new mongoose.Schema({
    fullname: {
      type: String,
      required: true
    },
    companyname: {
        type: String,
      required: true
    },
    since: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    contact: {
        type: String,
        required: true,
        unique:true
      },
  });

const recruiter = mongoose.model('recruiter', recruiterschema);     // model contains 2 arguments (collection name, schema)

module.exports = recruiter;