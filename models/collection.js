const mongoose = require("mongoose");

const collectionSchema = mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
    name:{
        type: String,
        required: true
    },
    access:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    
},
{timestamps : true}
);

module.exports = mongoose.model("collection", collectionSchema)