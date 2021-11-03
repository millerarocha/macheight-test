import React from 'react';

import './Header.css';

import logo from '../../assets/images/nba-logo.png'

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt="" className="header__logo" />
            <div className="header__description">
                <h1 className="header__title">Players Height Filter</h1>
                <p className="header__text">Filter players list by Height</p>
            </div>

        </header>
    )
}

export default Header;
