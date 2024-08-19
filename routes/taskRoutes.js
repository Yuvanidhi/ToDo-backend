const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Get all tasks
router.get('/', taskController.getTasks);

// Create a new task
router.post('/', taskController.createTask);

// Delete a task
router.delete('/:id', taskController.deleteTask);

module.exports = router;
