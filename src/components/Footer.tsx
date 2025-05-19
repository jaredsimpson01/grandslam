import { Link } from "react-router-dom";
import "../css/Footer.css";
import logo from "../assets/newGreenLogo.png";

const Footer = () => {
  return (
    <div className="footer-main-content">
      <img src={logo} alt="GrandSlam" className="footer-logo" />
      <div className="list-items">
        <div className="column">
          <Link to="/philosophy">
            <h3>Our Investment Philosophy</h3>
          </Link>
          <ul>
            <li>
              <Link to="/philosophy#commitment">Commitment to Giving</Link>
            </li>
            <li>
              <Link to="/philosophy#alternatives">Alternative Investments</Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <Link to="/portfolio">
            <h3>Our Portfolio</h3>
          </Link>

          <ul>
            <li>
              <Link to="/portfolio#real-estate-id">Real Estate</Link>
            </li>
            <li>
              <Link to="/portfolio#private-equity-id">Private Equity</Link>
            </li>
            <li>
              <Link to="/portfolio#private-debt-id">Private Debt</Link>
            </li>
            <li>
              <Link to="/portfolio#hedge-funds-id">Hedge Funds</Link>
            </li>
            <li>
              <Link to="/portfolio#public-equity-id">Public Equity</Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <Link to="/">
            <h3>GrandSlam</h3>
          </Link>
          <ul>
            <li><Link to="/team">
              Our Team
            </Link></li>
            <li><Link to="/contact">
              Contact Us
            </Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
