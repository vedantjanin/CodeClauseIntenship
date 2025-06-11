import React, { useEffect, useState } from 'react';
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from '../api'; // Adjusted path
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [editing, setEditing] = useState(null);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      const { data } = await getEmployees();
      setEmployees(data);
    } catch (err) {
      console.error('Failed to fetch employees:', err.message);
      setError('Failed to fetch employee data. Make sure the backend server is running.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreateOrUpdate = async (empData) => {
    try {
      if (editing) {
        await updateEmployee(editing._id, empData);
        setEditing(null);
      } else {
        await createEmployee(empData);
      }
      fetchData();
    } catch (err) {
      console.error('Failed to save employee:', err.message);
      setError('Failed to save employee data.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      fetchData();
    } catch (err) {
      console.error('Failed to delete employee:', err.message);
      setError('Failed to delete employee.');
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Employee Management</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <EmployeeForm onSubmit={handleCreateOrUpdate} initialData={editing} />
      <EmployeeList employees={employees} onEdit={setEditing} onDelete={handleDelete} />
    </div>
  );
};

export default Home;
