import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as listActions from '../actions/todoListActions'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <TodoList/>
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
    addEvent: listActions.addEvent
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
