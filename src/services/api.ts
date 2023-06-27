import axios from 'axios'

export const api = axios.create({
    baseURL: "http://187.113.116.98:8081/g1",
    headers: { 
      Authorization: `Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJqYW1lcyIsImlhdCI6MTY4Nzg4MzY4NSwiZXhwIjoxNjg3OTcwMDg1fQ.ACq4zHnKZ-Z8rf4LoreSqiPBBD-FLXe7BRzehLzRMWQyFumlKIRWXKQy4Zuj27M2` 
    }
  });
