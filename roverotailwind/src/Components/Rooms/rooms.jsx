import React from 'react';

const Rooms = () => {
  return (
    <section className="rooms py-14 px-6 lg:px-24">
      <div className="service-container flex justify-center text-center mb-12">
        <div className="service-col w-full lg:w-1/2">
          <div className="service-item">
            <span className="service-subtitle text-lg font-bold text-gray-500 block mb-2">LIVE A LUXURIOUS LIFE</span>
            <hr className="my-4" />
            <h2 className="service-title text-3xl lg:text-4xl pt-4 pb-3">Best Quality Rooms</h2>
            <p className="service-p text-base lg:text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br />
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <div className="content-center-room flex flex-col lg:flex-row justify-evenly items-start text-left space-y-12 lg:space-y-0 lg:space-x-6 md:items-center sm:items-center items-center">
        <div className="content-service-room max-w-xs border p-4 rounded-lg shadow-lg ">
          <div className="transition transform duration-300 hover:scale-105">
            <span className="roomimg block mb-4">
              <img src="assets1/asset 8.jpeg" alt="Luxurious Single Room" className="roomimg-img w-full h-auto rounded-md" />
            </span>
          </div>
          <div className="intro-service-text">
            <h3 className="mb text-xl font-semibold">Luxurious Single Room</h3>
            <p className="mbp text-sm lg:text-base text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
            <div className="newbt">
              <button className="newbtn text-white uppercase bg-brown-700 py-2 px-4 rounded">More Info</button>
            </div>
          </div>
        </div>

        <div className="content-service-room max-w-xs border p-4 rounded-lg shadow-lg">
          <div className="transition transform duration-300 hover:scale-105">
            <span className="roomimg block mb-4">
              <img src="assets1/asset 9.jpeg" alt="Simple Single Room" className="roomimg-img w-full h-auto rounded-md" />
            </span>
          </div>
          <div className="intro-service-text">
            <h3 className="mb text-xl font-semibold">Simple Single Room</h3>
            <p className="mbp text-sm lg:text-base text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
            <div className="newbt">
              <button className="newbtn text-white uppercase bg-brown-700 py-2 px-4 rounded">More Info</button>
            </div>
          </div>
        </div>

        <div className="content-service-room max-w-xs border p-4 rounded-lg shadow-lg">
          <div className="transition transform duration-300 hover:scale-105">
            <span className="roomimg block mb-4">
              <img src="assets1/asset 10.jpeg" alt="Deluxe Single Room" className="roomimg-img w-full h-auto rounded-md" />
            </span>
          </div>
          <div className="intro-service-text">
            <h3 className="mb text-xl font-semibold">Deluxe Single Room</h3>
            <p className="mbp text-sm lg:text-base text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
            <div className="newbt">
              <button className="newbtn text-white uppercase bg-brown-700 py-2 px-4 rounded">More Info</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
