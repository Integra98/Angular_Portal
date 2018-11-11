//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//connect to MongoDb
mongoose.connect('mongodb://localhost:27017/MyProject');

//on connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to MongoDB @27017');
});

mongoose.connection.on('error',()=>{
    if(err){
        consolelog('Error in Database connection:'+ err);
    }
    console.log('Connected to MongoDB @27017');
});

//port 
const port = 3000;

//adding middleware cors
app.use(cors());

//bodyparser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/api',route);

//testing server
app.get('/',(req,res,next)=>{
    res.send('HELLO!');
})

app.listen(port,()=>{
    console.log("Server started on port:"+port);
});