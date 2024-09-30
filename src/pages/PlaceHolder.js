// PlaceHolder.js
import React from 'react';
import './PlaceHolder.css';

const PlaceHolder = ({ title }) => {
    return (
        <>
            <h1>{title}</h1>
            <p>This page is under construction, come back later</p>
        </>
    );
};

export default PlaceHolder;