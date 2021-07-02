// debits.js

import React, {Component} from 'react';
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
            <h1>Debits</h1>
        );
    }
    
}

export default Debits;