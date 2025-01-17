import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm('service_w8952sm', 'template_ula2mkk', formRef.current, '-i4bA7urss0BU1UAB')
            .then(() => {
                alert('Message sent successfully!');
                setForm({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error('Failed to send message:', error);
                alert('Failed to send message. Please try again.');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <section className='relative my-20 c-space'>
            <div className='relative flex flex-col items-center justify-center min-h-screen'>
                {/* Background Image */}
                <img src="/assets/terminal.png" alt="terminal background" className='absolute inset-0 object-cover min-h-screen' />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-60"></div>

                {/* Contact Form Container */}
                <div className='relative z-10 max-w-md p-8 mx-auto contact-container'>
                    <h3 className='text-3xl font-bold text-center text-white'>Let's Talk</h3>
                    <p className='mt-3 text-lg text-center text-white'>
                        Whether you are looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.
                    </p>

                    {/* Contact Form */}
                    <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col mt-12 space-y-7'>
                        <label className='space-y-3'>
                            <span className='text-white field-label'>Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className='w-full p-3 text-white placeholder-white bg-transparent border border-gray-400 rounded-md field-input'
                                placeholder='John Doe'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='text-white field-label'>Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className='w-full p-3 text-white placeholder-white bg-transparent border border-gray-400 rounded-md field-input'
                                placeholder='JohnDoe@gmail.com'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='text-white field-label'>Your Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className='w-full p-3 text-white placeholder-white bg-transparent border border-gray-400 rounded-md field-input'
                                placeholder='Hi, I am interested in...'
                            />
                        </label>
                        <button className='w-full py-3 mt-4 font-bold text-white bg-blue-500 rounded-md field-btn' type='submit' disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow icon" className='inline-block ml-2' />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
