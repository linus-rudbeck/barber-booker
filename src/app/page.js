import FeaturesList from "@/components/FeaturesList/FeaturesList";
import styles from "./page.module.css";

export const metadata = {
  title: "Barber Booker",
  description: "Book your next haircut",
};

const features = [
  "Find available appointment slots with your favorite barbers",
  "Book your next haircut in just a few clicks",
  "Receive reminders and updates about your appointment",
  "Manage your bookings easily from any device",
];

export default function Home() {
  return (
    <div className="container">

      <h2>Welcome to Barber Booker</h2>
      <p>Where Style Meets Convenience</p>
      
      <p>At Barber Booker, we understand the importance of a great haircut and the value of your time. That's why we've created the ultimate booking solution for both customers and barbers.</p>
      
      <hr />
      
      <p><b>With Barber Booker, you can:</b></p>
      
      <FeaturesList features={features} />
      <hr />
      
      <p>Join the thousands of satisfied customers who trust Barber Booker for their grooming needs. Say goodbye to long waits and last-minute appointments – book with Barber Booker today!</p>
    
    </div>
  );
}
