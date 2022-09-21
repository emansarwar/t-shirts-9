import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>This is Header</h2>
            <nav>
                <Link to="/home">HOME</Link>
                <Link to="/orderreview">ORDER REVIEW</Link>
            </nav>
        </div>
    );
};

export default Header;