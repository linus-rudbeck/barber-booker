import ContactForm from "@/components/ContactForm/ContactForm";
import styles from "./page.module.css";

export const metadata = {
    title: "Barber Booker - Contact",
    description: "Get in touch with us",
};

export default function ContactPage() {

    return (
        <div className="container">
            <h2>Contact Us</h2>

            <p>Have questions or feedback? We'd love to hear from you!</p>

            <hr />

            <p>Feel free to reach out to us through any of the following methods:</p>
            <ul>
                <li>Email: info@barberbooker.com</li>
                <li>Phone: +1 (123) 456-7890</li>
                <li>Address: 123 Barber Street, City, Country</li>
            </ul>

            <hr />

            <p>Or simply fill out the form below and we'll get back to you as soon as possible:</p>

            <ContactForm />
            
        </div>
    );
}
