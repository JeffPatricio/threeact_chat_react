import axios from 'axios';

const serviceApi = axios.create({
  baseURL: 'http://localhost:3001'
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