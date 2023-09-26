import React, { Component } from 'react';
import css from './Filter.module.css';

export default class Filter extends Component {
  render() {
    const { handleInputChange } = this.props;
    return (
      <>
        <p>Fined contacts by name</p>
        <input
          className={css.filterInput}
          onChange={handleInputChange}
          type="text"
          name="filter"
        />
      </>
    );
  }
}
