import React from 'react';
import { Link } from 'react-router-dom';
import CarouselInner from './CarouselInner';
import '../css/discover.css';


const banner1 = [
    {   
        id: 1,
        imageLink: "https://i.ibb.co/pPdr5L2/aviso-Estetica2.png",
        alt: "Anuncio 5to Congreso Internacional y Expo Spa"
    }
]

const banner2 = [
    {   
        id: 20,
        imageLink: "https://i.ibb.co/YfH5MqB/aviso-Farmacia1.png",
        alt: "Anuncio Farmacia FarmaSana"
    }
]

const Discover = () => {
    return (
        <div className="mt-5">
            <h2>Descubre</h2>
            <div className="carousel-container mt-4">
                <div id="carouselExampleIndicators" className="carousel slide mb-4" data-bs-ride="carousel">
                    {
                        banner1.map(el => {
                            const {id, imageLink, alt} = el
                            return (
                                <CarouselInner 
                                    key={id}
                                    imageLink={imageLink}
                                    alt={alt}
                                />
                            )
                        })
                    }
                </div>
                <div id="carouselExampleIndicators" className="carousel slide position-relative" data-bs-ride="carousel">
                    {
                        banner2.map(el => {
                            const {id, imageLink, alt} = el
                            return (
                                <CarouselInner 
                                    key={id}
                                    imageLink={imageLink}
                                    alt={alt}
                                />
                            )
                        })
                    }
                    <div className="container-btn-ver-mas position-absolute d-flex justify-content-end align-items-end">
                        <Link
                            className="btn btn-primary rounded-pill carousel-btn"
                            to="/featured"
                        >
                            Ver Más
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;