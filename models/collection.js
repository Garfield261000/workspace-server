const mongoose = require("mongoose");

const collectionSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    access:{
        type: String,
        required: true
    }
},
{timestamps : true}
);

module.exports = mongoose.model("collection", collectionSchema)