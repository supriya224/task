import React, { useState, useContext, useRef, useEffect } from 'react'
import { DataContext } from './DataProvider';
import {FaPlus} from 'react-icons/fa'


export default function FormInput() {

    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState('');
    const todoInput = useRef("");



    const addTodo = e => {
        e.preventDefault();
        setTodos([...todos, { name: todoName, complete: false }])
        setTodoName('');
        todoInput.current.focus();
    }


    useEffect(() => {
        todoInput.current.focus();
    })
    // getting the local storage
    useEffect(() => {
        const todoJSON = localStorage.getItem("todos")
        const retrievedTodos = JSON.parse(todoJSON);
        if (retrievedTodos.length > 0) {
            setTodos(retrievedTodos);
        };

    },[setTodos]);


    // setting the local storage
    useEffect(() => {
        const todoJSON = JSON.stringify(todos);
        localStorage.setItem("todos", todoJSON);
    }, [todos]);




    return (
        <form autoComplete='off' onSubmit={addTodo}>
            <input type='text' name="todos" id="todos" ref={todoInput}
                required placeholder='what needs to be done?'
                value={todoName}
                onChange={e => setTodoName(e.target.value.toLowerCase())}
                />
            <button type="submit">< FaPlus className='btn-icon-add' /></button>
        </form>
    )
}


