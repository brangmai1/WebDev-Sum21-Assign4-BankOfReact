
// src/components/Home.js

import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import LogIn from './Login';
import {Link} from 'react-router-dom';
import BankPic from './images/bankPic.png';

class Home extends Component {
    render() {
        return(
            <div>
                <img src={BankPic} alt={"Bank"} height={400} width={800}/>
                <h4>Welcome to</h4>
                <h1>Bank of React</h1>
                <p>Home Page</p>
                <button><Link to="/login">Login</Link></button>
            </div>
        );
    }
}

export default Home;

