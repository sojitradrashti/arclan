import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div
        className="footer-content"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="footer-section">
          <h1 className="logo">Arclan</h1>
          <p>
            High-level experience in web design and <br />
            development knowledge, producing quality work.
          </p>
          <hr />
          <p>© 2024 All Rights Reserved</p>
        </div>
        <div className="section-2" style={{ display: "flex", justifyContent:"center" }}>
          <div className="footer-section">
            <h2>Follow us</h2>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-pinterest"></i>
              <i className="fab fa-instagram"></i>
            </div>
            <p>Call us</p>
            <p>+1 800 854-36-80</p>
          </div>

          <div
            className="footer-section"
            style={{ textDecoration: "none", listStyleType: "none" }}
          >
            <h2>Customer Care</h2>
            <ul>
              <li>About Us</li>
              <li>Delivery & Returns</li>
              <li>Terms & Conditions</li>
              <li>Product Return</li>
              <li>Wholesale Policy</li>
            </ul>
          </div>

          <div className="footer-section">
            <h2>Quick Shop</h2>
            <ul>
              <li>Pagination</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
              <li>Accessories</li>
              <li>Terms of Use</li>
            </ul>
          </div>

          <div className="footer-section">
            <h2>Company</h2>
            <ul>
              <li>Help Center</li>
              <li>Address Store</li>
              <li>Privacy Policy</li>
              <li>Receivers</li>
              <li>Store Locations</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
