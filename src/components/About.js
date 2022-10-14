import React from 'react';
import Aboutimage from'../images/organic-about-1.png';

function About() {
  return (
    <div className='about'>
        <div className='about-img'>
            <img src={Aboutimage} alt='img'/>
        </div>

        <div className='about-text'>
            <h3>Hasil Alam, <font>Hasil Perkebunan Sehat</font></h3>
            <p>Aneka buah hasil perkebunan dalam negeri dengan kualitas buah segar alami, ditanam dengan bibit unggulan dan pilihan dirawat dengan sepenuh hati, sehingga menghasilkan produk buah unggulan</p>
            <a className='about-btn' href='https://id.wikipedia.org/wiki/Perkebunan' target='_blank'>Baca Selengkapnya</a>
        </div>
    </div>
  )
}

export default About;