import React, { Component } from 'react'

import {addTodo} from '../services/api'

export default class AddTodo extends Component {

  state={
    todoId:'',
    Title:'',
    status:false
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Id
            <input type="text" name="todoId" onChange={(e) => {
              this.setState({todoId:e.target.value})
            }}/>
          </label>

          <label>
            Title
            <input type="text" name="Title" onChange={(e) => {
              this.setState({Title:e.target.value})
            }}/>
          </label>

          <label>
            Status
            <input type="text" name="status" onChange={(e) => {
              if(e.target.value === "1"){
                this.setState({status:true})
              }
            }} />
          </label>
          
          <button onClick={(e) => {
            e.preventDefault()
            addTodo(this.state)
              .then(res => console.log(res))
              .catch(err => console.log(err))
            }}>Submit</button>

        </form>
      </div>
    )
  }
}
