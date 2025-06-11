import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const EmployeeForm = ({ onSubmit, initialData, onCancel }) => {
  const [form, setForm] = useState({ name: '', position: '', department: '', salary: '' });

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || '',
        position: initialData.position || '',
        department: initialData.department || '',
        salary: initialData.salary?.toString() || ''
      });
    } else {
      setForm({ name: '', position: '', department: '', salary: '' });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form, salary: form.salary ? Number(form.salary) : 0 });
    if (!initialData) setForm({ name: '', position: '', department: '', salary: '' });
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row>
        <Col md={3}>
          <Form.Group controlId="name">
            <Form.Control name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group controlId="position">
            <Form.Control name="position" value={form.position} onChange={handleChange} placeholder="Position" required />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group controlId="department">
            <Form.Control name="department" value={form.department} onChange={handleChange} placeholder="Department" />
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group controlId="salary">
            <Form.Control name="salary" type="number" value={form.salary} onChange={handleChange} placeholder="Salary" />
          </Form.Group>
        </Col>
        <Col md={1} className="d-flex align-items-end">
          <Button variant="primary" type="submit" className="me-2">
            {initialData ? 'Update' : 'Add'}
          </Button>
          {initialData && (
            <Button variant="secondary" onClick={onCancel}>Cancel</Button>
          )}
        </Col>
      </Row>
    </Form>
  );
};

export default EmployeeForm;
