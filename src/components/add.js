import React, { Component } from 'react';
import axios from 'axios'
import '../styles/add.css'

class Add extends Component {
    constructor() {
        super()
        this.state = {
            userName: "",
            vendor: "",
            amount: "",
            category: "",

        }
    }
    handleAmountChange = (e) => {
        this.setState({
          amount: e.target.value
        })
      } 
    
      handleVendorChange = (e) => {
        this.setState({
          vendor: e.target.value
        })
      } 
    
      handleCategoryChange = (e) => {
        this.setState({
          category: e.target.value
        })
      } 
      handleNameChange = (e) => {
        this.setState({
          userName: e.target.value
        })
      } 
    
      addTrans = async () => {
       let data = {
          amount: this.state.amount,
          vendor: this.state.vendor,
          category: this.state.category
        }
        let name = this.state.userName
        axios.post(`http://localhost:4000/newUserTrans/${name}`, data)
        this.setState({
          amount: "",
          vendor: "",
          category: "",
          userName: ""
        })
        await this.props.getUsers()
      }

    render() {
        return (
            <div id="addContainer">
                <select id="userAdd" placeholder="who are you?" list="names" value={this.state.userName} onChange={this.handleNameChange}>
                    <option id="userValue" value="">who are you?</option>
                    <option value="youval">Youval</option>
                    <option value="adi">Adi</option>
                    <option value="hadas">Hadas</option>
                </select>
                <input id="amountAdd" type="number" placeholder="how much?" value={this.state.amount} onChange={this.handleAmountChange}></input>
                <input id="vendorAdd" placeholder="to who?" value={this.state.vendor} onChange={this.handleVendorChange}></input>
                <input id="categoryAdd" placeholder="category?" value={this.state.category} onChange={this.handleCategoryChange}></input>
                <button id="addButton" onClick={this.addTrans}>send</button>
            </div>
        )
    }
}

export default Add;
