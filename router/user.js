const { json } = require('express');
const express=require('express');
const User = require('../model/model');

//For setting up router
const router=express.Router();

//default home page router
router.get('/',(req,res)=>{
    res.send('uo');
});

//adding user to database
router.post('/memes',async(req,res)=>{
    const user=new User(req.body);
    try{
      await user.save();
      res.status(201).json(user._id);
    }catch(error){
        res.status(400).json(error.message);
    }
});

//getting a user by its id from database
router.get('/memes/:id',async(req,res)=>{
    const _id=req.params.id;
    try{
        const user=await User.findById(_id);

        if(!user){
            return res.status(400).send();
        }
    
        res.json({
            "name":user.name,
            "caption":user.caption,
            "url":user.url
        })
        }catch(e){
                res.status(500).send();
        
        }
});

//getting all the user from database
router.get('/memes',async(req,res)=>{
    try{
        const users=await User.find({});
        res.send(users);
    }catch{
        res.status(500).send();
    }
});

//updating caption and url of a user
// which is selected on basis of the id
router.patch('/memes/:id',async(req,res)=>{
    const _id=req.params.id;
    const updates=Object.keys(req.body)
    try{
        const user=await User.findById(_id);
        const caption=req.body.caption;
        const url=req.body.url;
        
        if(!user){
            return res.status(404).send();
        }
        updates.forEach((update)=>{
            user[update]=req.body[update]
        })
         await user.save();
         res.send(user);
    }catch{
        res.status(400).send()
    }
})
module.exports=router;