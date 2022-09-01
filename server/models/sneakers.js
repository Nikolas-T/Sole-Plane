const { Schema, model } = require('mongoose');

const sneakerSchema = new Schema({
    shoeName:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    silhoutte:{
        type:String,
        required:true
    },
    styleID:{
        type:String
    },
    make:{
        type:String,
        required:true
    },
    colorway:{
        type:String,
        required:true
    },
    retailPrice:{
        type:Number,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    releaseDate:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    urlKey:{
        type:String
    },
    imageLinks:{
        type:String
    },
    resellLinks:[
        {
            type:String,
            trim:true,
            required:true
        }
    ],
    lowestResellPrice:{
        type:Object
    },


});

const Sneakers = model('Sneakers', sneakerSchema);

module.exports = Sneakers;

