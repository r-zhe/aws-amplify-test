import React, { Component } from 'react'

import {getTodo} from '../services/api'

export default class GetTodo extends Component {

  componentDidMount(){
    getTodo()
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <p>Get todo</p>
      </div>
    )
  }
}
