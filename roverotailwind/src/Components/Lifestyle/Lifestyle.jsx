import React from 'react';



function Lifestyle() {
    return (
        <section className="video-section relative w-full overflow-hidden py-12">
            <div className="video-container relative w-full max-w-full">
                <div className="gradient-overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0"></div>
                <img
                    src="assets1/asset 28.jpeg"
                    alt="Lifestyle at Rovero"
                    className="videoimg w-full h-auto block z-1" />
                <div className="section-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-11/12 max-w-xl z-2">
                    <div className="section-content-inner font-serif">
                        <span className="text-uppercase text-2xl font-bold text-white uppercase mb-2 block">
                            Amazing Lifestyle
                        </span>
                        <h2 className="text-white text-3xl lg:text-5xl mb-2">
                            Watch Your Life at Rovero
                        </h2>
                        <p className="text-white-p text-lg lg:text-xl mt-2 text-white">
                            Bipor incididunt ut labore et dolore magna liqu Ut enim ad teros
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Lifestyle;
