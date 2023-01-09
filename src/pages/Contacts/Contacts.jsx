import { contactsOperations } from 'redux/contacts';

export function Contacts() {
  return (
    <div>
      <h1>Contacts</h1>;
      <form>
        <label>Search Contacts</label>

        <input name="search" type="text" />
      </form>
      <h2>Contacts List</h2>
      <ul>
        {/* {contacts.map({name, number, id} => <contactItem name={name} number={number} id={id} />)} */}
      </ul>
    </div>
  );
}

export default Contacts;
