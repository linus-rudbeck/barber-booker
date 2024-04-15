import styles from "./page.module.css";

import FeaturesList from "@/components/FeaturesList/FeaturesList";
import { getBarberById } from "@/data/barbers";


export default async function SingleBarberPage({ params }) {
    const id = Number(params.id);
    const barber = getBarberById(id);


    return (
        <div className="container">

            <h2>{barber.name}</h2>
            <p>
                <b>Location: </b>
                {barber.location}
            </p>
            <p>
                <b>Price range: </b>
                {barber.priceRange}
            </p>

            <hr />

            <h2>Services</h2>

            <p><b>At {barber.name} you can:</b></p>

            <FeaturesList features={barber.services} />

            <hr />


            <h2>Reviews</h2>
            <ul className={styles.reviews}>
                {barber.reviews.map((review, index) => (
                    <li key={index}>
                        <p><b>{review.user} - {review.rating}</b></p>
                        <p>{review.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}