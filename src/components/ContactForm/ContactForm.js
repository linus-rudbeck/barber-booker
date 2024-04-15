"use client"

import { useState } from 'react';
import styles from './ContactForm.module.css'

export default function ContactForm() {

    const [status, setStatus] = useState("not-sent");

    const handleSendMessage = (event) => {
        event.preventDefault();
        setStatus("sending");

        setTimeout(() => {
            setStatus("sent");
        }, 2000);
    }

    return (<>
        {status === "not-sent" && <Form handleSendMessage={handleSendMessage} />}
        {status === "sending" && <LoadingMessage />}
        {status === "sent" && <SuccessMessage />}
    </>)
}

function Form({ handleSendMessage }) {
    return <form className={styles.contactForm}>
        <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" onClick={handleSendMessage}>Send Message</button>
    </form>;
}

function LoadingMessage() {
    return <p className={styles.loadingMessage}>Sending message...</p>;
}

function SuccessMessage() {
    return <p className={styles.successMessage}>Message sent successfully!</p>;
}