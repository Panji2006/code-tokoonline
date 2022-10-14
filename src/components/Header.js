import React from 'react';
import Nav from './Nav/Nav';
import Image from '../images/organic-pattern-1.png';

function Header() {
  return (
    <div className='main'>
        <Nav />
        <div className='m-text'>
            <img src={Image} className='header-image' alt='img'/>
            <h2><font>Sehat</font> dan <font>Segar</font> buah Organik</h2>
            <a className='m-btn' href='#produk'>Produk</a>
        </div>
    </div>
  )
}

export default Header;