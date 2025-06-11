import axios from 'axios';

// Configure Axios instance
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response logging (optional)
API.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error('API response error:', err.response?.status, err.message);
    return Promise.reject(err);
  }
);

// Employee API methods
export const getEmployees = () => API.get('/employees');
export const createEmployee = (data) => API.post('/employees', data);
export const updateEmployee = (id, data) => API.put(`/employees/${id}`, data);
export const deleteEmployee = (id) => API.delete(`/employees/${id}`);
