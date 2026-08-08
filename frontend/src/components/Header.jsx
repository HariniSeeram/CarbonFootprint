import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">

      <div className="header-container">

        <a href="#home" className="logo">

          <div className="logo-icon">🌿</div>

          <div className="logo-text">
            <strong>CarbonTrack</strong>
            <small>Carbon Footprint Monitoring</small>
          </div>

        </a>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <div className="header-buttons">

          <Link to="/login" className="header-login">
            Login
          </Link>

          <Link to="/register" className="header-register-btn">
            Register
          </Link>

        </div>

      </div>

    </header>
  );
}

export default Header;
