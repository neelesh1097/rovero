import React from 'react';
import './News.css'; 
const News = () => {
  return (
    <section className="news">
      <div className="life-main">
        <div className="life-container">
          <span className="service-subtitle">KNOW MORE ABOUT US</span>
          <hr />
          <h2 className="service-title">Latest News & Events</h2>
          <p className="service-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed <br />do eius mod
              tempor tomar keu kidite paro</p>
        </div>
      </div>
      <div className="centered-container">
        <div className="grid-container">
          <div className="grid-item single-image">
            <div className="blog-wrapper">
              <div className="blog-image">
                <img src="assets1/asset 21.jpeg" alt="news-images01" />
                <div className="blog-content">
                  <div className="blog-text">
                    <span className="blog-category">Events</span>
                    <span className="blog-date">15 June 2020</span>
                    <h4><a href="blog-details.html">Anuis consr nisl efficitur</a></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item double-image">
            <div className="double-blog-wrapper">
              <div className="blog-wrapper">
                <div className="blog-image">
                  <img src="assets1/asset 22.jpeg" alt="news-images02" />
                  <div className="blog-content">
                    <div className="blog-text">
                      <span className="blog-category">Events</span>
                      <span className="blog-date">15 June 2020</span>
                      <h4><a href="blog-details.html">Nunc na eu sodales bolares</a></h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-wrapper">
                <div className="blog-image">
                  <img src="assets1/asset 23.jpeg" alt="news-images03" />
                  <div className="blog-content">
                    <div className="blog-text">
                      <span className="blog-category">Blog</span>
                      <span className="blog-date">15 June 2020</span>
                      <h4><a href="blog-details.html">Curaur dui urstas et fermen</a></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item double-image">
            <div className="double-blog-wrapper">
              <div className="blog-wrapper">
                <div className="blog-image">
                  <img src="assets1/asset 24.jpeg" alt="news-images04" />
                  <div className="blog-content">
                    <div className="blog-text">
                      <span className="blog-category">Blog</span>
                      <span className="blog-date">15 June 2020</span>
                      <h4><a href="blog-details.html">Proin turpis urna bolte paro</a></h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-wrapper">
                <div className="blog-image">
                  <img src="assets1/asset 25.jpeg" alt="news-images05" />
                  <div className="blog-content">
                    <div className="blog-text">
                      <span className="blog-category">Events</span>
                      <span className="blog-date">15 June 2020</span>
                      <h4><a href="blog-details.html">Vivamus ultrices ven</a></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
