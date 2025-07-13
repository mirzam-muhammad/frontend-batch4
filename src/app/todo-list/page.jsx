"use client"

import {useState} from 'react'
import TodoList from '@/components/todoComponents/todoList'
import TodoInput from '@/components/todoComponents/TodoInput'


export default function TodoPage() {
    
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")

    const addTodo = () => {
        if (!input.trim()) return
        setTodos([...todos, {id: Date.now(), text: input, done: false}])
        setInput("")
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
        <div className='w-full max-w-md space-y-4'>
            <TodoInput input={input} setInput={setInput} addTodo={addTodo}/>
            <TodoList todos={todos}/>
        </div>
        </main>
    );
}