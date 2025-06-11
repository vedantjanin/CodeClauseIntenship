import React, { useEffect, useState } from 'react';
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from '../api';
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
      setError('Failed to load employees');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (empData) => {
    editing
      ? await updateEmployee(editing._id, empData)
      : await createEmployee(empData);
    setEditing(null);
    fetchData();
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    fetchData();
  };

  return (
     <div className="container mt-4">
    <h1 className="text-center mb-4">
      Employee Management System
    </h1>

      <EmployeeForm onSubmit={handleSubmit} initialData={editing} onCancel={() => setEditing(null)} />
      <EmployeeList employees={employees} onEdit={setEditing} onDelete={handleDelete} />
    </div>
  );
};

export default Home;
