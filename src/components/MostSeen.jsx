import React from 'react';
import Card from './Card';

const cards = [
    {
        id: 1,
        image: "https://i.ibb.co/0GMs4wM/tienda-Abarrotes-Categoria.png",
        title:"Abarrotes",
        alt: "Imagen de Abarrotes"
    },
    {
        id: 2,
        image: "https://i.ibb.co/ng5tR1J/pastelerias-Categoria.png",
        title:"Pastelerias",
        alt: "Imagen de Pasteleria"
    },
    {
        id: 3,
        image: "https://i.ibb.co/N3pyzjm/pizzerias-Categoria.png",
        title:"Pizzerias",
        alt: "Imagen de Pizzeria"
    },
    {
        id: 4,
        image: "https://i.ibb.co/NN0tQ9N/esteticas-Categoria.png",
        title:"Estéticas",
        alt: "Imagen de Estética"
    },
    {
        id: 5,
        image: "https://i.ibb.co/tPJcJ6N/farmacias-Categoria.png",
        title:"Farmacias",
        alt: "Imagen de Farmacia"
    }
]
const MostSeen = () => {
    return (
        <div className="mt-5 mb-5">
            <h2>Lo Más Visto</h2>
            <div className="row row-cols-1 row-cols-md-5  mt-4">
                {
                    cards.map(card => {
                        const {id, image, title, alt} = card;
                        return (
                            <Card
                                key={id}
                                image={image}
                                title={title}
                                alt={alt}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MostSeen;