const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
    conversation:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    flag:{
        type:Boolean,
        required:true
    }
})

const Messages = mongoose.model("Message", messageSchema)

module.exports = Messages