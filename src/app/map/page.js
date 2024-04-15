import styles from "./page.module.css";
import barbersMap from "./barbers-map.png";
import Image from "next/image";

export const metadata = {
    title: "Barber Booker - Map",
    description: "Find barbers near you on the map",
};

export default function MapPage() {
    return (
        <div className={styles.container}>
            <h2>Map</h2>
            <p>Here are some Barbers Near You</p>

            <Image
                src={barbersMap}
                alt="Map of barbers"
                width={1920}
                height={1466}
                className={styles.barbersMap} />

        </div>
    );
}
