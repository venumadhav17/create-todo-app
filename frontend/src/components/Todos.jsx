/* todos = [
{
title: "go to gym",
description: "go to gym"
}] */

export function Todos({todos}) {
    // const todos = props.todos
    console.log(todos);

    return <div>
        {todos.map(function(todo){
            return <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
    }