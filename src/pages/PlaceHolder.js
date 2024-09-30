// PlaceHolder.js
import React from 'react';
import './PlaceHolder.css';

const PlaceHolder = ({ title }) => {
    return (
        <div className="placeholder-container">
            <h2 className="placeholder-title">{title}</h2>
            <p>This page is under construction, come back later</p>
        </div>
    );
};

export default PlaceHolder;
