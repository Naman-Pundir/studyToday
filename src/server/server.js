const express = require("express")
const Users = require("./mongo")
const Courses = require("./course")
const Instuctors = require("./instructor")
const Messages = require("./message")
const Conversations = require("./conversation")
const cors = require("cors");


// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import helmet from "helmet";
// import morgan from "morgan";

const { User } = require("@auth0/auth0-react");
const Instructors = require("./instructor");
const { Socket } = require("socket.io")
const app = express();
//dotenv.config();
app.use(express.json())
const http = require("http").Server(app);

// app.use(helmet);
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
//app.use(morgan("common"))
//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended:false }))
app.use(express.urlencoded({ extended:true }))
app.use(cors())

/*Routes*/

// app.use("/student", studentRoutes);
// app.use("/instructor", instructorRoutes);
// app.use("/course", courseRoutes);
// app.use("/general", generalRoutes);

app.get("/", cors(),(req,res) =>{

})

var loginUser = "123@123.in";
var loginInstructor = "Test@123.in";


app.post("/Studentlogin", async(req,res) =>{
    const{email,password} = req.body

    try{
        var query = {email:email, password:password}
        const check = await Users.findOne(query)
        if(check){
            res.json("exist");
            loginUser = email;
        }else{
            res.json("notexist");
        }

    }catch{
        res.json("notexist");
    }

})

app.post("/Studentregister", async(req,res) =>{
    const{name,email,password,confirmPassword} = req.body
    const data = {name:name, email:email, password:password}

    try{
        
        const check = await Users.findOne({email:email})
        if(check){
            res.json("exist");
        }else{
            if(password == confirmPassword){
                await Users.insertMany([data]);
                res.json("registered");
            }else{
                res.json("unequal");
            }
        }

    }catch{
        res.json("notexist");
    }

})

app.post("/Instructorlogin", async(req,res) =>{
    const{email,password} = req.body

    try{
        var query = {email:email, password:password}
        const check = await Instructors.findOne(query)
        if(check){
            res.json("exist");
            loginInstructor = email;
        }else{
            res.json("notexist");
        }

    }catch{
        res.json("notexist");
    }

})


app.post("/Instructorregister", async(req,res) =>{
    const{name,email,password,confirmPassword,contact,coursename,description,price,duration} = req.body
    const courseData = {courseName:coursename, description:description, price:price, duration:duration }
    var courseId;

    try{
        
        const check = await Instuctors.findOne({email:email})
        if(check){
            res.json("exist");
        }else{
            if(password == confirmPassword){
                await Courses.insertMany([courseData])
                
                const course = await Courses.findOne({courseName:coursename,description:description});
                res.json(course._id);

                const data = {name:name, email:email, password:password, contact:contact, teach:course._id}
                await Instructors.insertMany([data]);
                
            }else{
                res.json("unequal");
            }
        }

    }catch{
        res.json("notexist");
    }

})

app.get("/Courses", async(req,res) =>{
    try{
        const course = await Courses.find({});
        res.json(course);
    }catch{
        res.json("Error");
    }
    
})

app.get("/Subscribe", async(req,res,next) =>{
    let id = req.query.id;
    currCourseId = id;
    try{
        const course = await Courses.findOne({_id:id});
        const instructor = await Instructors.findOne({teach:id});
        res.json({
            course: course,
            instructor: instructor
        })
        

    }catch{
        res.json("error");
    }
})

app.post("/Subscribe", async(req,res) => {
    let id = req.query.id;
    try{
        const data = {course: id};
        await Users.findOneAndUpdate(
            {email: loginUser},
            {$addToSet: { enroll: data}}
        ).exec();
        res.json("Succesful");
    }catch{
        res.json("Error");
    }
})

app.get("/Dashboard", async(req,res) =>{
    try{
        const userData = await Users.findOne({email: loginUser});
        const courseData = await Courses.find({});
        // for(var i = 0; i<courseDataRaw.length(); i++){
        //     for(var j = 0; j<userData.enroll.length(); j++){
        //         if(courseDataRaw[i]._id == userData.enroll[j].course){
        //             courseData.push(courseDataRaw[i]);
        //             break;
        //         }
        //     }
        // }
        res.json({
            userData: userData,
            courseData: courseData
        })
    }catch{
        res.json("Error");
    }
})

app.get("/Instructordashboard", async(req,res) =>{
    try{
        const currIn = await Instructors.findOne({email: loginInstructor});
        const course = await Courses.findOne({_id: currIn.teach});
        const students = await Users.find({});
        res.json({
            course: course,
            students: students,
            instructor: currIn
        })
    }catch{
        res.json("Error");
    }
})

app.post("/Instructordashboard", async(req,res) =>{
    try{
        const currIn = await Instructors.findOne({email: loginInstructor});
        const lectureUrl = req.query.lectureUrl;
        const data = {lectureUrl: lectureUrl};
        await Courses.findOneAndUpdate(
            {_id: currIn.teach},
            {$addToSet: { lectures: data}}
        ).exec();
        res.json("Success");
    }catch{
        res.json("Error");
    }
})


http.listen(8000, ()=>{
    console.log("Successfully Port Connected.");
})