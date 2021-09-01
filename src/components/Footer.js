import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container">
      <div className="foot-logo">
        <img src="/assets/foot-logo.svg" alt="foot-logo" />
      </div>
      <div className="foot-socials container">
        <a href="/">
          <FaInstagram />
        </a>
        <a href="/">
          <FaTwitter />
        </a>
        <a href="/">
          <FaFacebook />
        </a>
      </div>
      <div className="foot-details">
        <p>32, New York, USA</p>
        <p>+91 1123345566</p>
        <p>FANDOM@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
