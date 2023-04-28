import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export function Filter(props) {
  const dispatch = useDispatch();

  const filterChange = e => {
    dispatch(filterContacts(e.currentTarget.value.toLowerCase()));
  };
  const filter = nanoid();
  return (
    <div>
      <div>Find contacts by name</div>
      <label id={filter}>
        <input
          id={filter}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={filterChange}
        />
      </label>
    </div>
  );
}
