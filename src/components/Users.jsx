import React from "react";
import useFirestoreCollection from "../hooks/useFirestoreCollection";

import "./Users.css";

const Users = () => {
    const users = useFirestoreCollection("users");

    return (
        <main className="users">
            <section>
                <h1>All Users</h1>
                <ul>
                    {users && users.map(user =>
                        <li key={user.id}>
                            <p><b>{user.displayName}</b></p>
                            <p><i>{user.email}</i></p>
                        </li>
                    )}
                </ul>
            </section>
        </main>
    );
}

export default Users;