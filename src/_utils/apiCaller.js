import axios from 'axios';
import Config from '../_constants/tempConfig';

export function get(url) {
  return axios.get(`${Config.API_URL}/${url}`);
}

export function post(url, body) {
  return axios.post(`${Config.API_URL}/${url}`, body);
}
