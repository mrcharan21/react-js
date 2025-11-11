import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest, deleteUserRequest } from './usersSlice';

const UsersList = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsersRequest());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteUserRequest(id));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div>
            <h2>Users</h2>
            {users.length === 0 ? (
                <p>No users found.</p>
            ) : (
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid #ddd' }}>
                            <th style={{ padding: '10px', textAlign: 'left' }}>Name</th>
                            <th style={{ padding: '10px', textAlign: 'left' }}>Email</th>
                            <th style={{ padding: '10px', textAlign: 'left' }}>Age</th>
                            <th style={{ padding: '10px', textAlign: 'left' }}>Mobile</th>
                            <th style={{ padding: '10px', textAlign: 'center' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id} style={{ borderBottom: '1px solid #ddd' }}>
                                <td style={{ padding: '10px' }}>{user.name}</td>
                                <td style={{ padding: '10px' }}>{user.email}</td>
                                <td style={{ padding: '10px' }}>{user.age}</td>
                                <td style={{ padding: '10px' }}>{user.mobile}</td>
                                <td style={{ padding: '10px', textAlign: 'center' }}>
                                    <button
                                        onClick={() => handleDelete(user.id)}
                                        style={{
                                            background: 'red',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                            padding: '5px 10px',
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UsersList;
