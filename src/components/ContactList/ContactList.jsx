import React from 'react';
import { Contacts } from '../Contacts/Contacts';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <Contacts contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
};

export default ContactList;
