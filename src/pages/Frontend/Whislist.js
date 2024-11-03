import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import EmptyWishlist from "../../components/EmptyWhislist/EmptyWhislist"; // Assuming you have a similar empty state component
import { message } from 'antd';
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const fetchWishlist = () => {
    try {
      const response = JSON.parse(localStorage.getItem('whislist')) || [];
      setWishlist(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const removeWishlistItem = (id) => {
    const updatedWishlist = wishlist.filter(item => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem('whislist', JSON.stringify(updatedWishlist));
    message.success("Product removed from wishlist successfully");
  };

  return (
    <main className='text-center mt-4'>
      <Container> 
        <Link to="/shop" className="text-body">
          <FaLongArrowAltLeft className="me-2" />
          Continue shopping
        </Link>
        <hr />
        {wishlist.length > 0 ? (
          <Row>
            {wishlist.map((item, index) => (
              <Col xs={12} md={6} key={index} className="mb-3"> {/* Use xs for full width on small devices */}
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
                      <div className="flex-grow-1">
                        <img
                          src={item.image} 
                          className="img-fluid" // Ensures the image is responsive
                          alt={item.name}
                          style={{
                            height: "auto", // Let height auto adjust for full responsiveness
                            maxWidth: "100%", // Image takes full width
                          }}
                        />
                        <h5 className="mt-2">{item.name}</h5>
                        <p className="small mb-0">
                          {item.description && typeof item.description === 'string'
                            ? item.description.substring(0, 120)
                            : "No description available"}
                        </p>
                      </div>
                      <div className="text-end mt-2 mt-md-0"> {/* Add margin on top for small devices */}
                        <a className="text-muted" style={{ cursor: "pointer" }} onClick={() => removeWishlistItem(item.id)}>
                          <i className="fas fa-times"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <EmptyWishlist /> 
        )}
      </Container>
    </main>
  );
};

export default Wishlist;
