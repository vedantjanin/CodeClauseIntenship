import React from 'react';
import { Table, Button } from 'react-bootstrap';

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  if (!employees.length) {
    return <p className="text-center">No employees found.</p>;
  }

  return (
    <Table striped bordered hover responsive className="text-center">
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(emp => (
          <tr key={emp._id}>
            <td className="align-middle">{emp.name}</td>
            <td className="align-middle">{emp.position}</td>
            <td>
              <Button
                variant="warning"
                size="sm"
                className="me-2"
                onClick={() => onEdit(emp)}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => {
                  if (window.confirm(`Delete ${emp.name}?`)) {
                    onDelete(emp._id);
                  }
                }}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default EmployeeList;
