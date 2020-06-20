import axios from 'axios';

const serviceApi = axios.create({
  baseURL: 'https://api-threechat.herokuapp.com'
});

export const getApi = (endpoint) => {
  return new Promise((resolve) => {
    serviceApi.get(endpoint).then(response => resolve(response.data)).catch(error => resolve({ exception: true, log: error.toString() }));
  })
}

export const postApi = (endpoint, data) => {
  return new Promise((resolve) => {
    serviceApi.post(endpoint, data).then(response => resolve(response.data)).catch(error => resolve({ exception: true, log: error.toString() }));
  })
}