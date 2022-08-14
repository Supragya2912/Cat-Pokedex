
import React from 'react'
import List from './List'

export default function CatBody(props) {
  return (
    <div className="container">
      <h1 className=' my-3'> Cat Name List</h1>
      {props.todos.length===0? "No Catlist to display":
      props.todos.map((todo)=>{
        return <List todo={todo} key={todo.sno}onDelete={props.onDelete} />
      })
    }
    </div>

  )
}