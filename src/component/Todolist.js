import React from 'react'
import { useState } from 'react'
import Todoform from './Todoform'
import Todo from './Todo'

const Todolist = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        if(!todo.text){
            return;
        }
        const new_todos=[todo, ...todos];
        setTodos(new_todos);
    }
    const removeTodo = (id) => {
        let updated_todos = [...todos].filter(todo => todo.id !== id);
        setTodos(updated_todos);
    }
    const completeTodo = (id) => {
        let updated_todos = [...todos].map(todo => {
            if(todo.id === id){
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        })
        setTodos(updated_todos);
    }
  return (
    <div>
        <Todoform addTodo={addTodo}></Todoform>
        <Todo todos={todos} removeTodo={removeTodo} completeTodo={completeTodo}></Todo>
    </div>
  )
}

export default Todolist