// src/components/credits.js
import React, {Component, useState, useEffect} from 'react';
import UserProfile from './UserProfile';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Credits() {
    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://moj-api.herokuapp.com/debits');

        const items = await data.json();
        // console.log(items);
        setItems(items);
    }

    return (
        <div>
            <div class="credit-info">
                <h1>Bank of React</h1>
                <h3>Credits Page</h3>
                <div class="credit-info-items">  
                    {items.map(item => (
                    <ul>            
                        <li>ID: {item.id}</li>
                        <li>Description: {item.description}</li>
                        <li>Amount: {item.amount} </li>
                        <li>Date: {item.date}</li>
                    </ul>
                    ))}
                </div>
            </div>
            <button>
                <Link to="/userProfile">Back to User Profile</Link>
            </button> 
        </div>
    );
}


// class Credits extends Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             credits: [],
//             isLoaded: false,
//         }
//     }
//     componentDidMount() {
//         axios.get('https://moj-api.herokuapp.com/credits')
//             .then(response => this.setState({
//                 credits: response.data}));
//     }
//     addCredit(amount) {
//         // <AccountBalance accountBalance={this.props.accountBalance - amount}/>
//     }
//     render () {
//         return (
//             <div class="credit-info">
//                 <h1>Bank of React</h1>
//                 <h3>Credits Page</h3>
//                 <div class="credit-info-items">     
//                     <li>Account holder's ID: ${}</li>
//                     <li>Description: ${}</li>             
//                     <li>Amount: ${}</li>
//                     <li>Date: ${}</li>
//                 </div>            
//                 <button>
//                     <Link to="/userProfile">Back to User Profile</Link>
//                 </button> 
//             </div> 
//         )
//     }

// }

export default Credits;