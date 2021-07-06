// src/components/debits.js
import React, {Component, useState, useEffect} from 'react';
import UserProfile from './UserProfile';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import axios from 'axios';
// import { buildQueries } from '@testing-library/react';

function Debits() {
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
            <h1>Bank of React</h1>
            <h3>Debits Page</h3>
            <div id="output"></div>
            {items.map(item => (
                <ul>            
                    <li>ID: {item.id}</li>
                    <li>Description: {item.description}</li>
                    <li>Amount: {item.amount} </li>
                    <li>Date: {item.date}</li>
                </ul>
            ))}
            <button>
                <Link to="/userProfile">Back to User Profile</Link>
            </button>  
        </div>           
    );
}



// class Debits extends Component{
//     constructor (props) {
//         super(props) 
//         this.state = {
//             debits: [],
//             isLoaded: false,
//         }
//     }
//     componentDidMount() {
//         axios.get('https://moj-api.herokuapp.com/debits')
//             .then(response => this.setState({
//                 debits: response.data }));
//     }

//     // getDebits(){
//     //     fetch('https://moj-api.herokuapp.com/credits')
//     //     .then((res) => res.json())
//     //     .then((data) => console.log(data));
//     // }
   
//     addDebit(amount) {
//         <AccountBalance accountBalance={this.props.accountBalance + amount}/>
//     }

//     render () {
//         return (
//             <div>
//                 <h1>Bank of React</h1>
//             <h3>Debits Page</h3>
//             <div id="output">
//                 <li>Account holder's ID: ${}</li>
//                 <li>Description: ${}</li>             
//                 <li>Amount: ${}</li>
//                 <li>Date: ${}</li>
//             </div>
           
//             <button>
//                 <Link to="/userProfile">Back to User Profile</Link>
//             </button>                      
//             </div>            
//         );
//     }    
// }

export default Debits;
