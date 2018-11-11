const express = require('express');
const router = express.Router();

const Project=require('../models/projects')
//retrieving data
router.get('/projects',(req,res,next)=>{
    Project.find(function(err,projects){
        res.json(projects);
    })
});

//add project
router.post('/project',(req,res,next)=>{
    let newProject = new Project({
        name : req.body.name
    });

    newProject.save((err, project) => {
        if(err){
            res.json({msg: 'Failed to add Project'});
        }
        else{
            res.json({msg: 'Project added succesfully'});
        }
    });
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