import React from 'react';
import Box from './Product-Box/Box';
import Image1 from '../images/organic-pro-1.jpg';
import Image2 from '../images/organic-pro-2.jpg';
import Image3 from '../images/organic-pro-3.jpg';
import Image4 from '../images/organic-pro-4.jpg';
import Image5 from '../images/organic-pro-5.jpg';
import Image6 from '../images/organic-pro-6.jpg';

function Product() {
  return (
    <div id='produk' className='product'>

        <div className='p-heading'>
            <h3>Produk Organik Baru</h3>
        </div>
        <div className='product-container'>
            <Box 
                image={Image1} 
                name='Semangka' 
                price='Rp 9,000/kg'/>
            <Box 
                image={Image2} 
                name='Mangga' 
                price='Rp 15,000/kg'/>
            <Box 
                image={Image3} 
                name='Bayam' 
                price='Rp 5,000/kg'/>
            <Box 
                image={Image4} 
                name='Apel' 
                price='Rp 17,000/kg'/>
            <Box 
                image={Image5} 
                name='Anggur' 
                price='Rp 45,000/kg'/>
            <Box 
                image={Image6} 
                name='Jeruk' 
                price='Rp 20,000/kg'/>
        </div>
    </div>
  );
}

export default Product;