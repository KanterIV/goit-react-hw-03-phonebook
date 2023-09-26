import React, { Component } from 'react';
import css from './ContactListItem.module.css';

export default class ContactListItem extends Component {
  render() {
    const { contactId, contactName, contactNumber, deleteContact } = this.props;
    return (
      <li className={css.contactListItem}>
        <p>{`${contactName}: `}</p>
        <span>{contactNumber}</span>
        <button
          className={css.deleteBtn}
          onClick={() => deleteContact(contactId)}
          type="button"
          name={contactId}
        >
          Delete
        </button>
      </li>
    );
  }
}
