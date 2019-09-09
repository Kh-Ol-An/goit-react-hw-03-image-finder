import React from 'react';
import PropTypes from 'prop-types';
import s from './SearchForm.module.css';

const SearchForm = ({ onSubmit, onChange, valueInput }) => {
  return (
    <form onSubmit={onSubmit} className={s.search_form}>
      <input
        onChange={onChange}
        type="text"
        name="search"
        value={valueInput}
        autoComplete="off"
        placeholder="Search images..."
      />
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  valueInput: PropTypes.string.isRequired,
};

export default SearchForm;
