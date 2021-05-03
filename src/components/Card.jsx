import React from 'react';
import PropTypes from 'prop-types';

const Card = ({image, title, alt}) => {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt={alt} />
                <div className="card-body bg-dark">
                    <h5 className="card-title text-light text-center">{title}</h5>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}
Card.defaultProps = {
    image: "https://i.ibb.co/ggSnSg3/not-found-image-2.png",
    title: "Not Found",
    alt: "Image not found"
}

export default Card;