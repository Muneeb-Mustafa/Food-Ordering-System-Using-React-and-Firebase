import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Testimonial = () => {
  return (
    <MDBContainer className="my-5">
      <MDBCarousel>
        {/* First Slide */}
        <MDBCarouselItem className="active">
          <MDBRow>
            {/* First Testimonial */}
            <MDBCol md="4">
              <div className="testimonial text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(30).webp"
                  alt="avatar"
                  className="rounded-circle mb-4"
                  style={{ width: "100px" }}
                />
                <h5 className="mb-3">Samantha B.</h5>
                <p>Food Enthusiast</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  The flavors are incredible! Every dish I’ve tried has been a culinary delight. I can’t get enough!
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="far fa-star fa-sm"></i></li>
                </ul>
              </div>
            </MDBCol>

            {/* Second Testimonial */}
            <MDBCol md="4">
              <div className="testimonial text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                  alt="avatar"
                  className="rounded-circle mb-4"
                  style={{ width: "100px" }}
                />
                <h5 className="mb-3">John D.</h5>
                <p>Chef</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  I love how fresh and vibrant the ingredients are. Each meal feels like a work of art on my plate!
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="far fa-star fa-sm"></i></li>
                  <li><i className="far fa-star fa-sm"></i></li>
                </ul>
              </div>
            </MDBCol>

            {/* Third Testimonial */}
            <MDBCol md="4">
              <div className="testimonial text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                  alt="avatar"
                  className="rounded-circle mb-4"
                  style={{ width: "100px" }}
                />
                <h5 className="mb-3">Lisa C.</h5>
                <p>Food Critic</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  A feast for the senses! Every meal is bursting with flavor and creativity. Absolutely love it!
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                </ul>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCarouselItem>

        {/* Second Slide */}
        <MDBCarouselItem>
          <MDBRow>
            {/* Fourth Testimonial */}
            <MDBCol md="4">
              <div className="testimonial text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(33).webp"
                  alt="avatar"
                  className="rounded-circle mb-4"
                  style={{ width: "100px" }}
                />
                <h5 className="mb-3">Mark T.</h5>
                <p>Nutritionist</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  The balance of nutrition and flavor is fantastic! It's the perfect choice for healthy eating without compromising taste.
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="far fa-star fa-sm"></i></li>
                </ul>
              </div>
            </MDBCol>

            {/* Fifth Testimonial */}
            <MDBCol md="4">
              <div className="testimonial text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                  alt="avatar"
                  className="rounded-circle mb-4"
                  style={{ width: "100px" }}
                />
                <h5 className="mb-3">Alice R.</h5>
                <p>Culinary Blogger</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  I always look forward to my deliveries! Each meal is a delightful surprise that makes my week so much better.
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="far fa-star fa-sm"></i></li>
                  <li><i className="far fa-star fa-sm"></i></li>
                  <li><i className="far fa-star fa-sm"></i></li>
                </ul>
              </div>
            </MDBCol>

            {/* Sixth Testimonial */}
            <MDBCol md="4">
              <div className="testimonial text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                  alt="avatar"
                  className="rounded-circle mb-4"
                  style={{ width: "100px" }}
                />
                <h5 className="mb-3">James K.</h5>
                <p>Home Cook</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  Gomeal has inspired me to cook more creatively at home. The meals are not just tasty, but also fun to prepare!
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="far fa-star fa-sm"></i></li>
                  <li><i className="far fa-star fa-sm"></i></li>
                </ul>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCarouselItem>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default Testimonial;
