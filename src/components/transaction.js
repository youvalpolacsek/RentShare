import React, { Component } from 'react';
import '../styles/transaction.css'
import axios from 'axios'


class Transaction extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

deleteTrans = async () => {
  return await axios.delete("http://localhost:4000/transaction", {data: this.props.trans})
}

  render(){
    return(
      <div id="transContainer">
        <div id="vendor">to who: {this.props.trans.vendor}</div>
        <div id="amount">how much: {this.props.trans.amount}</div>
        <div id="category">what is it: {this.props.trans.category}</div>
        <button id="deleteButton" onClick={this.deleteTrans}>delete transaction</button>
      </div>
    )
  }
}

export default Transaction;
