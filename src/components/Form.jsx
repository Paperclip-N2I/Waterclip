import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <div className='container !py-10'>
            <form className='flex flex-col gap-4 items-center justify-center max-w-full w-1/2 text-primary-dark' onSubmit={handleSubmit}>
                <div className='flex flex-col items-start w-full'>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className='w-full border border-primary rounded-sm p-2'
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-col items-start w-full'>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className='w-full border border-primary rounded-sm p-2'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-col items-start w-full'>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        className='w-full border border-primary rounded-sm p-2'
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
                <button className='btn-primary' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;