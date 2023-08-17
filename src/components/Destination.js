import React from 'react';
import City from  '../images/paris.jpg'
import City2 from  '../images/paris2.jpg'
import City3 from  '../images/rome.jpg'
import City4 from  '../images/rome2.jpg'
import "./Destination.css";
import DestinationData from './DestinationData';

const Destination = () => {
  return (
    <div className='destination'>
        <center>
        <h1>Popular Travel Destination</h1>
        <p>Traveling gives you the oprtunity to see the world</p>
        </center>
        <DestinationData 
        className="first-des"
        heading="Paris"
        text="France's magnetic City of Light is a perennial tourist destination, drawing visitors with its iconic attractions, like the Eiffel Tower and the Louvre, and its unmistakable je ne sais quoi. Quaint cafes, trendy shopping districts and Haussmann architecture give Paris its timeless beauty. But the city's best asset is that you're likely to discover something new with each trip or season (read: Paris is always a good idea). To best explore France's ever-changing capital, get lost wandering the charming cobblestone streets, learn its secrets on a walking tour, head to dynamic art exhibits like the Atelier des Lumières or gourmandize at the latest restaurants and pastry shops"
        img1={City}
        img2={City2}
       />
       <DestinationData 
        className="first-des-reverse"
        heading="Rome"
        text="When you visit Italy's capital city, prepare to cross a few must-see landmarks – including the Colosseum, the Trevi Fountain and the Pantheon – off of your bucket list. Travelers can also see some of Italy's greatest treasures, including St. Peter's Basilica and the Sistine Chapel, in Vatican City. Escape the tourist crowds by taking a twilight stroll along the cobblestone streets of Trastevere, or head to Mercato Centrale Roma to sample local delicacies like pistachio gelato. Before leaving, peruse some of Rome's lesser-known museums, art galleries and boutiques, or head to Janiculum Hill for panoramic views of the city"
        img1={City3}
        img2={City4}
       />
    </div>
  )
}

export default Destination
