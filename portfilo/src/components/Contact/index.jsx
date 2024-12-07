import React, { useState } from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!");
        // Add form processing logic here
    };

    return (
        <section id="contact">
            <div className="section__wrapper contact__container">
                <div className="section__header">
                    <h2 className="primary__title">Contact Me</h2>
                    <p className="text__muted description">
                        Looking for an enthusiastic and dedicated web developer? I am ready to be a part of your team! With my web development skills, I am eager to contribute by building new websites, improving existing projects, and exploring the latest web technologies. Let’s connect to share ideas and discuss exciting opportunities!
                    </p>
                </div>
                <div className="contact__group">
                    <div className="contact__options">
                        <article className="contact__option">
                            <MdOutlineEmail className="contact__icon" />
                            <h3>Email</h3>
                            <h5>ravisidd1122@gmail.com</h5>
                            <a
                                href="mailto:ravisidd1122@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                            >
                                Send a Message
                            </a>
                        </article>
                        <article className="contact__option">
                            <BsWhatsapp className="contact__icon" />
                            <h3>WhatsApp</h3>
                            <h5>+91 6397173845</h5>
                            <a
                                href="https://api.whatsapp.com/send?phone=+916397173845"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                            >
                                Send a Message
                            </a>
                        </article>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Your Full Name" required aria-label="Your Full Name" />
                        <input type="email" name="email" placeholder="Your Email" required aria-label="Your Email" />
                        <textarea name="message" rows={7} placeholder="Your Message" required aria-label="Your Message"></textarea>
                        <button type="submit" className="btn btn__primary">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
