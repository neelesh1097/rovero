import React from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBellConcierge, faKey, faHotel } from '@fortawesome/free-solid-svg-icons';


const Service = () => {
  return (
    <section className="services py-14 lg:px-24 px-6">
      <div className="service-container flex justify-center text-center items-center">
        <div className="service-col w-full lg:w-1/2">
          <div className="service-item">
            <span className="service-subtitle text-lg font-bold">WE ARE CHAMP</span>
            <hr className="my-4" />
            <h2 className="service-title">Your Life at Rovero</h2>
            <p className="service-p text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br />
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <div className="content-center flex flex-col lg:flex-row justify-center items-center text-center pt-16 space-y-12 lg:space-y-0 lg:space-x-12">
        <div className="content-service flex flex-col items-center">
          <div className="transition transform duration-300 hover:scale-110">
            <span className="icon text-6xl text-brown-700"> <FontAwesomeIcon icon={faKey} /></span>
          </div>
          <div className="intro-service-text mt-4">
            <h3 className="mb text-xl font-semibold">Great Environment</h3>
            <p className="mbp text-sm lg:text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid idunt ut labore et </p>
          </div>
        </div>

        <div className="content-service flex flex-col items-center">
          <div className="transition transform duration-300 hover:scale-110">
            <span className="icon text-6xl text-brown-700">  <FontAwesomeIcon icon={faBellConcierge} /></span>
          </div>
          <div className="intro-service-text mt-4">
            <h3 className="mb text-xl font-semibold">Quality Services</h3>
            <p className="mbp text-sm lg:text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid idunt ut labore et </p>
          </div>
        </div>

        <div className="content-service flex flex-col items-center">
          <div className="transition transform duration-300 hover:scale-110">
            <span className="icon text-6xl text-brown-700"><FontAwesomeIcon icon={faHotel} /></span>
          </div>
          <div className="intro-service-text mt-4">
            <h3 className="mb text-xl font-semibold">Luxurious Rooms</h3>
            <p className="mbp text-sm lg:text-base text-gray-600">Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incid idunt ut labore et</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
