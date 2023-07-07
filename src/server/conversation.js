const mongoose = require("mongoose");

const conversationSchema = mongoose.Schema({
    student:{
        type:String,
        required:true
    },
    instructor:{
        type:String,
        required:true
    }
})

const Conversations = mongoose.model("Conversation",conversationSchema)

module.exports = Conversations