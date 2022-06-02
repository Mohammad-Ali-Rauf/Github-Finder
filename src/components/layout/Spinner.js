import React, { Fragment } from 'react';
import spinner from '../../assets/spinner.gif';

const Spinner = () =>
    <Fragment>
    <img src={spinner} alt="Loading..." style={{ width: '200px', margin: 'auto', display: 'block' }} />
    <h2 style={{ marginLeft: '470px', marginTop: '-50px' }}>Loading...</h2>
    </Fragment>

export default Spinner