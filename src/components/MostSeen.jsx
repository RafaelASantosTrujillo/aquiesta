import React from 'react';
import Card from './Card';

const cards = [
    {
        id: 1,
        image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title:"Abarrotes"
    },
    {
        id: 2,
        image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title:"Pastelerias"
    },
    {
        id: 3,
        image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title:"Pizzerias"
    },
    {
        id: 4,
        image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title:"Estéticas"
    },
    {
        id: 5,
        image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title:"Farmacias"
    }
]
const MostSeen = () => {
    return (
        <div className="mt-5 mb-5">
            <h2>Lo Más Visto</h2>
            <div className="row row-cols-1 row-cols-md-5  mt-4">
                {
                    cards.map(card => {
                        const {id, image, title} = card;
                        return (
                            <Card
                                key={id}
                                image={image}
                                title={title}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MostSeen;