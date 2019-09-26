import axios from 'axios'
import React, { Component } from 'react';

class ApiClient extends Component{
    constructor() {
        super()
        this.state ={
            URLname = "http://localhost:4000",
            userName = ""
        }
    }

    addNewUser = async(name) => await axios.post(`${this.state.URLname}/new/${this.state.userName}`, { name });
    
    addUserTrans = async(amount, category, vendor) => await axios.post(`${this.state.URLname}/newUserTrans/${this.state.userName}`, { amount, category, vendor });
    


//     findAllUser = async(name) => await axios.get(`${this.URLname}/existingUser`, { name });
    
//     getAllContacts = async() => await axios.get(`${this.URLname}/userContacts/${UserStore.currentUserID}`);
    
//     deleteUserContact = async(userID, contactID) => await axios.delete(`${this.URLname}/deleteUserContact`, { data: { contactId: contactID, userId: userID } });

//     updateUserContactNumber = async(contactID, phoneNumber) => await axios.put(`${this.URLname}/updateUserContactNumber/${contactID}`, { phoneNumber });
render(){
    return
}
}

export default ApiClient