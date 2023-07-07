const mongoose = require("mongoose")
const Courses = require("./course")

mongoose.connect("mongodb+srv://NamanPundir:indiano1@cluster0.uxukhqi.mongodb.net/Course?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("MongoDB connected");
})
.catch(()=>{
    console.log("Failed Connection");
})

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    enroll:[
        {
           course:{
            type:String
           }
        }
    ]
})

const Users = mongoose.model("User", userSchema)

module.exports = Users