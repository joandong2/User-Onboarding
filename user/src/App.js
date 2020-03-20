import React, { useState } from "react";
//import logo from "./logo.svg";
import UserForm from "./components/UserForm";
import Users from "./components/Users";
import { Container, Row, Col } from "reactstrap";
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
            <Container>
                <Row>
                    <Col md="4">
                        <h4>Add New User</h4>
                        <UserForm addNewUser={addNewUser} />
                    </Col>
                    <Col md="8">
                        <h4>Users</h4>
                        <Users users={users} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
