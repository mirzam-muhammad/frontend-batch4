"use client"

import {useState} from 'react'
import {useTodos} from '@/context/todoContext'

export default function TodoInput() {
  const [text, setText] = useState("")
  const {state, dispatch, addTodo} = useTodos()

  const hadleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(text.trim()) {
      addTodo(text.trim());
      setText("");
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={hadleChange}
        placeholder="Add a new task"
        className="flex-grow px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  )
}
