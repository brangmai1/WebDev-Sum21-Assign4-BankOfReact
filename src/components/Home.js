
// src/components/Home.js

import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import LogIn from './Login';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return(
            <div>
                {/* <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank" /> */}
                <img src="bankPic.png" alt="Bank"/>
                <h4>Welcome to</h4>
                <h1>Bank of React</h1>

                <button>
                    <Link to="/userProfile">User Profile</Link>
                </button>
                <button>
                    <Link to="/login">Log in</Link>
                </button>

                <AccountBalance accountBalance={this.props.accountBalance} />
            </div>
        );
    }
}

export default Home;

