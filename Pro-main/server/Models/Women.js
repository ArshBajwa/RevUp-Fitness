const express=require("express");
const mongoose=require("mongoose");
const WomenSchema=new mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Women=mongoose.model('Women',WomenSchema);
module.exports=Women;