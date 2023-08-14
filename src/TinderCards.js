import React, { useState } from 'react'
import './TinderCards.css';
import TinderCard from "react-tinder-card";

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: "Elon Musk", 
            url: "https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg",  
        },
        {
            name: "Jeff Bezos", 
            url: "https://assets.entrepreneur.com/content/3x2/2000/20150224165308-jeff-bezos-amazon.jpeg",  
        },
   ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing" + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    }

  return (
    <div className='tinderCards'>
        <div className='tinderCards_cardContainer'>
            {people.map((person) => (
                <TinderCard
                    className='swipe'
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div 
                       style={{backgroundImage: `url(${person.url})` }}
                       className='card'
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
      
    </div>
  );
}

export default TinderCards
