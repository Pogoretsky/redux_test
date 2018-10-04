import React, { Component } from 'react';
import TodoRow from './TodoRow' 
import TodoInput from './AddTodo'
import CircularProgress from '@material-ui/core/CircularProgress';

class TodoList extends Component {
  static defaultProps = {
    list:[],
    addEvent: ()=>{},
    deleteEvent: ()=>{}
  }

  state={
    inputValue: ''
  }

  saveInputHandler = (event)=>{
    this.setState({
        inputValue: event.target.value
    })
  }

  render(){
    const { list, deleteEvent, addEvent, fetchStatus } = this.props



    return (
      <div className="todo-list">
        {fetchStatus === 'pending' ?
          <CircularProgress
            classes={{
              root: 'classes-state-root',
              circle: 'classes-state-circle'
            }
            }
          /> 
          :
          list.map(item => {
          return (
            <TodoRow key={item.id} profile={item} deleteEvent={deleteEvent}/>
          );
        })}
        <TodoInput addEvent={addEvent} saveInputHandler={this.saveInputHandler} inputValue={this.state.inputValue}/>
      </div>
    )
  }
}

export default TodoList;
