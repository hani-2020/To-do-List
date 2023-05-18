import React from 'react'
import  {RiCloseCircleLine}  from 'react-icons/ri'
import {TiTick} from 'react-icons/ti'

const Todo = ({todos,completeTodo, removeTodo}) => {
  return todos.map((todo, index) => (
    <div className={todo.isCompleted ?'complete_task_div' :'task_div'} key={index}>
        <div className='todo_text'>{todo.text}</div>
        <div className='icons' key={todo.id}>
            <TiTick className='tick' onClick={()=>{completeTodo(todo.id)}}></TiTick>
            <RiCloseCircleLine className='cross' onClick={()=>{removeTodo(todo.id)}}></RiCloseCircleLine>
        </div>
    </div>
  ))
}

export default Todo