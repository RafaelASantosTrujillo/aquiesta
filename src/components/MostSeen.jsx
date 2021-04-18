import React from 'react';
import Card from './Card';

const cards = [
    {
        image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title:"Abarrotes"
    },
    {
        image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title:"Pastelerias"
    },
    {
        image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title:"Pizzerias"
    },
    {
        image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title:"Estéticas"
    },
    {
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
                        const {image, title} = card;
                        return (
                            <Card
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