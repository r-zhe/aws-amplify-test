import React from 'react'

import logo from './logo.svg';
import './App.css';

import {Route,NavLink } from 'react-router-dom'

import AddTodo from './screens/AddTodo'
import GetTodo from './screens/GetTodo'

function App() {
  return (
    <React.Fragment>

      <div className="App">
        <button><NavLink to="/">Home</NavLink></button>
        <button><NavLink to="/add-todo">Add</NavLink></button>
        <button><NavLink to="/get-todo">Get</NavLink></button>

      </div>
      <Route path="/get-todo" exact component={GetTodo}/>
      <Route path="/add-todo" exact component={AddTodo}/>

    </React.Fragment>

  );
}

export default App;
