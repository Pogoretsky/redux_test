import React, { Component } from 'react';
import './App.scss';
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as listActions from '../actions/todoListActions'

class App extends Component {

  componentDidMount(){
    this.props.fetchList('https://reqres.in/api/users?page=2')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Something like todo list :)</h1>
        </header>
        <TodoList
          fetchStatus={this.props.todoList.fetchStatus} 
          list={this.props.todoList.data} 
          addEvent={this.props.addEvent} 
          deleteEvent={this.props.deleteEvent}
        />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    ...state
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    addEvent: listActions.addEvent,
    deleteEvent: listActions.deleteEvent,
    fetchList: listActions.fetchList
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
