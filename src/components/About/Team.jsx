import React from "react";
import team1 from '../../../src/Images/team1.jpg';
import team2 from '../../../src/Images/team2.jpg';
import team3 from '../../../src/Images/team3.jpg';

const Team = () => {
  return (
    <div className="container">
      <div className="text-center team mb-5">
        <h1 style={{ fontFamily: "Playfair Display", fontSize: "50px" }}>
          We Pride Ourselves On Having A <br /> Team Of Highly Skilled
        </h1>
        <p>Preorder now to receive exclusive deals & gifts</p>
      </div>

      <div className="row">
  <div className="col-12 col-sm-6 col-md-4 team-member text-center mb-4">
    <div className="card">
      <img
        src={team1}
        className="card-img-top rounded"
        alt="Team Member 1"
      />
      <div className="card-body">
        <h4 className="card-title" style={{ fontFamily: "Playfair Display" }}>John Doe</h4>
        <p className="card-text">Founder, Chief Creative</p>
      </div>
    </div>
  </div>

  <div className="col-12 col-sm-6 col-md-4 team-member text-center mb-4">
    <div className="card">
      <img
        src={team2}
        className="card-img-top rounded"
        alt="Team Member 2"
      />
      <div className="card-body">
        <h4 className="card-title" style={{ fontFamily: "Playfair Display" }}>Valeriia Nadopta</h4>
        <p className="card-text">Founder, COO</p>
      </div>
    </div>
  </div>

  <div className="col-12 col-sm-6 col-md-4 team-member text-center mb-4">
    <div className="card">
      <img
        src={team3}
        className="card-img-top rounded"
        alt="Team Member 3"
      />
      <div className="card-body">
        <h4 className="card-title" style={{ fontFamily: "Playfair Display" }}>Jennifer C</h4>
        <p className="card-text">Founder, CEO</p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Team;
