import React from "react";
import { Link } from "react-router-dom";
import Burger from "../../Images/Burger.jpg"; 

const Section2 = () => {
  return (
    <div className="container sect-3">
      <div className="row">
        <div className="col-md-6 burger">
          <img
            src={Burger}
            alt="Delicious Burger"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="sec-3 col-md-6 d-flex justify-content-center align-items-center flex-column align-items-md-start" style={{paddingLeft: "20px"}}>
          <h3 className="mb-3">Exciting Flavors Are Here!</h3>
          <p className="mt-3 mb-4">
          Treat yourself to our vibrant menu filled with fresh, delectable dishes crafted just for you. Place your order now and enjoy the delight of having delicious meals delivered straight to your doorstep. Don’t miss out—explore our seasonal specials and take advantage of exclusive discounts today!
          </p>
          <Link to="/contact">
            <button className="btn3">Contact </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section2;
