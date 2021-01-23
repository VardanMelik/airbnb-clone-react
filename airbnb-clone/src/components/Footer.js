import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <p>© 2021 Airbnb, Inc. All rights reserved</p>
            
            <Link className="link" to="/privacy">
                Privacy
            </Link>

            <Link to="/terms" className="link">
                Terms
            </Link>

            <Link className="link" to="/sitemap">
                Sitemap
            </Link>

            <Link className="link" to="/cetails">
                Company
            </Link>
            



        </div>
    )
}

export default Footer
