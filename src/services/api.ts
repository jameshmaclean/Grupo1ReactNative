import axios from 'axios'

export const api = axios.create({
    baseURL: "http://187.58.100.32:8081/g1"
  });
