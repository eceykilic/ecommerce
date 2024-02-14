import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './temporary.css';

function Carousel2() {
  const items = [
    {
      altText: '',
      caption: '',
      key: 1,
      src: './carousel2/carousel-item.png',
    },
    {
      altText: '',
      caption: '',
      key: 2,
      src: './carousel2/carousel-item.png',
    },
  ];

  const caption = (
    <div className="absolute top-2/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-lightText flex flex-col gap-4">
      <h5 className="font-bold tracking-wider mb-4">SUMMER 2020</h5>
      <h1 className="font-bold text-7xl tracking-wider mb-4 ">Vita Classic <br /> Product</h1>
      <h4 className="tracking-wider mb-4">
        We know how large objects will act, We know
        <br />
        how are objects will act, We know
      </h4>
      <div className="flex flex-row gap-5">
      <h5 className="mt-3 text-2xl">$16.48</h5>
      <button className="bg-btnGreen text-white font-bold text-s py-3 rounded leading-8 w-[180px]">
        ADD TO CART
      </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="relative">
        <UncontrolledCarousel items={items} />
        {caption}
      </div>
    </>
  );
}

export default Carousel2;
