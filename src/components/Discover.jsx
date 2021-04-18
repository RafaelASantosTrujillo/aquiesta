import React from 'react';
import '../css/discover.css';

const Discover = () => {
    return (
        <div className="mt-5">
            <h2>Descubre</h2>
            <div className="row mt-4">
                <div id="carouselExampleIndicators" class="col carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner rounded-3">
                        <div class="carousel-item active">
                            <img src="https://fondosmil.com/fondo/19700.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://okdiario.com/img/2018/02/16/descubren-que-adromeda-y-via-lactea-son-del-mismo-tamano-3.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://okdiario.com/img/2018/02/16/descubren-que-adromeda-y-via-lactea-son-del-mismo-tamano-1.jpg" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
                <div id="carouselExampleIndicators" class="col carousel slide position-relative" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div class="carousel-inner rounded-3 ">
                        <div class="carousel-item active">
                            <img src="https://fondosmil.com/fondo/19700.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://okdiario.com/img/2018/02/16/descubren-que-adromeda-y-via-lactea-son-del-mismo-tamano-3.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://okdiario.com/img/2018/02/16/descubren-que-adromeda-y-via-lactea-son-del-mismo-tamano-1.jpg" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a href="#" className="btn btn-outline-light rounded-pill carousel-btn position-absolute">Ver Más</a>
                </div>
            </div>
        </div>
    );
};

export default Discover;