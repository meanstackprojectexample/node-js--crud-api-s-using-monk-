var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var User = require('C:/Users/siriv/Desktop/node/models/user.js');
var cors = require('cors');
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://surendra:Madadluv2@cluster0-f8mbb.mongodb.net/surendra?retryWrites=true&w=majority',{ useNewUrlParser:true, useUnifiedTopology:true})

app.use(cors({
    origin:['http://localhost:4200','http://127.0.0.1:4200','http://localhost:3000'],
    credentials:true
}))

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var database, collection,collection1,data,data1,docs;

//Server Connection
var server = app.listen(8000,function()
{
    var host = server.address().address;
    var port = server.address().port;
    console.log("App listening at http://%s:%s",host,port);
})

// Creating New User
app.post('/create',(req,res,next) =>
{
    var  data = new User({
             firstName : req.body.firstName,
             lastName  : req.body.lastName,
             emailId   : req.body.emailId

         })
            console.log(data);
             data.save((err,docs) =>{
             if(err)
             res.status(500).json({errmsg: err});
             res.status(200).json({msg: docs});
         })
   
})

// Get Entire data
app.get('/read',(req,res,next) =>
{
    User.find({},(err,docs)=>
    {
            if(err)
             res.status(500).json({errmsg: err});
             res.status(200).json({msg: docs});
    })
})
// Find data Using ID
app.get('/read/:id',(req,res,next) =>
{
    User.findById({_id : req.params.id},(err,docs)=>
    {
            if(err)
             res.status(500).json({errmsg: err});
             res.status(200).json({msg: docs});
    })
})

// Updating Data using Id
app.put('/update/:id',(req,res,next) =>
{
    User.findById({_id : req.params.id},(err,docs) =>
    {
        if(err)
        res.status(500).json({errmsg: err});
        	 docs.firstName = req.body.firstName;
             docs.lastName  = req.body.lastName;
             docs.emailId   = req.body.emailId;
        docs.save((err,docs) =>
        {
            if(err)
            res.status(500).json({errmsg: err});
            res.status(200).json({msg: docs});
            
        });
    })
})

// Delete Data
app.delete('/delete/:id',(req,res,next) =>
{
    User.findOneAndRemove({_id : req.params.id}, (err,docs) =>
    {
        if(err)
        res.status(500).json({errmsg: err});
        res.status(200).json({msg: docs});
    })
})