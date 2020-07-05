import React from "react";
import image from "../img/index-image.jpg";

const Footer = () => {
  return (
  <div id="footer" style={{backgroundImage: `url(${image}`, backgroundRepeat: 'no-repeat' }}>
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <h1 className="font-weight-light mt-4 text-white">Sticky Footer using Flexbox</h1>
          <p className="lead text-white-50">Use just two Bootstrap 4 utility classes and three custom CSS rules and you will have a flexbox enabled sticky footer for your website!</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Footer;