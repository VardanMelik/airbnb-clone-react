import React from 'react';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import './Header.css';
import Logo from '../assets/logo.png'

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__icon"
                    src={Logo}
                    //src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png"
                    alt="logo"
                />
            </Link>

            <div className="header__center">
                <input type="text" />
                <SearchIcon/>
            </div>

            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header
