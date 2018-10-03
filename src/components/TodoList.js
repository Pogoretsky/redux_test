import React from 'react';
import TodoRow from './TodoRow' 


const todoList = ({list = []}) =>{
  return <div className="todo-list">
    {list.map(item => {
      return (
        <TodoRow key={item.id} profile={item}/>
      );
    })}
  </div>
};

export default todoList;
