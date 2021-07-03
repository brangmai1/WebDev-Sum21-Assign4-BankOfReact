// src/components/credits.js

import React, {Component}  from 'react';
import UserProfile from './UserProfile';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Credits extends Component {
    constructor (props) {
        super(props)
        this.state = {
            credits: []
        }
    }
    componentDidMount() {
        axios.get('https://moj-api.herokuapp.com/credits')
            .then(response => this.setState({
                credits: response.data}));
    }
    addCredit(amount) {
        // <AccountBalance accountBalance={this.props.accountBalance - amount}/>
    }
    render () {
        return (
            <div>
                <h1>Bank Of React</h1>
                <h3>Credits Page</h3>
               
            
                <button>
                    <Link to="/userProfile">Back to User Profile</Link>
                </button> 
            </div> 
        )
    }

}

export default Credits;