import React, { Component } from 'react';


const addTodo = ()=>{
    return (
        <div className="todo-input">
            <label htmlFor="todoInput"> Add your planned event </label>
            <input name="todoInput"/>
        </div>
    )
}

export default addTodo;
