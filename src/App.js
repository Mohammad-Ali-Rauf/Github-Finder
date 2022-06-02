import React, { useState } from "react";
import axios from "axios";

// Import Styles
import "./App.css";

// Import Components
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";

const App = () => {
  const [users, setUsers] = useState([]);
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchUsers = async (text) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUsers(res.data.items)
    setLoading(false);
  }

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }

  function setAlertFunction(msg, type) {
    setAlert({ msg: msg, type: type })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <Alert alert={alert} />
        <Search 
          searchUsers={searchUsers} 
          clearUsers={clearUsers} 
          showClear={users.length > 0 ? true : false}
          setAlertFunction={setAlertFunction}
        />
        <Users loading={loading} users={users} />
      </div>
    </div>
  )
}

export default App;
