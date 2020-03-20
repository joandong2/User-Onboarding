import React from "react";
import { Button, Table } from "reactstrap";

const User = (props) => {
    return (
        <div className="users">
            <Table hover>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
                {props.users.map((user, i) => (
                    <tr key={i}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>
                            <button
                                onClick={() => {
                                    props.editMember(user);
                                }}
                                className="button muted-button"
                            >
                                Edit
                            </button>
                        </td>
                    </tr>
                ))}
            </Table>
        </div>
    );
};

export default User;
