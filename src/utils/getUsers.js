import axios from 'axios';

const getUsers = async () => {
  const users = await axios.get('https://api.github.com/users', {
    params: {
      client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
      client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET
    }
  });
  return users;
};

export { getUsers };
