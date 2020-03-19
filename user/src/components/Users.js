import React from "react";
//import { Button, Table } from "reactstrap";

const User = (props) => {
    return (
        <div className="users">
            <h2>Users</h2>
            {props.users.map((user, i) => (
                <li key={i}>
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                    {/* <td>
                        <button
                            onClick={() => {
                                props.editMember(member);
                            }}
                            className="button muted-button"
                        >
                            Edit
                        </button>
                    </td> */}
                </li>
            ))}
        </div>
    );
};

export default User;
