import axios from 'axios';

const userInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  Headers: {
    Authorization : `huy`,
  },
});

export const setToken = token => {
  
  userInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  
};

// USER
export const signUpUser = async userData => {
  const { data } = await userInstance.post('/users/signup', userData);
  setToken(data.token);
  return data;
};

export const loginUser = async userData => {
  const { data } = await userInstance.post('/users/login', userData);
  setToken(data.token);
  return data;
};

export const logOutUser = async () => {
  const { data } = await userInstance.post('/users/logout');
  return data;
};

export const fetchUser = async () => {
  const {data} = await userInstance.get('/users/current')
  return data
}

//   CONTACTS
export const fetchContacts = async () => {
  const { data } = await userInstance.get('/contacts');
  return data;
};

export const addContact = async newContact => {
  const { data } = await userInstance.post('/contacts', newContact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await userInstance.delete(`/contacts/${id}`);
  return data;
};
