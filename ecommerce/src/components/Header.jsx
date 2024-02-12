
import React, { useState } from 'react';
import {
    UncontrolledCarousel
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./temporary.css"


function Header () {

    const items = [
        {
          altText: '',
          caption: '',
          key: 1,
          src: './carousel/shop-hero-1-product-slide-1.svg'
        },
        {
          altText: '',
          caption: '',
          key: 2,
          src: './carousel/shop-hero-1-product-slide-2.svg'
        }
      ];
  

  return (
    <>
    <div>
    <UncontrolledCarousel
    items={items}
    
 />
    </div>
    </>
  );
}

export default Header;