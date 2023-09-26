import React, { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleAddContact = contactData => {
    const hasContactDuplicate = this.state.contacts.some(
      contact => contact.name.toLowerCase() === contactData.name.toLowerCase()
    );

    if (hasContactDuplicate) {
      alert(`${contactData.name} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contactData],
      };
    });
  };

  onDeleteBtnClick = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filterContactsArr = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return (
      <div className={css.wrapper}>
        <h1 className={css.formTitle}>Phonebook</h1>
        <ContactForm handleAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter
          handleInputChange={this.handleInputChange}
          ContactsData={this.state}
        />
        <ContactList
          contactsArr={filterContactsArr}
          deleteContact={this.onDeleteBtnClick}
        />
      </div>
    );
  }
}
