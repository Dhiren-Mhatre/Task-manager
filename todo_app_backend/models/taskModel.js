const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date },
    category: { type: String },
    completed: { type: Boolean, default: false },
    priority: { type: Number, default: 0 } // New field for priority
});

module.exports = mongoose.model('Task', taskSchema);
