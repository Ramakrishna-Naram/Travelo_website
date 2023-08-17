import React from 'react';
import "./Tripstyle.css";
import Tripdata from './Tripdata';
import Trip1 from  '../images/alphs.jpg';
import Trip2 from  '../images/london.jpg';
import Trip3 from  '../images/maui.jpg';

const Trip = () => {
  return (
    <center>
    <div className='trip'>
      <h1>Recent Trips</h1>
      <p>You can discover great destinations using Google maps</p>
    <div className='tripcard'>
        <Tripdata 
        image={Trip1}
        heading="Swiss Alps"
        text="Snow-covered mountains, charming towns and flower-strewn meadows make the Swiss Alps a year-round fairy tale destination. Visit in the winter for world-class skiing (and après-ski fondue and drinks) in locales such as the exclusive St. Moritz and the picturesque Zermatt, home of the craggy Matterhorn"
        />
        <Tripdata 
        image={Trip2}
        heading="London, England"
        text="London is a world unto itself. The eclectic neighborhoods, which are home to a blend of historical landmarks and modern-day attractions, can keep you occupied for days. If it's your first time in London, join a tour that takes you past top spots like the Tate Modern art institution, Buckingham Palace, the Tower of London, Borough Market and the British Museum"
        />
        <Tripdata 
        image={Trip3}
        heading="Maui"
        text="Whether you're driving along the Road to Hana, enjoying a bird's-eye view of Maui's lush coastline from a helicopter, snorkeling with sea turtles or simply relaxing on white or black sand beaches, you'll find that this Hawaiian island is unlike any other tropical destination"
        />
    </div>
    </div>
    </center>
  )
}

export default Trip
