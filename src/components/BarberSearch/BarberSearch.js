"use client";

import { useState, useEffect } from 'react';
import styles from './BarberSearch.module.css';
import { barberData, getProperty } from '@/data/barbers';
import Link from 'next/link';

export default function BarberSearch() {


    // State for search filters
    const [location, setLocation] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // Function to handle search
    const handleSearch = () => {
        // Filter the hardcoded data based on location and price range
        const filteredResults = barberData.filter((barber) => {

            // Filter by location
            if (location && barber.location !== location) {
                return false;
            }

            // Filter by price range
            if (priceRange && barber.priceRange !== priceRange) {
                return false;
            }

            return true;
        });

        console.log({ location, priceRange, filteredResults });
        // Update the search results state
        setSearchResults(filteredResults);
    };

    // useEffect to simulate componentDidMount to load initial data
    useEffect(() => {
        // Load initial search results (all barbers)
        setSearchResults(barberData);
    }, []);

    return (<>
        <div className={styles.searchForm}>

            <SelectFilter
                label="All locations"
                options={getProperty('location')}
                value={location}
                onChange={(e) => setLocation(e.target.value)} />

            <SelectFilter
                label="All price ranges"
                options={getProperty('priceRange')}
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)} />

            <button onClick={handleSearch}>Search</button>
        </div>

        <div className={styles.barberResult}>
            {searchResults.map(barber => (<BarberResult key={barber.id} barber={barber} />))}
        </div>
    </>
    );
}

function BarberResult({ barber }) {

    return (
        <div key={barber.id} className={styles.barberResult}>
            <h3>{barber.name}</h3>
            <p>Location: {barber.location}</p>
            <p>Price Range: {barber.priceRange}</p>
            <p>
                <Link href={`/barbers/${barber.id}`}>
                    View Details
                </Link>
            </p>
        </div>
    );
}

function SelectFilter({ label, options, value, onChange }) {
    return (
        <select
            value={value}
            onChange={onChange}>
            <option value="">{label}</option>
            {options.map(option => (
                <option key={option} value={option}>
                    {option}
                    </option>
            ))}
        </select>
    );
}