import React from 'react'
import { useState } from 'react'

const Todoform = (props) => {
    const [input, setInput] = useState('')
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const submit = (e) => {
        e.preventDefault();
        props.addTodo({
            id: Math.floor(Math.random()*10000),
            text: input,
            isCompleted: false
        })
        setInput('');
    }
  return (
    <div>
        <form className='todo_form'>
            <input type="text" placeholder="Add a todo" value={input} name="text" onChange={handleChange} className='todo_form_input'/>
            <button type='submit' onClick={submit} className='todo_form_submit_button'>Add todo</button>
        </form>
    </div>
  )
}

export default Todoform