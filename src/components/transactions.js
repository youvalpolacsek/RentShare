import React, { Component } from 'react';
import Transaction from './transaction';
import '../styles/transactions.css'

class Transactions extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return(
      <div id="transContainer">
        {this.props.trans.map(t => <Transaction key={t}trans={t}/> )}
      </div>
    )
  }
}

export default Transactions;
