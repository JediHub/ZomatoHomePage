import React from 'react';
import './header.styles.scss';

function Header({ resetFoodHandler }) {
    return (
        <div className='header'>
            <div>Zomato</div>
            <div onClick={resetFoodHandler}>Home</div>
        </div>
    );
}

export default Header;