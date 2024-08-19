const mongoose = require('mongoose');

// Define a Task schema
const taskSchema = new mongoose.Schema({
    text: { type: String, required: true }
});

// Create a model from the schema
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
