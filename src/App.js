// src/App.js

import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './Login';

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'Brang_Mai',
        memberSince: '06/20/2021',
      }
    }
  }
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {
    
    // const homeComponent = () => (
    //   <Home accountBalance={this.state.accountBalance} /> 
    // );

    // const userProfileComponent = () => (
    //   <UserProfile 
    //     userName={this.state.currentUser.userName} 
    //     memberSince={this.state.currentUser.memberSince} 
    //   /> 
    // );

    const logInComponent = () => (
      <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />
    );

    return (
      <Router>
        <div>       
          {/* <Route exact path="/" render={homeComponent} />
          <Route exact path="/userProfile" render={userProfileComponent} /> */}
          <Route exact path="/login" render={logInComponent} />
        </div>
      </Router>
    );    
  }
}

export default App;