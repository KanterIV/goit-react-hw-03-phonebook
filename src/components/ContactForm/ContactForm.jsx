import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleContactsInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const contact = {
      ...this.state,
      id: nanoid(),
    };

    this.props.handleAddContact(contact);

    this.setState({ id: '', name: '', number: '' });
  };

  render() {
    // const { handleInputChange } = this.props;
    // console.log(handleInputChange);
    return (
      <form onSubmit={this.handleSubmit} className={css.contactsForm}>
        <label>
          Name
          <input
            className={css.contactsFormInput}
            onChange={this.handleContactsInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            placeholder="Ivan Ivanov"
            required
          />
        </label>
        <label>
          Phone
          <input
            className={css.contactsFormInput}
            onChange={this.handleContactsInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            placeholder="123-45-67"
            required
          />
        </label>

        <button type="submit" className={css.contactsFormBtn}>
          Add contact
        </button>
      </form>
    );
  }
}
