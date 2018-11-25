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
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    }
});

const Employee = module.exports = mongoose.model('Employee',EmployeeSchema);