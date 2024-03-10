const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")        // allows resourse sharing between two 

const dburl = "mongodb://localhost:27017/campusplacement"
mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((err) => {
    console.log(err.message)
});

const app = express()
app.use(express.json())
app.use(cors())


const adminrouter = require("./routes/adminroutes")
const studentrouter = require("./routes/studentroutes")
const recruiterrouter = require("./routes/recruiterroutes")


app.use("",adminrouter)      // It includes admin routes
app.use("",studentrouter)      // It includes jobseeker routes
app.use("",recruiterrouter)



const port= 2032
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})