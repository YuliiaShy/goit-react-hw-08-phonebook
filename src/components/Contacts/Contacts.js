import Form from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { Card } from 'react-bootstrap';

const Contacts = () => {
  return (
    <>
      <Card.Title
        className="text-info"
        style={{ marginTop: '10px', fontSize: '30px' }}
      >
        Phonebook
      </Card.Title>
      <Form />
      <Filter />
      <Card.Subtitle
        className="text-info"
        style={{ marginTop: '10px', fontSize: '25px' }}
      >
        Contacts
      </Card.Subtitle>
      <ContactList />
    </>
  );
};

export default Contacts;
