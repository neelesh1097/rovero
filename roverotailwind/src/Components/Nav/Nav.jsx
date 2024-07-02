
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';




// import assets from './assets/assset0.png'

const Nav = () => {
  return (
    <header>
      {/* Header Starter */}
      <div className="header-starter mt-2 px-4 text-gray-600 leading-6 text-base">
        <div className="header-container flex lg:justify-between md:justify-center sm:justify-center">
          <div className="header-container1">
            <ul>
              <li className="list-none mr-0">
                <span className="logo1">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                123.456.7890
              </li>
              <li>
                <span className="logo2">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                booking@rovero.com
              </li>
            </ul >
          </div>
          <div className="header-container2">
            <ul className='flex items-center'>
              <span className="line"></span>
              <li>
                ENG
                <span className="logo3">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </li>
              <li>
                USD
                <span className="logo3">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </li>
              <li>Login</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Header Sticky */}
      <div id="header-sticky" className="header-bottom pt-6 px-4 text-lg shadow sticky top-0">
        <div className="containerN flex justify-evenly items-center md:justify-between">
          <div className="logo">
            <a href="index.html">
              <img src="assets1/asset 0.png" alt="ROVERO" />
            </a>
          </div>
          <div className="header-main-menu">
            <div className="main-menu">
              <nav id="mobile-menu">
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="#">Rooms</a></li>
                  <li><a href="#">Reservation</a></li>
                  <li><a href="#">News</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="social-links">
            <ul className="social-link">
              <li>
                <a className="facebook" href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a className="insta" href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a className="linked" href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;


