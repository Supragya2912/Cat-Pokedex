import React from 'react'


function List({todo, onDelete}) {

   return (
        <div>
        <h2>{todo.title}</h2>
        <h2>{todo.breed}</h2>
        <p>{todo.description}</p>
        <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}

export default List