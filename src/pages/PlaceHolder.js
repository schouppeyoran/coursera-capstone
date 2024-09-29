// This page will show a message that the acual page for the section selected doesn't exist yet
import React from 'react';
import './PlaceHolder.css';

const PlaceHolder = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Sorry, this page doesn't exist yet!</h1>
                </div>
            </div>
        </div>
    );
};
export default PlaceHolder;