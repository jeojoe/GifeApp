// @flow
import axios from 'axios';
import { Config } from '../_constants';

export function mock() {
  return axios.get('http://www.mocky.io/v2/5a996cbf2e0000e331553680');
}

export function get(url: string) {
  return axios.get(`${Config.API_URL}/${url}`);
}

type Body = {};

export function post(url: string, body: Body) {
  return axios.post(`${Config.API_URL}/${url}`, body);
}
