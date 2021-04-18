import React from 'react';
const Card = (props) => {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body bg-dark">
                    <h5 className="card-title text-light text-center">{props.title}</h5>
                </div>
            </div>
        </div>
    );
};

export default Card;