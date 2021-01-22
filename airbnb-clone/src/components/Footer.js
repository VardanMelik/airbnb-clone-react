import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <p>© 2021 Airbnb, Inc. All rights reserved</p>
            
            <Link to="/privacy">
                Privacy
            </Link>

            <Link to="/terms">
                Terms
            </Link>

            <Link to="/sitemap">
                Sitemap
            </Link>

            <Link to="/cetails">
                Company Details
            </Link>



        </div>
    )
}

export default Footer
