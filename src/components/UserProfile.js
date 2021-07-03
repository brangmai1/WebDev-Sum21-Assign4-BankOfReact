
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

                <div>Username: {this.props.userName}</div>
                <AccountBalance accountBalance={this.props.accountBalance} />
                <div>Member Since: {this.props.memberSince}</div>
                <botton>
                    <Link to="/debits">Debits</Link>
                </botton>
                <botton>
                    <Link to="/credits">Credits</Link>
                </botton>
                <button>
                    <Link to="/">Return to Home</Link>
                </button>
                
            </div>
        );
    }
}
export default UserProfile;