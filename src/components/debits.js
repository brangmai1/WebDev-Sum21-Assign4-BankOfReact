// src/components/debits.js

import React, {Component} from 'react';
import UserProfile from './UserProfile';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Debits extends Component{
    constructor (props) {
        super(props) 
        this.state = {
            debits: [],
            isLoaded: false,
        }
    }
    componentDidMount() {
        axios.get('https://moj-api.herokuapp.com/debits')
            .then(response => this.setState({
                debits: response.data }));
    }

    addDebit(amount) {
        <AccountBalance accountBalance={this.props.accountBalance + amount}/>
    }

    render () {
        return (
            <div>
                <h1>Bank of React</h1>
                <h3>Debits Page</h3>
                <div>
                    <li>Account holder: </li>
                    <li>Checking Account: $</li>             
                    <li>Savings Account: $</li>
                </div>
                <div>
                <ul>
                    <button>
                        <Link to="/userProfile">Back to User Profile</Link>
                    </button>  
                </ul> 
                </div>         
            </div>          
        );
    }
    
}

export default Debits;