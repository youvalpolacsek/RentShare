import React, { Component } from 'react';
import Transactions from './transactions'
import '../styles/userData.css'

class UserData extends Component {
    constructor() {
        super()
        this.state = {
            total: ""
        }
    }


    render() {
        return (
            <div id="userDataContainer">
                <div>your total so far is {this.props.total} shekels</div>
                <div>
                    <span>your transactions are:</span>
                    <Transactions trans={this.props.user.transactions} />
                </div>
                {/* <div>{this.props.trans}</div> */}
            </div>
        )
    }
}

export default UserData