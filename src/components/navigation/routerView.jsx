"use client"

import {Routes, Route} from 'react-router-dom'
import Home from '@/app/page'
import TodoHome from '@/app/todo-list/page'
import KataPage from '@/app/kata/page'
import HelloPage from '@/app/(group1)/hello/page'
import FormPage from '@/app/form/page'
import EventExample from '@/app/(group1)/bubling/page'

export default function RouterView() {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/todo-list' element={<TodoHome/>}/>
            <Route path='/kata' element={<KataPage/>}/>
            <Route path='/hello' element={<HelloPage/>}/>
            <Route path='/form' element={<FormPage/>}/>
            <Route path='/bubling' element={<EventExample/>}/>
        </Routes>
    )
}