

const Life = () => {
  return (
    <section className="life-section py-8">
      <div className="life-main flex justify-center items-center text-center">
        <div className="life-container py-8">
          <span className="service-subtitle text-lg font-bold text-gray-400 uppercase">LIVE A LUXURIOUS LIFE</span>
          <hr className="my-4" />
          <h2 className="service-title text-2xl lg:text-4xl pt-4 pb-3 font-serif">Best Quality Rooms</h2>
          <p className="service-p text-base lg:text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed <br />do eius mod tempor tomar keu kidite paro</p>
        </div>
      </div>

      <div className="big-feature-container flex flex-col md:flex-row items-center md:space-x-8 px-4 md:px-0 justify-center">
        <div className="feature-img pl-3 lg:w-1/3  mb-4 lg:mb-0">
          <img src="assets1/asset 12.jpeg" alt="Luxurious Life" className="w-full h-auto" />
        </div>
        <div className="feature-desc flex flex-col items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left space-y-4 lg:pl-4 md:text-left md:items-start">
          <h2 className="text-uppercase1 text-xl lg:text-2xl font-bold uppercase text-gray-700">ENJOY YOUR LIFE</h2>
          <h3 className="lifeheader text-2xl lg:text-3xl font-semibold">Relax in Our Amazing Swimming Pool</h3>
          <p className="lifeheaderp text-lg text-gray-600">Test interfaces, interaction flows, iconography and more, to help you create<br /> intuitive and delightful experiences for your users.</p>
        </div>
      </div>
    </section>
  );
};

export default Life;
