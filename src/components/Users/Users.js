import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUser(data))
    }, []);

    const handleDelete = id => {
    const proced = window.confirm("Are You Sure You want to Delete?");
    if(proced) {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url, {
            method: 'DELETE',
  
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                const remainingUser = users.filter(user => user._id !== id);
                setUser(remainingUser);
                
                alert('Deleted Successfully');
            }
        })
    }
    }

    const handleUpdate = id => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url, {
            method:"UPDATE"
        })
        .then()
    }
    return (
        <div>
            <ol>
                {
                users.map(user => <li key={user._id}>{user.name} ::  {user.email}
                  <Link to={`/users/update/${user._id}`}><button onClick={() => handleUpdate(user._id)}>Update</button></Link>
                  <button onClick={() => handleDelete(user._id)}>x</button></li>)
                }
               
            </ol>
        </div>
    );
};

export default Users;