import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filter/selectors';
import { changeFilter } from 'redux/filter/reducer';

function Filter() {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilterChange = event =>
    dispatch(changeFilter(event.currentTarget.value.toLowerCase()));

  return (
      <Form.Group className="mb-3 mt-3">
      <Form.Label>Find contacts by name</Form.Label>
      <Form.Control
        type="text"
        name="filter"
        value={filterValue}
        onChange={onFilterChange}
        placeholder="Enter name"
      />
    </Form.Group>
  );
}

export default Filter;
