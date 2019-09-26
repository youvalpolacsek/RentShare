import React, { Component } from 'react';
import './App.css';
import Users from './components/users'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Add from './components/add'

class App extends Component {
  constructor(){
    super()
    this.state = {
      Users : [],
      total: ""
    }
  }

  async getUsers() {
    return await axios.get("http://localhost:4000/users")
  }

  async getTrans(){
    return await axios.get("http://localhost:4000/transactions")
  }

  async componentDidMount() {
    const users = await this.getUsers()
    this.setState({ Users: users.data })
    this.getTransData()
  }

  getTransData = async () => {
    const trans = await this.getTrans()
    let mappedTrans = trans.data.map(t=> t.amount)
    let total = 0
    for (var i = 0; i < mappedTrans.length; i++) {
      total += mappedTrans[i]
    }
    this.setState({ total: total })
  }

  deleteAllTrans = async () => {
    let sure = prompt("are you sure?","yes")
    if(sure !== null)
    {await axios.delete("http://localhost:4000/transactions")}
  }

  render(){
    return(
      <Router>
      <div id="appContainer">
        <h1 id="appHeader">RentShare</h1>
        <div id="optionContainer">
        <Link id="addHeader" to="/add"><div >New Transaction</div></Link>
        <Link id="userHeader" to="/users"><div >Show All</div></Link>
        </div>
        <div id="routeContainer">
        <Route path="/users" exact render={() => <Users className="comp" total={this.state.total} users={this.state.Users}/>} />
        <Route path="/add" exact render={() => <Add className="comp" getUsers={this.getUsers}/>} />
        </div>
        <h3 id="soFar">so far {this.state.total} shekels were paid</h3>
        <button id="resetButton" onClick={this.deleteAllTrans}>all has been paid</button>
      </div>
      </Router>
    )
  }
}

export default App;


