import axios from 'axios';

const getUsers = async () => {
  const users = await axios.get('https://api.github.com/users');
  return users;
};

export { getUsers };
