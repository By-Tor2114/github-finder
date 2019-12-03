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

const searchPeople = async text => {
  const users = await axios.get('https://api.github.com/search/users', {
    params: {
      q: text,
      client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
      client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET
    }
  });
  return users.data;
};

const getUser = async username => {
  const { data } = await axios.get(`https://api.github.com/users/${username}`, {
    params: {
      client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
      client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET
    }
  });

  return data;
};

export { getUsers, searchPeople, getUser };
