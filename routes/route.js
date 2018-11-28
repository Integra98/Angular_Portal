const express = require('express');
const router = express.Router();

const Project=require('../models/projects')
const Employee=require('../models/employees')

//retrieving data
router.get('/projects',(req,res,next)=>{
    Project.find(function(err,projects){
        res.json(projects);
    })
});

router.get('/employees',(req,res,next)=>{
    Employee.find(function(err,employees){
        res.json(employees);
    })
});

router.get('/getproject/:id',(req,res,next)=>{
    Project.findOne({_id:req.params.id},function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

router.get('/getemployee/:id',(req,res,next)=>{
    Employee.findOne({_id:req.params.id},function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
//add project
router.post('/project',(req,res,next)=>{
    let newProject = new Project({
        name : req.body.name,
            responsible: req.body.responsible,
            status: req.body.status,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            deadline: req.body.deadline,
            tasks : req.body.tasks
    });

    newProject.save((err, project) => {
        if(err){
            res.json(err);
        }
        else{
            res.json({msg: 'Project added succesfully'});
        }
    });
});

//update project
router.put('/updateproject/:id',(req,res,next)=>{
    Project.updateOne({_id:req.params.id},{
        $set :{
            name : req.body.name,
            responsible: req.body.responsible,
            status: req.body.status,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            deadline: req.body.deadline,
            tasks : req.body.tasks
        }
    },function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
});


//delete project
router.delete('/project/:id',(req,res,next)=>{
    Project.remove({_id:req.params.id},function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

module.exports = router;

//add employee
router.post('/employee',(req,res,next)=>{
    let newEmployee = new Employee({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        DateOfBirth : req.body.DateOfBirth,
        Position: req.body.Position,
        Email: req.body.Email,
        Phone: req.body.Phone,
        Photo: req.body.Photo


    });

    newEmployee.save((err, employee) => {
        if(err){
            res.json({msg: 'Failed to add employee'});
        }
        else{
            res.json({msg: 'Employee added succesfully'});
        }
    });
});

//update employee
router.put('/updateemployee/:id',(req,res,next)=>{
    Employee.updateOne({_id:req.params.id},{
        $set :{
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        DateOfBirth : req.body.DateOfBirth,
        Position: req.body.Position,
        Email: req.body.Email,
        Phone: req.body.Phone,
        Photo: req.body.Photo,
        Projects: req.body.Projects
        }
    },function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
});

//delete employee
router.delete('/employee/:id',(req,res,next)=>{
    Employee.remove({_id:req.params.id},function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

module.exports = router;