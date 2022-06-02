import React, { useState } from "react";
import axios from "axios";

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Styles
import "./App.css";

// Import Components
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";

const App = () => {
  // States
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  // Functions
  const getUser = async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUser(res.data);
    setLoading(false);
  };

  const searchUsers = async (text) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUsers(res.data.items);
    setLoading(false);
  };

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  function setAlertFunction(msg, type) {
    setAlert({ msg: msg, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={alert} />
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlertFunction={setAlertFunction}
                  />
                  <Users loading={loading} users={users} />
                </>
              }
            />
            <Route exact path='/about' element={<About />} />
            <Route
              exact
              path='/user/:loginParam'
              element={<User user={user} loading={loading} getUser={getUser} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
