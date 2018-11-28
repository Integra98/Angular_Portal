const mongoose = require('mongoose');

const TasksSchema = mongoose.Schema({
    taskName:{
        type: String,
        required:true
    },
    status:{
        type: String,
        default: 'Выполняется'
    },
    responsible:{
        type: Object
    },
    startDate:{
        type: String
    },
    endDate:{
        type: String
    },
    defenition:{
        type: String
    },
    taskBought:{
        type:Boolean,
        required:false
    }

});
const ProjectSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    responsible:{
        type: Object
    },
    status:{
        type: String,
        default: 'Выполняется'
    },
    startDate:{
        type: String
    },
    endDate:{
        type: String
    },
    deadline:{
        type: String
    },
    tasks:[TasksSchema]
    
});

const Project = module.exports = mongoose.model('Project',ProjectSchema);

