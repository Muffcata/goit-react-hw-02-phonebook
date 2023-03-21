import { Component } from 'react';

export class Contacts extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <div>
              <p>
                Name: {name} ~ tel: {number}
              </p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Contacts;