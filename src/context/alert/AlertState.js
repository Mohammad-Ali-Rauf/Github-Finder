import React, { useReducer } from 'react';

// Import Context
import AlertContext from './alertContext';

// Import Reducer
import AlertReducer from './alertReducer';

// Import Types
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    // Search Users
    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload: { msg, type }
        })
        setTimeout(() => {
            dispatch({ type: REMOVE_ALERT, })
        }, 2000);
    }

    return <AlertContext.Provider value={{ 
        alert: state,
        setAlert,
     }}>
        {props.children}
    </AlertContext.Provider>
}

export default AlertState
