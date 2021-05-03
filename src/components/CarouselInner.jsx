import React from 'react';
import PropTypes from 'prop-types'


const CarouselInner = props => {
    return (
        <div className="carousel-inner rounded-3">
            <div className="carousel-item active">
                <img src={props.imageLink} className="d-block w-100" alt={props.alt} />
            </div>
        </div>
    );
};

CarouselInner.propTypes = {
    imageLink: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

CarouselInner.defaultProps = {
    imageLink: "https://i.ibb.co/nfPqgWp/not-found-image-1.png",
    alt:"Image not found"
}
export default CarouselInner;