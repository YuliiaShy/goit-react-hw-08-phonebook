import Form from 'components/Form';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { Title } from './ContactItem.styled';

const Contacts = () => {
  return (
    <>
      <Form />
      <Filter />
      <Title>Contacts</Title>
      <ContactList />
    </>
  );
};

export default Contacts;
