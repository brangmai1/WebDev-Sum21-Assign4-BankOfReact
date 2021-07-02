// credits.js

import React, {Component}  from 'react';
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
            <h1>Credits</h1>
        )
    }

}

export default Credits;