import React from 'react';
import { Contacts } from '../Contacts/Contacts';

export const ContactList = ({ contacts }) => {
  return (
    <div>
      <Contacts contacts={contacts} />
    </div>
  );
};

export default ContactList;
