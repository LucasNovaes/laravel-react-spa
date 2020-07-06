import React from "react";
import image from "../img/rodape-desktop.jpg";

const Footer = () => {
  return (
  <div id="footer" className="p-4" style={{backgroundImage: `url(${image}`, backgroundRepeat: 'no-repeat' }}>
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <p className="lead text-white-50">Fulano Beltrano de Oliveira</p>
          <p className="lead text-white-50">fulanobos@gmail.com</p>
          <p className="lead text-white-50">(31) 9 9666-1111</p>
          <p className="lead text-white-50">Faculdade de Belo Horizonte</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Footer;