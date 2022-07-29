import ContactItem from 'components/ContactItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/selectors';
import { useGetContactsQuery } from 'services/API';
import Loader from 'components/Loader';

function ContactList() {
  const { data, isFetching } = useGetContactsQuery();
  const filter = useSelector(getFilter);

  const getContacts = () => {
    if (filter === '') {
      return data;
    }
    return data && data.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
  };

  const list = getContacts();

  return (
    <>
      {list && (
        <List>
          {list.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </List>
      )}
      {data && data.length === 0 && <p>You have no contacts</p>}
      {isFetching && (
        <Loader
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
    </>
  );
}

export default ContactList;