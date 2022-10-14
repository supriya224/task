import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from './DataProvider'

export default function Footer() {
  const [checkAll, setCheckAll] = useState('true')
  const [todos, setTodos] = useContext(DataContext)

  const handleCheckAll = () => {
    const newTodos = [...todos]
    newTodos.forEach(todo => {
      todo.complete = !checkAll
    })
    setTodos(newTodos)
    setCheckAll(!checkAll)
  }

  const newTodosComplete = () => {
    return todos.filter(todo => {
      return todo.complete === false
    })
  }

  const deleteTodo = () => {
    setTodos(newTodosComplete())
    setCheckAll(false)
  }
  //  to set the data in the local storage
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(todos))
  }, [todos]);

  // get the data in local storage
  
  return (
    <>
      {
        todos.length === 0 ? <h2> Congratulations! To do Notes </h2>
          : <div className="row">
            <label htmlFor="all">
              <input type="checkbox" name="all" id="all" onClick={handleCheckAll} checked={checkAll} />
              ALL
            </label>
            <p>You have {newTodosComplete().length} to do </p>
            <button id="delete" onClick={deleteTodo} >Delete</button>
          </div>

      }
    </>
  )

}

