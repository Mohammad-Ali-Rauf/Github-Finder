import React, { useState } from "react";

const Search = (props) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    props.searchUsers(text);
    setText("");
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
    </div>
  );
};

export default Search;
