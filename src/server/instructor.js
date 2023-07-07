const mongoose = require("mongoose")
const Courses = require("./course")

const instructorSchema = mongoose.Schema({
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
    contact:{
        type:Number,
        required:true
    },
    teach:{
        type:String
    }
})

instructorSchema.methods.updateTeach = async function(courseID){
    console.log(courseID);
    this.teach.push({courseID});
}

const Instructors = mongoose.model("Instructor", instructorSchema)

module.exports = Instructors