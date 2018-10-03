import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as listActions from '../actions/todoListActions'
class App extends Component {

  componentDidMount(){
    this.props.fetchList('https://reqres.in/api/users?page=2')
  }

  render() {
    console.log('this.props.todoList.data',this.props.todoList.data)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <TodoList list={this.props.todoList.data}/>
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
    fetchList: listActions.fetchList
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
