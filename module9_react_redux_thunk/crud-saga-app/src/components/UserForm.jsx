import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserRequest } from '../features/users/usersSlice';
import '../assets/Users.css'

const UserForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: '', email: '' ,age: '' , mobile: ''});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.age || !formData.mobile) return alert('All fields required');
    dispatch(addUserRequest(formData));
    setFormData({ name: '', email: '' , age: '' , mobile: ''});
  };

return (
    <form
        onSubmit={handleSubmit}
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            maxWidth: '380px',
            width: '100%',
            padding: '20px',
            margin: '0 auto 20px',
            background: 'skyblue',
            borderRadius: '10px',
            boxShadow: '0 6px 20px rgba(16, 24, 40, 0.08)',
            boxSizing: 'border-box',
            fontFamily: 'Inter, Roboto, system-ui, -apple-system, "Segoe UI", sans-serif'
        }}
    >
        <h2 style={{ margin: 0, marginBottom: 4, fontSize: '20px', color: '#0f172a' }}>Add User</h2>

        <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            onFocus={(e) => (e.target.style.boxShadow = '0 0 0 4px rgba(34,197,94,0.08)')}
            onBlur={(e) => (e.target.style.boxShadow = 'none')}
        />

        <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            onFocus={(e) => (e.target.style.boxShadow = '0 0 0 4px rgba(34,197,94,0.08)')}
            onBlur={(e) => (e.target.style.boxShadow = 'none')}
        />

        <input
            type="text"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            onFocus={(e) => (e.target.style.boxShadow = '0 0 0 4px rgba(34,197,94,0.08)')}
            onBlur={(e) => (e.target.style.boxShadow = 'none')}
        />

        <input
            type="tel"
            name="mobile"
            placeholder="Please enter your mobile number"
            inputMode="tel"
            value={formData.mobile}
            onChange={handleChange}
            onFocus={(e) => (e.target.style.boxShadow = '0 0 0 4px rgba(34,197,94,0.08)')}
            onBlur={(e) => (e.target.style.boxShadow = 'none')}
        />

        <button
            type="submit"
            style={{
                display: 'inline-block',
                width: '100%',
                padding: '10px 12px',
                borderRadius: '8px',
                background: 'linear-gradient(90deg,#10b981,#059669)',
                color: 'white',
                border: 'none',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'transform 0.12s ease, box-shadow 0.12s ease'
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'translateY(1px)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
            Add
        </button>
    </form>
);
};

export default UserForm;
