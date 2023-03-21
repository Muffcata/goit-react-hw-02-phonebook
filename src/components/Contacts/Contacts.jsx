import { Component } from 'react';
import PropTypes from 'prop-types';

export class Contacts extends Component {
  render() {
    const { contacts, deleteContact } = this.props;
    return (
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <div>
              <p>
                Name: {name} ~ tel: {number}
              </p>
              <button type="button" onClick={() => deleteContact(id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Contacts;

Contacts.propTypes = {
  deleteContact: PropTypes.func,
  contacts: PropTypes.array,
};
