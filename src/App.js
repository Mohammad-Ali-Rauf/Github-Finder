import React, { useEffect, useState } from "react";
import axios from "axios";

// Import Styles
import "./App.css";

// Import Components
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await axios.get("https://api.github.com/users");
      setUsers(res.data)
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <Users loading={loading} users={users} />
      </div>
    </div>
  );
};

export default App;
