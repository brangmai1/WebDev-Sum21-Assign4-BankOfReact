
// src/components/UserProfile.js

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import Debits from './debits';
import Credits from './credits';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
    render() {
        return (
            <div>
                <h1>Bank of React</h1>
                <h3>User Profile</h3>
                <div>
                    Username: {this.props.userName}
                    <AccountBalance accountBalance={this.props.accountBalance} />
                    Member Since: {this.props.memberSince}
                </div>
                
                <button>
                    <Link to="/debits">Debits</Link> 
                </button>
                <button>           
                    <Link to="/credits">Credits</Link>  
                </button>
                <button>          
                    <Link to="/">Home</Link> 
                </button>
                  
            </div>
        );
    }
}
export default UserProfile;