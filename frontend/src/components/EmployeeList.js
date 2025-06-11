import React from 'react';

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Salary</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp._id}>
            <td>{emp.name}</td>
            <td>{emp.role}</td>
            <td>{emp.salary}</td>
            <td>
              <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(emp)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => onDelete(emp._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
