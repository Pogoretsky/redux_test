import React from 'react';
import TodoRow from './TodoRow' 


const todoList = ({list = []}) =>{
    list.map(item => {
        return (
          <div key={item.id} className="todo-list">
            <TodoRow profile={item}/>
          </div>
        );
    })
};

export default todoList;
