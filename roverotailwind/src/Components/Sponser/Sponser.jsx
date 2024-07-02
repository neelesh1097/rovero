import React from 'react';

const Sponsors = () => {
  return (
    <section className="sponsors py-24 bg-gray-100">
      <div className="logos flex justify-evenly items-center flex-wrap gap-5 w-full max-w-screen-lg mx-auto px-4">
        <img src="assets1/asset 17.png" className="logo max-w-xs md:max-w-sm hover:scale-110 transition-transform duration-300" alt="Sponsor 1" />
        <img src="assets1/asset 18.png" className="logo max-w-xs md:max-w-sm hover:scale-110 transition-transform duration-300" alt="Sponsor 2" />
        <img src="assets1/asset 19.png" className="logo max-w-xs md:max-w-sm hover:scale-110 transition-transform duration-300" alt="Sponsor 3" />
        <img src="assets1/asset 20.png" className="logo max-w-xs md:max-w-sm hover:scale-110 transition-transform duration-300" alt="Sponsor 4" />
      </div>
    </section>
  );
};

export default Sponsors;
