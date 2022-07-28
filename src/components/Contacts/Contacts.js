import Form from 'components/Form';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
// import { Title } from './Contacts.styled';

const Contacts = () => {
  return (
    <>
      <Form />
      <Filter />
      <h1>Contacts</h1>
      <ContactList />
    </>
  );
};

export default Contacts;
