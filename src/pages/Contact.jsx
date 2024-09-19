import { useState } from 'react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        if (!e.target.value) {
            setErrors({ ...errors, [e.target.name]: `${e.target.name} is required` });
        } else {
            setErrors({ ...errors, [e.target.name]: '' });
        }
        if (e.target.name === 'email' && !validateEmail(e.target.value)) {
            setErrors({ ...errors, email: 'Invalid email address' });
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formState);
        
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
                    {errors.name && <span className="error text-danger">{errors.name}</span>}
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
                    {errors.email && <span className="error text-danger">{errors.email}</span>}
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
                    {errors.message && <span className="error text-danger">{errors.message}</span>}
                </div>
                <button type="submit" className="btn btn-contact">Submit</button>
            </form>
        </div>
    );
}

export default Contact;