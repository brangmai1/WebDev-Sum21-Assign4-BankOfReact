// src/components/credits.js

import React, {Component}  from 'react';
import UserProfile from './UserProfile';
import {Link} from 'react-router-dom';

class Credits extends Component {
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
                <h3>Credits Page</h3>
            
                <button>
                    <Link to="/userProfile">Back to User Profile</Link>
                </button> 
            </div> 
        )
    }

}

export default Credits;