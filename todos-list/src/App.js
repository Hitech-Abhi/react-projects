import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {AddTodo} from "./MyComponents/AddTodo";
import {Footer} from "./MyComponents/Footer";
import {About} from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  
  const onDelete = (todo)=>{
    console.log('I am onDelete of todo', todo);
    // Deleting this way will not work in React
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    console.log('deleted', todos);    
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc)=>{
    console.log('I am adding this todo', title, desc);
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <Router>
    <Header title="My Todos List" searchBar={false}/>
      <Routes>
      <Route path='/'element={
          <>
          <AddTodo addTodo={addTodo}/>
          <Todos todos={todos} onDelete={onDelete}/>
          <Footer/>
          </>
          }
        />
      <Route exact path="/about" element={<About/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
