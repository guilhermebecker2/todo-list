import { useState } from 'react'
import {StyleSheet, Button} from 'react-native'

export default function Header({ filter, setFilter, addTask, setAddTask }) {

    console.log(addTask)

    return (
        <div className='header'>
            <h1>TO-DO LIST</h1>
            <div className='header-buttons'>
            <button
                className='button1'
                onClick={() => setAddTask(true)}> 
                Add Task 
                </button>
            <select className='reference' value={filter} onChange={(e => setFilter(e.target.value))}>
                <option value={'All'}> All </option>
                <option value={'Complete'}> Complete </option>
                <option value={'Incomplete'}> Incomplete </option>
            </select>
            </div>
        </div>
    )
} 