import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CatBody from './components/CatBody';
import { AddList } from './components/AddList';





function App() {

  const onDelete = (todo) => {

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

  }

  const addList = (title, breed, desc) => {
    const myList = {
      title: title,
      breed: breed,
      description: desc,
    }
    setTodos([...todos, myList]);


  }

  const [todos, setTodos] = useState('');

  return (
    <>

      <Header />
      <AddList addList={addList} />
      <CatBody todos={todos} onDelete={onDelete} />
    </>


  );
}
export default App;
