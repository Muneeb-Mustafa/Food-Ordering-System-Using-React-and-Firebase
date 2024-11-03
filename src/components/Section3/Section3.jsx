import React from "react";
import { Link } from "react-router-dom";
import Burger from "../../Images/Burger.jpg"; // Keep the image if it fits

const Section3 = () => {
  return (
    <div className="container sect-3">
      <div className="row">
        <div className="col-md-6">
          <img
            src={Burger}
            alt="Delicious Burger"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="sec-3 col-md-6 d-flex justify-content-center align-items-center flex-column align-items-md-start" style={{paddingLeft: '20px'}}>
          <h3 className="mb-3">Delicious Meals Await!</h3>
          <p className="mt-3 mb-4">
            Satisfy your cravings with our diverse menu, featuring fresh and flavorful dishes made just for you. 
            Order now to experience the joy of delicious food delivered right to your door. 
            Don’t wait—dive into our seasonal specials and enjoy exclusive discounts today!
          </p>
          <Link to="/about">
            <button className="btn3">About Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section3;
