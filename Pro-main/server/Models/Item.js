const express=require("express");
const mongoose=require("mongoose");
const ItemSchema=new mongoose.Schema({
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

const Item=mongoose.model('Item',ItemSchema);
module.exports=Item;