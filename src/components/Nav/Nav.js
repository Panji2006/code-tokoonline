import React from 'react';

function Nav() {
  return (
    <div>
        <div className='logo animate__animated animate__bounceInUp'>
          <a href='/'><strong>BUAH SEGAR</strong></a>
        </div>
        <div className='side-box'>
          <div className='search'></div>
          <i className='fas fa-search'></i>
          <input placeholder='Cari Buah' type='text' />
        </div>
    </div>
  )
}

export default Nav;