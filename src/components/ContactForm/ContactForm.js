import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'services/API';
import { Button, Form } from 'react-bootstrap';

function ContactForm () {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact, { isLoading, isSuccess, error }] = useAddContactMutation();
  const { data } = useGetContactsQuery();
  const [nameForToast, setNameForToast] = useState('');
 
 useEffect(() => {
   isSuccess && toast.success(` ${nameForToast} added to phone book`);
   error && toast.error('oops something went wrong');
 }, [error, isSuccess, nameForToast]);


  const inputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const formSubmit = event => {
    event.preventDefault();
    setNameForToast(name);
    
    if (data.find(
      contact => contact.name.toLowerCase() === name.toLowerCase())) {
      return toast.warn(`${name} is already in contacts!`);
      }
    addContact({ name, number });
    
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form className="mt-4" onSubmit={formSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            value={name}
            onChange={inputChange}
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number</Form.Label>
          <Form.Control
            name="number"
            value={number}
            onChange={inputChange}
            type="tel"
            placeholder="Enter number"
          />
        </Form.Group>
        <Button
          variant="info"
          type="submit"
          disabled={number && name ? false : true}
        >
          {isLoading ? 'Add Contact...' : 'Add Contact'}
        </Button>
      </Form>
    </>
  );
  }

export default ContactForm;
