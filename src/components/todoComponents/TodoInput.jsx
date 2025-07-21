"use client"

import {useTodos} from '@/context/todoContext'

export default function TodoInput() {
const {input, setInput, addTodo} = useTodos()

  const hadleChange = (e) => {
    console.log('Chnage', e.target.value)
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Input is submitted")
    addTodo()
  }
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={hadleChange}
        placeholder="Add a new task"
        className="flex-grow px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        // onClick={addTodo}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  )
}
