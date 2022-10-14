import React from 'react';

function Footer() {
  return (
    <div className='f-container'>
        <h3>Silahkan Log in untuk membeli</h3>
        <div className='f-input'>
            <input placeholder='example@gmail.com' type='email'/>
            <a className='f-btn' href='#'>Kirim</a>
        </div>
    </div>
  );
}

export default Footer;