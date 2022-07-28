import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { toast } from 'react-toastify';
import { Button, Form } from 'react-bootstrap';

export default function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    if (email === '' || password === '') {
      toast.warm('Please enter all fields');
      return;
    }
    dispatch(authOperations.signIn({ email, password })).then(({ meta }) => {
      if (meta.requestStatus === 'fulfilled') {
        setEmail('');
        setPassword('');
      }
    });
  };
  return (
    <>
      <h1 className="text-primary">Sign In form</h1>
      <Form onSubmit={handleSubmit}>
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
