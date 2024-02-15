import React from 'react';
import { Carousel } from "@material-tailwind/react";


function CarouselHome () {

      const caption = (
        <div className="overlay absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-lightText flex flex-col gap-10">
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
    <div className="relative bg-blcarou">
    <Carousel
                className="max-w-[1800px] max-h-[1000px] bg-blcarou mx-auto"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                          activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              >
                <img
                  src='./carousel/shop-hero-1-product-slide-1.svg'
                  alt="femalePicture"
                  className="h-full w-full object-cover"
                />
                <img
                  src='./carousel/shop-hero-1-product-slide-1.svg'
                  alt="femalePicture"
                  className="h-full w-full object-cover"
                />
              </Carousel>
     {caption}
    </div>
    </>
  );
}

export default CarouselHome;


