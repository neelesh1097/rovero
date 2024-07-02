import React, { useState } from 'react';

import './Herosection.css'

const Herosection = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      img: "assets1/asset 2.jpeg",
      caption: "Caption Text"
    },
    {
      img: "assets1/asset 1.jpeg",
      caption: "Caption Two"
    },
    {
      img: "assets1/asset 3.jpeg",
      caption: "Caption Three"
    }
  ];

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <section className="starter" id="starter-section">
      <div className="starter-container flex flex-col lg:flex-row items-center">
        <div className="left lg p-0 lg:p-0">
          <div className="content">
            <span className="subtitle text-4xl font-bold text-brown-700">ITS AMAZING</span>
            <div className="img absolute z-[-1]">
              <img src="assets1/asset 4.png" alt="" />
            </div>
            <h1 className="title text-5xl lg:text-6xl font-bold mt-4">Enjoy A Dream Vacation in The Hotel Rovero</h1>
            <p className="description text-lg mt-6 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="mybtn mb-8">
            <a href="#" className="btn py-4 px-8 border-2 bg-brown-700 text-white font-bold">Book Now</a>
          </div>
        </div>

        <div className="slideshow-container lg:w-1/2 relative">
          {slides.map((slide, index) => (
            <div className={`mySlides fade ${index === slideIndex ? 'block' : 'hidden'}`} key={index}>
              <div className="numbertext absolute top-0 text-white p-2">{index + 1} / {slides.length}</div>
              <img src={slide.img} alt="" className="image-slider h-auto" />
              <div className="text absolute bottom-2 text-white text-center">{slide.caption}</div>
            </div>
          ))}
          <a className="prev absolute top-1/2 left-0 py-4 px-6 text-white bg-black opacity-75 cursor-pointer" onClick={prevSlide}>&#10094;</a>
          
        </div>
      </div>
    </section>
  );
};

export default Herosection;
