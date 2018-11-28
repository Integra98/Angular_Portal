const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    DateOfBirth:{
        type:String,
    },
    Position:{
        type:String
    },
    Email:{
        type:String
    },
    Phone:{
        type:Number
    },
    Photo:{
        type:String
    },
    Projects: {
        type: []
    }
});

const Employee = module.exports = mongoose.model('Employee',EmployeeSchema);