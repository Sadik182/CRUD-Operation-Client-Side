import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const [user, setUser] = useState({})
    const {id} = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    }, []);
    const handleNameChange = e => {
        const updateName = e.target.value;
        const updateUserName = {name: updateName, email: user.email};
        setUser(updateUserName);
    }
    const handleEmailChange = e => {
        const updateEmail = e.target.value;
        const updateUserEmail = {email: updateEmail, name: user.name};
        setUser(updateUserEmail);
    }
    const handleUpdate = e => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url, {
            method:"PUT",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

        e.preventDefault();
    }
    return (
        <div>
            <h2>Update User {user.name}:: {user.email}</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" onChange={handleNameChange} value={user.name} />
                <input type="email" onChange={handleEmailChange} value={user.email} />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;