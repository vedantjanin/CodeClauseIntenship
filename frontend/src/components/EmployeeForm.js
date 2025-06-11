import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ onSubmit, initialData }) => {
  const [form, setForm] = useState({ name: '', role: '', salary: '' });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: '', role: '', salary: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input className="form-control mb-2" name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input className="form-control mb-2" name="role" value={form.role} onChange={handleChange} placeholder="Role" required />
      <input className="form-control mb-2" name="salary" value={form.salary} onChange={handleChange} placeholder="Salary" type="number" required />
      <button className="btn btn-primary" type="submit">
        {initialData ? 'Update' : 'Add'} Employee
      </button>
    </form>
  );
};

export default EmployeeForm;
