import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const loadFlights = async (action) => {
  const params = {filter: action.data.type, page: action.data.page}
  const response = await api.get(`/flights/${action.data.type}`, {params});
  return response;
}

export const searchFlights = async (action) => {
  const params = {filter: action.data.filters, page: action.data.page || 1}
  const response = await api.get(`/flights/${action.data.type}/search`, {params});
  return response;
}