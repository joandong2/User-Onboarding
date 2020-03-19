import React, { useState } from "react";
//import logo from "./logo.svg";
import UserForm from "./components/UserForm";
import Users from "./components/Users";
// styles
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    const [users, setUsers] = useState([]);

    const addNewUser = (newUser) => {
        //console.log(newUser);
        setUsers([...users, newUser]);
    };

    //console.log(users);

    return (
        <div className="App">
            <UserForm addNewUser={addNewUser} />
            <Users users={users} />
        </div>
    );
}

export default App;
