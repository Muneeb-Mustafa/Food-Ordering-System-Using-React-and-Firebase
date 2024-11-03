import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Card, Col, Row, notification } from "antd";
import { Link } from "react-router-dom";
import { db } from "../../firebase/config";

const PopularProducts = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [isSpin, setSpin] = useState(false);

  const fetchProducts = async () => {
    setSpin(true);
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const fetchedProducts = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(fetchedProducts);
      setSpin(false);
    } catch (error) {
      notification.error({
        message: "Error",
        description: `Error fetching products: ${error.message}`,
      });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <main className="text-center mb-5">
      <h1 className="text-dark mb-5 mt-5">Popular Product</h1>
      <div className="productCard">
        <section>
          <div className="container py-2">
            <div className="row justify-content-center">
              {/* Popular Products  */}
              <Row gutter={[16, 24]}>
                {products.slice(0, 3).map((product) => (
                  <Col xs={24} sm={12} md={8} lg={8} xl={8} key={product.id}>
                    <Card
                      hoverable
                      cover={
                        product.image ? (
                          <Link to={`/singleProduct/${product.id}`}>
                            <img
                              alt={product.name}
                              src={product.image}
                              style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                              }}
                            />
                          </Link>
                        ) : null
                      }
                      style={{
                        padding: "16px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        marginBottom: "24px",
                      }}
                    >
                      <Card.Meta
                        title={product.name} 
                      />
                      <Card.Meta 
                      className="mt-2"
                        description={` ${product.description.substring(0,120)}... `}
                      />
                      <p
                        className="product-price"
                        style={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          marginTop: "8px",
                        }}
                      >
                        ${product.price}
                      </p>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </section>
      </div>
      <div className="button">
        <Link to="/shop">
          <button className="btn btn-danger pop_products">View More</button>
        </Link>
      </div>
    </main>
  );
};

export default PopularProducts;
