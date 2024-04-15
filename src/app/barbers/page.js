import BarberSearch from '@/components/BarberSearch/BarberSearch';
import styles from './page.module.css';

export const metadata = {
    title: 'Barber Booker - Search for Barbers',
    description: 'Search for barbers near you',
};

export default function BarbersPage() {


    return (<>
        <h2>Search for Barbers</h2>

        <BarberSearch />

    </>
    );
}
