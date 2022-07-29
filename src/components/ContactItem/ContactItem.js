import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Items, Text } from './ContactItem.styled';
import { useDeleteContactMutation } from 'services/API';
import { Button } from 'react-bootstrap';

function ContactItem ({ id, name, number}) {
  const [onDelete, { isLoading: isDeleting, isSuccess, error }] =
    useDeleteContactMutation();

  useEffect(() => {
    isSuccess && toast.warn(` ${name} removed from the phone book`);
    error && toast.error('oops something went wrong');
  }, [isSuccess, name, error]);

  return (
    <>
      <Items>
        <Text>{name}</Text>
        <Text>{number}</Text>
      <Button
        variant="info"
        style={{ marginLeft: '10px', width: 'max-content' }}
        type="button"
        onClick={() => onDelete(id)}
        disabled={isDeleting}
      >
        {isDeleting ? 'Delete...' : 'Delete'}
      </Button>  
      </Items>
      
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
