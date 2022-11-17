import React, { useState } from 'react'

const Todos = () => {
  const array = [
    {
      id: 1,
      text: 'wake up',
    },
    {
      id: 2,
      text: 'eat',
    },
    {
      id: 3,
      text: 'drink',
    },
    {
      id: 4,
      text: 'lsdjflds',
    },
    // 'sadlfsdfjds'
  ]

  const [todosList, setTodosList] = useState(array)
  const [value, setValue] = useState('')

  const addTodo = () => {
    setTodosList((prev) => [...prev, { id: todosList.length + 1, text: value }])
    setValue('')
  }

  const changeValue = (newValue) => {
    setValue(newValue)
  }

  // [1, 2, 3, 4, 5]
  const removeTodo = (id) => {
    return () => {
      // setTodosList(todosList.slice(0, index).concat(todosList.slice(index + 1)))
      setTodosList(
        todosList.filter((todo) => {
          return todo.id !== id
        })
      )
    }
  }

  return (
    <div style={{ marginTop: 100 }}>
      <input
        type="text"
        placeholder="Enter todo... "
        value={value}
        onChange={(event) => changeValue(event.target.value)}
      />
      <button onClick={addTodo} style={{ marginBottom: 50 }}>
        Add
      </button>
      {todosList.map((todo, i) => {
        // todo === todo[i], i ==== i
        return (
          <div key={i} style={{ display: 'flex' }}>
            <input type="checkbox" />
            <div>{todo.text}</div>
            <button onClick={removeTodo(todo.id)}>remove</button>
          </div>
        )
      })}
    </div>
  )
}

export default Todos
