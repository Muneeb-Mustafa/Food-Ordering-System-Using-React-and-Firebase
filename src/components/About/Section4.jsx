import React from "react";
import { Link } from "react-router-dom";
import imgslider6 from '../../../src/Images/imgslider6.jpg';


const Section4 = () => {
  return (
    <div
      className="container section4"
      style={{ paddingTop: "50px", paddingBottom: "100px" }}
    >
      <div className="row">
        <div className="mission col-md-6 d-flex justify-content-center align-items-center flex-column align-items-md-start">
          <h3
            style={{ fontFamily: "Playfair-Display", fontSize: "50px" }}
            className="mb-3"
          >
            Our Mission
          </h3>
          <p 
            className="mt-3 mb-4"
          >
            Experience a complexion-perfecting natural foundation infused with antioxidant-rich superfruits, vitamins, and skin-nourishing nutrients. Our creamy liquid formula sets to a pristine matte finish, leaving your skin soft and velvety smooth. Crafted with clean, non-toxic ingredients, our products are designed for everyone.
            <br/><br/>
            Searching for something special? Treat yourself or a loved one to our clean beauty gift sets. They’re pure, indulgent, and perfect for pampering!
          </p>
          <Link to="">
          <button className="btn1">Order Now</button>
          </Link>
        </div>
        <div className="col-md-6">
          <img
            src={imgslider6}
            alt="Spring Winter 2022"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Section4;
