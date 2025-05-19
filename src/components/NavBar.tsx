import { Link, NavLink } from "react-router-dom";
import "../css/NavBar.css";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/newWhiteLogo.png";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <Link to="/" className="logo">
        <img src={logo} alt="GrandSlam" />
      </Link>

      <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/philosophy" onClick={closeMenu}>
          Philosophy
        </NavLink>

        <div className="dropdown">
          <NavLink to="/portfolio" onClick={closeMenu}>
            Portfolio <span className="arrow">▼</span>
          </NavLink>
          <ul className="dropdown-menu">
            <li>
              <Link to="/portfolio#real-estate-id" onClick={closeMenu}>
                Real Estate
              </Link>
            </li>
            <li>
              <Link to="/portfolio#private-equity-id" onClick={closeMenu}>
                Private Equity
              </Link>
            </li>
            <li>
              <Link to="/portfolio#private-debt-id" onClick={closeMenu}>
                Private Debt
              </Link>
            </li>
            <li>
              <Link to="/portfolio#hedge-funds-id" onClick={closeMenu}>
                Hedge Funds
              </Link>
            </li>
            <li>
              <Link to="/portfolio#public-equity-id" onClick={closeMenu}>
                Public Equity
              </Link>
            </li>
          </ul>
        </div>

        <NavLink to="/team" onClick={closeMenu}>
          Team
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default NavBar;
