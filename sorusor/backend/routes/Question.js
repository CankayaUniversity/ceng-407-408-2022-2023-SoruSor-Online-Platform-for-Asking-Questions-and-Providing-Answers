const express = require("express");
const router = express.Router();

const questionDB = require("../models/Question");

router.post('/', async (req,res)=>{
    console.log(req.body)

    try{
        await questionDB.create({
            questionName: req.body.questionName,
            questionUrl:req.body.questionUrl
        }).then(()=>{
            res.status(201).send({
                status:true,
                message: "Question is added"
            })
        }).catch(err)=>{
            res.status(400).send({
                status:false,
                message:"Bad format"
            })
        }
    }catch(e){
        res.status(500).send({
            status:false,
            message:"Error while adding question"
        })
    }

})

module.exports = router;
