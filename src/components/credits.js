// credits.js

import React, {Component}  from 'react';

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