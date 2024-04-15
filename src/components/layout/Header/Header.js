import Link from 'next/link';
import styles from './Header.module.css';

export default function Header(){
    return (
        <header className={styles.header}>
            <h1>Barber Booker</h1>
            <nav className={styles.nav}>
                <ul>
                    <LinkItem href="/">Home</LinkItem>
                    <LinkItem href="/barbers">Find Barbers</LinkItem>
                    <LinkItem href="/map">Map</LinkItem>
                    <LinkItem href="/contact">Contact</LinkItem>
                </ul>
            </nav>
        </header>
    );
};

function LinkItem({ href, children }) {
    return (
        <li>
            <Link href={href}>
                {children}
            </Link>
        </li>
    );
}