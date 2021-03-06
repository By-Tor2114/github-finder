import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

// const userStyle = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(3,1fr',
//   gap: '1rem'
// };

const userStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around'
};

export default Users;
