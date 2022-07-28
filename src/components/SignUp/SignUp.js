import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { toast } from 'react-toastify';
import { Button, Form } from 'react-bootstrap';

export default function SignUp() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (name === '' || email === '' || password === '') {
      toast.warm('Please enter all fields');
      return;
    }
    dispatch(authOperations.signUp({ name, email, password })).then(
      ({ meta }) => {
        if (meta.requestStatus === 'fulfilled') {
          setName('');
          setEmail('');
          setPassword('');
        }
      }
    );
  };
  return (
    <>
      <h1 className="text-warning">Sign Up form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            value={name}
            onChange={handleChange}
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            value={email}
            onChange={handleChange}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            value={password}
            onChange={handleChange}
            type="password"
            placeholder="Enter password"
          />
        </Form.Group>
        <Button variant="warning" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
