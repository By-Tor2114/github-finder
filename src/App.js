import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import { getUsers, searchUsers } from './utils/users';
import Search from './components/users/Search';

class App extends Component {
  state = {
    users: [],
    isLoading: true
  };

  componentDidMount = async () => {
    const { data } = await getUsers();
    this.setState({ users: data, isLoading: false });
  };

  // Searches users on Github
  searchUsers = async text => {
    const { items } = await searchUsers(text);
    this.setState({ users: items, isLoading: false });
  };

  render() {
    const { isLoading, users } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users isLoading={isLoading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
