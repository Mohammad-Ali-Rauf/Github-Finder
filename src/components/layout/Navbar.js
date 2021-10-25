import React from 'react';
import PropsTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={props.icon} />
                {props.title}
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
            </ul>
        </nav>
        )
}

Navbar.defaultProps = {
    title: ' GitHub Finder ',
    icon: 'fab fa-github '
}

Navbar.propTypes = {
    title: PropsTypes.string.isRequired,
    icon: PropsTypes.string.isRequired
}

export default Navbar
