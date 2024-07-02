import React from 'react';
import './Form.css'
const FormSection = () => {
  return (
    <section className="form py-10 px-4">
      <div className="form-container flex flex-col lg:flex-row justify-between lg:items-center">
        <div className="roomcontainer lg:text-left mb-8 lg:mb-0">
          <div className="content1">
            <span className="subtitle text-lg font-bold block mb-2">ITS AMAZING</span>
            <h1 className="title1 text-3xl lg:text-4xl font-bold mb-4">Check All Amazing Rooms For You</h1>
            <p className="description text-base lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </div>
        </div>

        <div className="formcontainer w-full lg:w-1/2">
          <img src="assets1/asset 27.jpeg" alt="Room" className="formimg w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default FormSection;
