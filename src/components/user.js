import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import UserData from './userData'

class User extends Component {
  constructor(){
    super()
    this.state = {
      total: "",
      showing: false,
      difference: ""
    }
  }
  showTotal = async () => {
    let numbers = await this.props.user.transactions.map(t => t.amount)
    let total = 0
    for (var i = 0; i < numbers.length; i++) {
      total += numbers[i]
    }
    this.setState({
      total: total
    })
    this.findDifference()
  }

  componentDidMount = () => {
    this.showTotal()

  }

  changeUser = () => {
    this.props.changeUser(this.props.user.name)
  }

  findDifference = async () => {
    let usersTotal = this.props.total/3
    // console.log(usersTotal)
    let singelUserTotal = this.state.total
    // console.log(singelUserTotal)
    let x = usersTotal - singelUserTotal
    let difference = Math.ceil(x)
    // console.log(difference)
    this.setState({
      difference: difference
    })
  }


  render(){
    let currentUser = this.props.currentUser
    let name = this.props.user.name 
    let dif = this.state.difference
    return(
      <Router>
        <Link to="/user">
        <div onClick={this.changeUser}>{this.props.user.name}</div>
        </Link>
        <Route path="/user" exact render={() => currentUser===name? <UserData total={this.state.total}user={this.props.user}/>: null }/>
        <div>you need to {this.state.difference >= 0 ? "pay " + dif +" shekels": "get " + ((dif*-1)+1)+" shekels"}</div>
      </Router>
    )
  }
}

export default User;
