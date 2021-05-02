import React from 'react';
import Discover from './Discover';
import MostSeen from './MostSeen';

const Main = () => {
    return (
        <div className="container-md">
            <Discover />
            <MostSeen />
        </div>
    );
};


export default Main;