import { useState } from "react";
import './Contact.css';

export default function  Contact () {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [error, setError] = useState({});

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
        if (!event.target.value) {
            setError({ ...error, [event.target.name]: `${event.target.name} is required` });
        } else {
            setError({ ...error, [event.target.name]: '' });
        }
        if (event.target.name === 'email' && !validateEmail(event.target.value)) {
            setError({ ...error, email: 'Invalid email address' });
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
    };

    return (
        <div className="contact container my-4">
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        value={formState.name}
                        onChange={handleChange}
                    />
                    {error.name && <span className="error text-danger">{error.name}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        value={formState.email}
                        onChange={handleChange}
                    />
                    {error.email && <span className="error text-danger">{error.email}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message:</label>
                    <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        value={formState.message}
                        onChange={handleChange}
                    ></textarea>
                    {error.message && <span className="error text-danger">{error.message}</span>}
                </div>
                <button type="submit" className="btn btn-info">Submit</button>
            </form>
        </div>
    );
}