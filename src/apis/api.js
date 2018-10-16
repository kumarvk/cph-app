import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const loadFlights = async (action) => {
  const params = {filter: action.filter}
  const response = await api.get('/flight/', {params});
  return response;
}
