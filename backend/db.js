const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://kalyanamvenumadhav:Venu%40123@cluster0.hfc0h.mongodb.net/");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {todo};