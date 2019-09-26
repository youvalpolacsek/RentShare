import React, { Component } from 'react';
import User from './user';
import '../styles/users.css'

class Users extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: ""
    }
  }

  changeCurrentUser = (e) => {
    this.setState({
      currentUser: e
    })
  }

  render(){
    let total= this.props.total
    return(
      <div id="usersContainer">
        {this.props.users.map(u=> <User total={total} currentUser={this.state.currentUser} changeUser={this.changeCurrentUser} user={u}/> )}
      </div>
    )
  }
}

export default Users;
