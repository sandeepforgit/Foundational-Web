import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todoSlice'

function List() {
    const todos = useSelector((state) => state.todos.todos)
    const dispatch = useDispatch()
  return (
    <div class="grid  outline outline-2 m-10 mx-44 min-h-5">
        {todos.map((todo)=>(
          <>
          <div class="flex gap-5 w-80 p-2">
            <h1 class="flex justify-start" key={todo.id}>*{todo.text}</h1>
            <button class="self-end outline outline-1 rounded"
            onClick={()=>dispatch(removeTodo(todo.id))}
            >Delete</button>
          </div>
          </>
          ))}
    </div>
  )
}

export default List