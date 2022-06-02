import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className='card text-center'>
      <img
        className='round-img'
        style={{ width: "60px", height: "60px" }}
        src={avatar_url}
        alt=''
      />
      <h3>{login}</h3>
      <NavLink to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>Profile</NavLink>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
