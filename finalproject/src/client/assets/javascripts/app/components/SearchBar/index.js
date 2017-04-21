import React from 'react';

const SearchBar = ({searchValue, onChange, handleSubmit}) => {

  return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(searchValue);
      }}
      >
        <input className="search-bar" name="hashtag"
          type="text"
          value={searchValue}
          onChange={event => onChange(event.target.value)}
        />

      </form>
  );
};

SearchBar.propTypes = {
  searchValue: React.PropTypes.string,
  onChange: React.PropTypes.func,
  handleSubmit: React.PropTypes.func
};

export default SearchBar;
