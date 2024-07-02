import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Testimonial = () => {
  return (
    <section className="testimonial1 bg-[#fbf8f3] px-4 py-8">
      <div className="testimonial-main flex justify-center text-center">
        <div className="life-container py-8">
          <span className="service-subtitle text-lg font-bold text-gray-400 uppercase">TESTIMONIAL & REVIEW</span>
          <hr className="my-4 border-t-2 border-gray-200" />
          <h2 className="service-title text-2xl lg:text-4xl pt-4 pb-3 font-serif">What People Say</h2>
          <p className="service-p text-base lg:text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed <br />do eius mod tempor tomar keu kidite paro</p>
        </div>
      </div>

      <div className="testimonial-container flex flex-col lg:flex-row justify-around mt-8 space-y-8 lg:space-y-0">
        <div className="testimonial max-w-xs mx-auto text-center p-5 border border-gray-300 rounded-lg bg-[#f9f9f9]">
          <div className="client-img flex justify-center items-center mb-3">
            <img className="w-20 h-20 rounded-full object-cover" src="assets1/asset 14.jpeg" alt="Client" />
          </div>
          <ul className="review-ratting mb-3 flex justify-center space-x-1">
            {[...Array(5)].map((_, index) => (
              <li key={index} className="text-yellow-500">
                <FontAwesomeIcon icon={faStar} />
              </li>
            ))}
          </ul>
          <p className="pt text-lg text-gray-600 font-serif">Toma onsectetur adipisicing elit, sed do eiusmod tiusmod tempor incidi dunt ut labore elit.</p>
          <div className="testi-info mt-4">
            <h5 className="mb-1 text-xl text-black font-serif">Richard Moore</h5>
            <span className="meta-text-color text-sm text-gray-600 font-serif">Journalist</span>
          </div>
        </div>

        <div className="testimonial max-w-xs mx-auto text-center p-5 border border-gray-300 rounded-lg bg-[#f9f9f9]">
          <div className="client-img flex justify-center items-center mb-3">
            <img className="w-20 h-20 rounded-full object-cover" src="assets1/asset 16.jpeg" alt="Client" />
          </div>
          <ul className="review-ratting mb-3 flex justify-center space-x-1">
            {[...Array(5)].map((_, index) => (
              <li key={index} className="text-yellow-500">
                <FontAwesomeIcon icon={faStar} />
              </li>
            ))}
          </ul>
          <p className="pt text-lg text-gray-600 font-serif">Another testimonial text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="testi-info mt-4">
            <h5 className="mb-1 text-xl text-black font-serif">Jackson Don</h5>
            <span className="meta-text-color text-sm text-gray-600 font-serif">Designer</span>
          </div>
        </div>

        <div className="testimonial max-w-xs mx-auto text-center p-5 border border-gray-300 rounded-lg bg-[#f9f9f9]">
          <div className="client-img flex justify-center items-center mb-3">
            <img className="w-20 h-20 rounded-full object-cover" src="assets1/asset 15.jpeg" alt="Client" />
          </div>
          <ul className="review-ratting mb-3 flex justify-center space-x-1">
            {[...Array(5)].map((_, index) => (
              <li key={index} className="text-yellow-500">
                <FontAwesomeIcon icon={faStar} />
              </li>
            ))}
          </ul>
          <p className="pt text-lg text-gray-600 font-serif">Another testimonial text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="testi-info mt-4">
            <h5 className="mb-1 text-xl text-black font-serif">Jane Doe</h5>
            <span className="meta-text-color text-sm text-gray-600 font-serif">Designer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
