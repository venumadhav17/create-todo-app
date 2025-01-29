const express = require("express");
const app = express();
const PORT = 3000;
const {createTodo, updateTodo} = require("./types");
const { todo } = require("./db");
const cors = require("cors");

//middleware
app.use(express.json()); // parse the body if it's a json body.
app.use(cors());

app.post("/todo", async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    // put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async function(req, res){
    const response = await todo.find({})
    console.log(response);
    res.json({
        todos: response
    })

});

app.put("/completed", function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    todo.updateOne({
        id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
});

app.listen(PORT);