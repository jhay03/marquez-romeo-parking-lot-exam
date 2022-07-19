import React from "react";
const Footer = () => {
  return (
    <div className="footer-copyright text-center py-3 bg-dark">
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="https://romeomarquez-portfolio.netlify.app/">
        Romeo Marquez Jr.
      </a>
    </div>
  );
};

export default Footer;
