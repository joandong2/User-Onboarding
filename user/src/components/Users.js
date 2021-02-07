import React from "react";
import { Button, Table } from "reactstrap";

const User = (props) => {
    return (
        <div className="users">
            <Table hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email Address</th>
                        {/* <th>Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((user, i) => (
                        <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            {/* <td>
                                <Button
                                    color="success"
                                    type="submit"
                                    onClick={() => {
                                        props.editMember(user);
                                    }}
                                    className="button muted-button"
                                >
                                    {" "}
                                    Edit
                                </Button>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default User;
