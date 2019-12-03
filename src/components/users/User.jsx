import React, { Component } from 'react';
import { getUser } from '../../utils/users';

class User extends Component {
  state = {
    user: {}
  };

  componentDidMount = async () => {
    const data = await getUser(this.props.match.params.login);
    this.setState({ user: { ...data } });
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.state.user;

    const { isLoading } = this.props;

    return <div>User: {name}</div>;
  }
}

export default User;
