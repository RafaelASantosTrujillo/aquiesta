import React from 'react';
import '../css/discover.css';


const Discover = () => {
    return (
        <div className="mt-5">
            <h2>Descubre</h2>
            <div className="carousel-container mt-4">
                <div id="carouselExampleIndicators" className="carousel slide mb-4" data-bs-ride="carousel">
                    <div className="carousel-inner rounded-3">
                        <div className="carousel-item active">
                            <img src="https://fondosmil.com/fondo/19700.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://okdiario.com/img/2018/02/16/descubren-que-adromeda-y-via-lactea-son-del-mismo-tamano-3.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://okdiario.com/img/2018/02/16/descubren-que-adromeda-y-via-lactea-son-del-mismo-tamano-1.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide position-relative" data-bs-ride="carousel">

                    <div className="carousel-inner rounded-3 ">
                        <div className="carousel-item active">
                            <img src="https://fondosmil.com/fondo/19700.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://okdiario.com/img/2018/02/16/descubren-que-adromeda-y-via-lactea-son-del-mismo-tamano-3.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://okdiario.com/img/2018/02/16/descubren-que-adromeda-y-via-lactea-son-del-mismo-tamano-1.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    
                    <div className="container-btn-ver-mas position-absolute d-flex justify-content-end align-items-end">
                        <a href="#" className="btn btn-outline-light rounded-pill carousel-btn ">Ver Más</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;