import React, { useState } from 'react';
import axios from 'axios';

const SubscribeEmployee = () => {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/employees', { name });
            alert('Employee subscribed successfully!');
            setName('');
        } catch (error) {
            alert('Error subscribing employee');
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Employee Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Subscribe</button>
        </form>
    );
};

export default SubscribeEmployee;
