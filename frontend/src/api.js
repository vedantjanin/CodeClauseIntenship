import axios from 'axios';

// Create an Axios instance with base URL
const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Ensure backend is running on this port
  timeout: 5000, // Optional: timeout for requests (in ms)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Employee API calls
export const getEmployees = async () => {
  try {
    return await API.get('/employees');
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

export const createEmployee = async (data) => {
  try {
    return await API.post('/employees', data);
  } catch (error) {
    console.error('Error creating employee:', error);
    throw error;
  }
};

export const updateEmployee = async (id, data) => {
  try {
    return await API.put(`/employees/${id}`, data);
  } catch (error) {
    console.error('Error updating employee:', error);
    throw error;
  }
};

export const deleteEmployee = async (id) => {
  try {
    return await API.delete(`/employees/${id}`);
  } catch (error) {
    console.error('Error deleting employee:', error);
    throw error;
  }
};
