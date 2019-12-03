import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import { getUsers, searchPeople } from './utils/users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';

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
    const { items } = await searchPeople(text);
    this.setState({ users: items, isLoading: false, alert: null });
  };

  // Gets single user from Github

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
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users isLoading={isLoading} users={users} />
                  </Fragment>
                )}
              />

              <Route exact path="/about" component={About} />

              <Route
                exact
                path="/user/:login"
                render={props => <User {...props} isLoading={isLoading} />}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
