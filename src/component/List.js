import React, { useContext } from 'react'
import ListItems from './ListItems'
import { DataContext } from './DataProvider'

export default function List() {
  const [todos, setTodos] = useContext(DataContext);

  const switchComplete = id => {
    const newTodos = [...todos]
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.complete = !todo.complete
      }
    })
    setTodos(newTodos)
  }



  const handleEditTodos = (editvalue, id) => {
    const newTodos = [...todos]
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.name = editvalue
      }
    })
    setTodos(newTodos)
  }

  return (

    <ul>
      {
        todos.map((todo, index) => (
          <ListItems todo={todo} key={index} id={index}
            checkComplete={switchComplete} handleEditTodos={handleEditTodos} />
        ))
      }
    </ul>

  )
}