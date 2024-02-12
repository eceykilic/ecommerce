
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

      const caption = (
        <div className="overlay absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-lightText flex flex-col gap-5">
          <h5 className="font-bold tracking-wider">SUMMER 2020</h5>
          <h1 className="font-bold text-6xl tracking-wider">NEW COLLECTION</h1>
          <h4 className="tracking-wider ">We know how large objects will act,
            <br />
            but things on a small scale</h4>
            <button className="bg-btnGreen text-white font-bold text-2xl py-3 rounded leading-8 w-52">SHOP NOW</button>
        </div>
        
      );
  

  return (
    <>
    <div>
    <UncontrolledCarousel
    items={items}   
 />
     {caption}
    </div>
    </>
  );
}

export default Header;