import React, {useState , useEffect} from 'react'
import {Link} from 'react-router-dom';

export default function UserList() {
    const [users , setUsers] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);

    const fetchUsers = async () => {
        setLoading(true);
        setError (null);
        try {
            const res = await fetch ('http://localhost:5001/users');
            if (!res.ok) {
                throw new Error ('Network response was not ok');
            }
            const data = await res.json();
            setUsers(data);
        } catch (err) {
            setError(err.message);
        } 
        
        setLoading(false);
    };
    useEffect(() => {
        fetchUsers();
    }, []);

  return (
    <>
    <div>
        <button onClick={fetchUsers}>Refresh</button>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && users.length === 0 && (
            <p>No users found.</p>
        )}

        {!loading && !error && users.length > 0 && (
            <table border="1" cellPadding="5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/edit/${user.id}`}>Edit</Link>
                            </td>
                            <td>
                                <Link to={`/delete/${user.id}`}>Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>
    </>
  )
}
