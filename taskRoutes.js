const express = require('express')
const router = express.Router();
const Task = require('../models/task')

router.get('/tasks' , async (req , res) => {
    try{
        const task = await Task.find()
        res.status(200).json(task)
    }
    catch{
        res.status(500).json({error : err.message })
    }
})

router.post('/tasks' , async (req , res) =>{
    try {
        const task = new Task(req.body);
        await task.save()
        res.status(200).json({message: "added succesfully" , task})
    } catch (err) {
        res.status(400).json({error : err.message}) 
    }
})

router.delete('/tasks/:id' , async (req , res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({message : "task deleted successfully" , task})
    } catch (err) {
        res.status(400).json({error : err.message})
    }
})
router.put('/tasks/:id' , async (req , res) => {
    try {
        // const task = await Task.findById(req.params.id);
        const task = await Task.findByIdAndUpdate(req.params.id , req.body)
        const newTask = await Task.findById(req.params.id)
        // const newTask = await Task.findById(req.params.id)
        res.status(200).json({message : "task updated successfully" , newTask})
    } catch (err) {
        res.status(400).json({error : err.message})
    }
})
module.exports = router;
