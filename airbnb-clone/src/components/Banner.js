import React from 'react';
import './Banner.css';
import Button from '@material-ui/core/Button';

function Banner() {
    return (
        <div className="banner">
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of
                    getway to uncover the hidden
                    gems near you.
                </h5>
                <Button
                    variant='outlined'
                >
                    Expore Nearby
                </Button>
            </div>
        </div>
    )
}

export default Banner
