import React from "react";
import "./Footer.css";

const Footer = () => (
  <div className="footer">
    <div className="footer-content">
      <div className="about">
        <div className="footer-title">
          About
        </div>
        <a target="_blank" href="/#" className="footer-link">
          Sigma Technology
        </a>
        <br />
        <a target="_blank" href="/#" className="footer-link">
          Legal
        </a>
        <br />
        <a target="_black" href="/#" className="footer-link">
          Contact
        </a>
      </div>
      <div className="websites">
        <div className="footer-title">
          Websites
        </div>
        <a target="_blank" href="/#" className="footer-link">
          Amazon
        </a>
        <br />
        <a target="_black" href="/#" className="footer-link">
          Ebay
        </a>
        <br />
        <a target="_black" href="/#" className="footer-link">
          Alibaba
        </a>
        <br />
        <a target="_black" href="/#" className="footer-link">
          AliExpress
        </a>
      </div>
    </div>
  </div>
);

export default Footer;