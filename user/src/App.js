import React, { useState } from "react";
//import logo from "./logo.svg";
import axios from "axios";
import UserForm from "./components/UserForm";
import Users from "./components/Users";
import "./App.css";

function App() {
    const [users, setUsers] = useState([]);

    const addNewUser = (newUser) => {
        //console.log(newUser);
        setUsers([...users, newUser]);

        axios.post(`https://reqres.in/api/users`, { users }).then((res) => {
            console.log(res);
            console.log(res.data);
        });
    };

    return (
        <div className="App">
            <UserForm addNewUser={addNewUser} />
            <Users users={users} />
        </div>
    );
}

export default App;
