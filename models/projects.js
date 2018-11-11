const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    }
});

const Project = module.exports = mongoose.model('Project',ProjectSchema);