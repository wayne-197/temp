const mongoose =require('mongoose');

//schema for saving details of user and meme in db
const userSchema=new mongoose.Schema({
    name:{
        type:String, //defines what type of data to be used
        unique:true  // if set true will always allow unique values otherwise would throw error
    },
    caption:{
        type:String,
        unique: true
    },
    url:{
        type:String,
        unique: true
    }

})


//model using schema
const user=mongoose.model('User',userSchema);
module.exports=user;