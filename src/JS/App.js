import React from 'react';
import '../App.css';
import Header from "./Header";
import data from "../JS/data"
import Card from "../JS/Card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            imageUrl={item.imageUrl}
            location={item.location}
            title={item.title}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            googleMapsUrl={item.googleMapsUrl}
            />
    )
  }
  )
  return (
    <div className="App">
      <Header />
      <div className="cards-container">  
        {cards}
      </div>
    </div>
  );
}


// title: "Angkor Wat",
// location: "Siem Reap, Cambodia",
// googleMapsUrl: "https://www.google.com/maps/place/Angkor+Wat/@13.4124693,103.8669857,15z/data=!4m2!3m1!1s0x0:0x3eaba81157b0418d?sa=X&ved=2ahUKEwiJ99rM96H7AhVD0GEKHS0BARYQ_BJ6BAhOEAU",
// startDate: "23 Jan, 2021",
// endDate: "24 Jan, 2021",
// description: "Angkor Wat is a temple complex in Cambodia and is the largest religious monument in the world.",
// imageUrl: 