const express = require('express');
const router = express.Router();
const Task = require('../models/task');


router.post('/api/tasks', async (req, res) => {
  try {
    const { title, description, status } = req.body;

    
    const newTask = new Task({ title, description, status });
    await newTask.save();

    res.status(201).json({ message: 'Tarea creada exitosamente', task: newTask });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la tarea', details: error.message });
  }
});

module.exports = router;
