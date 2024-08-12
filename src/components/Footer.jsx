import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="footer2">
          <h1>Arclan</h1>
          <p>
            Hign level experience in web design and
            <br />
            development knowledge, producing quality work.
          </p>
        </div>
        <div className="footer3">
            <h1>Follow us</h1>
            <span><CiFacebook /></span>
            <span><FaTelegram /></span>
            <span><FaInstagram /></span>
            <span><FaFigma /></span>
            <p>Call us <br/> +1 800 854-36-80</p>
        </div>
        <div className="footer4"></div>
        <div className="footer5"></div>
        <div className="footer6"></div>
      </div>
    </div>
  );
};

export default Footer;
