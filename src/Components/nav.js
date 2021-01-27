import React from 'react';
import {Link} from 'react-router-dom';

const Nav = ({numItems}) => {
    const toggle = () => {
        document.querySelector('.nav-items')
        .classList.toggle('toggle');

        document.querySelector('.burger')
        .querySelectorAll('div').forEach(el => {
            el.classList.toggle('cross');
        });
    }
    const linkStyle = {
        color: '#FFF',
        textDecoration: 'none'
    }
    return(
        <nav>
            <h1>The Daily Store</h1>
            <div className = 'nav-items'>
                <Link style = {linkStyle} to = '/'><p>Home</p></Link>
                <Link style={linkStyle} to = '/shop'><p>Shop</p></Link>
                <Link style={linkStyle} to = '/cart'><p>Cart</p></Link>
                <div>{numItems}</div>
            </div>
            <div className="burger" onClick = {toggle}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Nav;