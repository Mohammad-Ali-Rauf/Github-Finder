import React, { useState } from "react";
import PropTypes from 'prop-types';

const Search = ({ searchUsers, clearUsers, showClear, setAlertFunction }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if(text === '') {
      setAlertFunction('Please enter a username', 'light');
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Seacrh Users'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button onClick={clearUsers} className="btn btn-light btn-block">Clear</button>
      )}
    </div>
  )
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlertFunction: PropTypes.func.isRequired,
}

export default Search;
