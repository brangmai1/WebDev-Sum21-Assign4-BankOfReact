// src/components/debits.js

import React, {Component} from 'react';
import UserProfile from './UserProfile';
import {Link} from 'react-router-dom';


class Debits extends Component{
    constructor () {
        super() 
        this.state = {
            accountBalance: 0,
            currentUser: ''
        }
    }
    render () {
        return (
            <div>
                <h1>Bank Of React</h1>
                <h3>Debits Page</h3>
                <p>Account holder: </p>
                <p>Checking Account: $</p>
                <p>Savings Account: $</p>            
                <button>
                    <Link to="/userProfile">Back to User Profile</Link>
                </button>  
            </div>          
        );
    }
    
}

export default Debits;