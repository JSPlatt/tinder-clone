import React, { useState } from 'react'
import TinderCard from "react-tinder-card"
import './TinderCards.css'


function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'steve jobs',
            url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'

        },
        {
            name: 'mark zuckerberg',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg'
        }
    ])
    

    return (
        <div>
            <h1>Tinder Cards</h1>

            {people.map(person => (
                <TinderCard 
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}
                >
                    <div 
                    style={{ backgroundImage: `url(${person.url})`}}
                    className="card"
                >
                      <h3>{person.name}</h3>  
                    </div>
                </TinderCard>
            ))}
        </div>
    )
}

export default TinderCards
