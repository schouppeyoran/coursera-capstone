// PlaceHolder.js
import React from 'react';
import './PlaceHolder.css';

const PlaceHolder = ({ title }) => {
    return (
        <div className="placeholder-container">
            <h1 className="placeholder-title">{title}</h1>
            <p className="placeholder-text">This page is under construction, come back later</p>
        </div>
    );
};

export default PlaceHolder;