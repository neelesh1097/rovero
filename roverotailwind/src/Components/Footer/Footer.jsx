import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="containerf flex footer-container">
        <div className="link-company flex">
          <h4>About</h4>
          <a href="#" className="hover-link">About us</a>
          <a href="#" className="hover-link">Company</a>
          <a href="#" className="hover-link">UsabilityHub</a>
          <a href="#" className="hover-link">Team Members</a>
          <a href="#" className="hover-link">Help Guide</a>
        </div>

        <div className="link-company flex">
          <h4>Service</h4>
          <a href="#" className="hover-link">Hotel Booking</a>
          <a href="#" className="hover-link">Online Ticket</a>
          <a href="#" className="hover-link">Travel Agent</a>
          <a href="#" className="hover-link">Customer Page</a>
        </div>

        <div className="link-company flex">
          <h4>Quick Links</h4>
          <a href="#" className="hover-link">Sales & Service</a>
          <a href="#" className="hover-link">Promotional Offers</a>
          <a href="#" className="hover-link">Online Booking</a>
          <a href="#" className="hover-link">Return Policy</a>
          <a href="#" className="hover-link">Status page</a>
        </div>

        <div className="link-company flex">
          <h4>Address</h4>
          <a href="#" className="hover-link">+88 01234 5678 (Sales)</a>
          <a href="#" className="hover-link">+88 01234 5679 (Service)</a>
          <a href="#" className="hover-link">hello@hotemax.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
