import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import { getUsers, searchUsers } from './utils/users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';

class App extends Component {
  state = {
    users: [],
    isLoading: true,
    alert: null
  };

  componentDidMount = async () => {
    const { data } = await getUsers();
    this.setState({ users: data, isLoading: false });
  };

  // Searches users on Github
  searchUsers = async text => {
    const { items } = await searchUsers(text);
    this.setState({ users: items, isLoading: false, alert: null });
  };

  // Clears users from state
  clearUsers = () => {
    this.setState({ users: [], isLoading: false });
  };

  // Alert messages
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
  };

  render() {
    const { isLoading, users } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users isLoading={isLoading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
