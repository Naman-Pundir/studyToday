const mongoose = require("mongoose")

const courseSchema = mongoose.Schema({
    courseName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    lectures:[
        {
            lectureUrl:{
                type:String
            }
        }
    ]
})

const Courses = mongoose.model("Course",courseSchema)

module.exports = Courses