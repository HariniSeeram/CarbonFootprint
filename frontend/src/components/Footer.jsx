function Footer() {
  return (
    <footer id="contact" className="footer">

      <div className="footer-container">

        <div className="footer-about">

          <div className="footer-brand">
            <span>🌿</span>
            <h3>CarbonTrack</h3>
          </div>

          <p>
            A Carbon Footprint Monitoring System designed to help users
            understand their environmental impact and develop sustainable
            habits.
          </p>

        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>

          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#register">Register</a>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>

          <p>Email: info@carbontrack.com</p>
          <p>India</p>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>

          <p>Carbon Tracking</p>
          <p>Sustainability</p>
          <p>Environmental Awareness</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 CarbonTrack. All Rights Reserved.</p>
        <p>Building awareness for a sustainable future.</p>
      </div>

    </footer>
  );
}

export default Footer;