import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">

      <a href="#home" className="brand">

        <div className="brand-logo">
          🌿
        </div>

        <div className="brand-name">
          <strong>CarbonTrack</strong>
          <span>Carbon Footprint Monitoring</span>
        </div>

      </a>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact Us</a>
      </nav>

      <a href="/register" className="header-register">
        Register
      </a>

    </header>
  );
}

export default Header;