import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { Card, Button, Col, Row, Layout, Form, Input, Modal, notification, Select, Spin } from 'antd';
import { useAuth } from '../../contexts/AuthContext'; 
import { Link } from 'react-router-dom';
import { FaCartPlus, FaShoppingCart, FaRegListAlt   } from 'react-icons/fa';  
import Hero from '../../components/Shop/Hero';
import { toast } from 'react-toastify';



const { Content } = Layout;

const BuyerDashboard = () => {
  const [activeSection, setActiveSection] = useState('allProducts');
  const [isSpin, setSpin] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [whislist, setwhislist] = useState(JSON.parse(localStorage.getItem('whislist')) || []);
  const [orders, setOrders] = useState([]);
  const { currentUser, signOut } = useAuth();
  const [isOrderModalVisible, setIsOrderModalVisible] = useState(false);
  const [orderDetails, setOrderDetails] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  

  const fetchProducts = async () => {
    setSpin(true);
    try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const fetchedProducts = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
        const categorySet = new Set(fetchedProducts.map(product => product.category));
        setCategories(Array.from(categorySet));
        setSpin(false);
      } catch (error) {
        notification.error({
          message: 'Error',
          description: `Error fetching products: ${error.message}`,
        }) 
      }
    };
    
    useEffect(() => {
      fetchProducts();
    }, []);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);

  useEffect(() => {
    const filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, products]);

  const handleOrderModalOpen = (product) => {
    if (!currentUser) {
      notification.error({
        message: 'Error',
        description: 'You must be logged in to place an order.',
      });
      return;
    }

    setOrderDetails({
      cartItems: product ? [product] : [...cart],
      total: product ? product.price : cart.reduce((acc, item) => acc + item.price, 0),
      product,
    });
    setIsOrderModalVisible(true);
  };

  const handleOrder = async (values) => {
    if (!currentUser) {
      notification.error({
        message: 'Error',
        description: 'You must be logged in to place an order.',
      });
      return;
    }

    try {
      const batchOrders = orderDetails.cartItems.map(async (item) => {
        if (!item.sellerEmail) {
          item.sellerEmail = '';
        }

        await addDoc(collection(db, 'orders'), {
          ...item,
          buyerId: currentUser.uid,
          buyerEmail: currentUser.email,
          sellerEmail: item.sellerEmail,
          productName: item.name,
          productPrice: item.price,
          productImage: item.image,
          ...values,
          timestamp: new Date(),
        });
      });

      await Promise.all(batchOrders);

      notification.success({
        message: 'Order Placed',
        description: 'Your order has been placed successfully.',
      });

      setCart([]);
      localStorage.setItem('cart', JSON.stringify([]));
      setActiveSection('myOrders');
      fetchOrders();
      setIsOrderModalVisible(false);
    } catch (error) {
      notification.error({
        message: 'Error',
        description: `Error placing order: ${error.message}`,
      });
    }
  };

  const fetchOrders = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'orders'));
      setOrders(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      notification.error({
        message: 'Error',
        description: `Error fetching orders: ${error.message}`,
      });
    }
  };

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success(`${product.name} has been added to your cart.`);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    notification.info({
      message: 'Item Removed',
      description: 'The item has been removed from your cart.',
    });
  };

  const handleAddToWhislist = (product) => {
    const updatedCart = [...whislist, product];
    setwhislist(updatedCart);
    localStorage.setItem('whislist', JSON.stringify(updatedCart));
    toast.success(`${product.name} has been added to your whislist.`);
  };

  // const handleRemoveFromCart = (index) => {
  //   const updatedCart = cart.filter((_, i) => i !== index);
  //   setCart(updatedCart);
  //   localStorage.setItem('cart', JSON.stringify(updatedCart));
  //   notification.info({
  //     message: 'Item Removed',
  //     description: 'The item has been removed from your cart.',
  //   });
  // };

 
  const handleCancelOrder = async (orderId) => {
    try {
      await deleteDoc(doc(db, 'orders', orderId));
      notification.success({
        message: 'Order Canceled',
        description: 'Your order has been canceled successfully.',
      });
      fetchOrders();
    } catch (error) {
      notification.error({
        message: 'Error',
        description: `Error canceling order: ${error.message}`,
      });
    }
  };

  // const handleAddToWhislist =()=>{

  // }
  const renderProductList = () => (
    <>
    <div style={{
    width: '100%',
    margin: '20px auto',
    padding: '20px',
   
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}}
>
    <Input
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '16px', width: '100%' }}
    />
    <Select
        placeholder="Select category"
        onChange={setSelectedCategory}
        style={{ width: '100%', marginBottom: '16px' }}
    >
        <Select.Option value="">All Categories</Select.Option>
        {categories.map(category => (
            <Select.Option key={category} value={category}>{category}</Select.Option>
        ))}
    </Select>
</div>


<Spin size='large' tip="Fetching Product" spinning={isSpin}>
        
<Row gutter={[16, 24]}>
  {filteredProducts.slice(0,12).map((product) => (
    <Col xs={24} sm={12} md={8} lg={8} xl={8} key={product.id}> 
      <Card
        hoverable cover={product.image ? (
          <Link to={`/singleProduct/${product.id}`}>
          <img
            alt={product.name}
            src={product.image}
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />
          </Link>
        ) : null}
        actions={[
          
          <>
          <Button 
            type="primary" 
            onClick={() => handleAddToCart(product)} 
            style={{  borderColor: 'green' }}
          >
            <FaCartPlus/> Cart
          </Button>,
          <Button type="default" onClick={() => handleAddToWhislist(product)} className='whislist' style={{marginRight: "20px", marginLeft: "20px"}}> Whislist</Button>
          <Button type="default" onClick={() => handleOrderModalOpen(product)} >Order</Button>
          </>
          
        ]}
        style={{ 
          padding: '16px', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          marginBottom: '24px' 
        }}
      >
        <Card.Meta title={product.name} className='text-center'/>
        <Card.Meta 
            className="mt-2" description={` ${product.description.substring(0,120)}... `}/>
        <p className="product-price" style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '8px', textAlign: "center" }}>${product.price}</p>
      </Card>
    </Col>
  ))}
</Row>
</Spin>

    </>
  );

  const renderCart = () => (
    <div style={{ textAlign: 'center' }}>
      <Button type="primary" style={{ marginBottom: '16px', backgroundColor: 'green', borderColor: 'green' }} onClick={() => handleOrderModalOpen()}>
        Checkout
      </Button>
  
      {cart.length === 0 ? (
        <div style={{ marginTop: '50px' }}>
          <FaShoppingCart style={{ fontSize: '50px', color: 'green' }} />
          <p style={{ fontSize: '18px', color: 'green' }}>Your cart is empty</p>
        </div>
      ) : (
        <Row className="g-4">
          {cart.map((item, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card
                cover={item.image ? (
                  <img
                    alt={item.name}
                    src={item.image}
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  />
                ) : null}
                actions={[
                  <Button type="danger" onClick={() => handleRemoveFromCart(index)} style={{ backgroundColor: 'red', borderColor: 'red' }}>Remove</Button>
                ]}
                style={{ padding: '16px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', marginBottom: '16px' }}
              >
                <Card.Meta title={`Item ${index + 1}: ${item.name}`} description={`Price: $${item.price}`} />
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );

  const renderOrders = () => (
    <div style={{ textAlign: 'center' }}>
      <h2>My Orders</h2>
      {orders.filter(order => order.buyerId === currentUser?.uid).length === 0 ? (
        <div style={{ marginTop: '50px' }}>
          <FaRegListAlt style={{ fontSize: '50px', color: 'green' }} />
          <p style={{ fontSize: '18px', color: 'green' }}>You have no orders yet</p>
        </div>
      ) : (
        <Row gutter={16}>
          {orders
            .filter(order => order.buyerId === currentUser?.uid)
            .map(order => (
              <Col xs={24} sm={12} lg={8} key={order.id}>
                <Card
                  cover={order.productImage ? (
                    <img
                      alt={order.productName}
                      src={order.productImage}
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    />
                  ) : null}
                  actions={[
                    <Button type="danger" onClick={() => handleCancelOrder(order.id)} style={{ backgroundColor: 'red', borderColor: 'red' }}>
                      Cancel Order
                    </Button>
                  ]}
                  style={{ padding: '16px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', marginBottom: '16px' }}
                >
                  <Card.Meta
                    title={`Order ID: ${order.id}`}
                    description={`Product: ${order.productName} | Price: $${order.productPrice}`}
                  />
                </Card>
              </Col>
            ))}
        </Row>
      )}
    </div>
  );

  return (
    <Layout>
      <Hero/>
      <Layout style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <Layout style={{ flex: 1, width: '100%', maxWidth: '1200px' }}>
          <Content className="p-4">
            {activeSection === 'allProducts' && renderProductList()}
            {activeSection === 'cart' && renderCart()}
            {activeSection === 'myOrders' && renderOrders()}
          </Content>
        </Layout>
      </Layout>

      <Modal
        title="Order Details"
        visible={isOrderModalVisible}
        onCancel={() => setIsOrderModalVisible(false)}
        footer={null}
      >
        <Form onFinish={handleOrder}>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please input your address!' }]}>
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Payment Method" name="paymentMethod" rules={[{ required: true, message: 'Please select a payment method!' }]}>
            <Select placeholder="Select payment method">
              <Select.Option value="creditCard">Credit Card</Select.Option>
              <Select.Option value="debitCard">Debit Card</Select.Option>
              <Select.Option value="paypal">PayPal</Select.Option>
              <Select.Option value="bankTransfer">Bank Transfer</Select.Option>
              <Select.Option value="cashOnDelivery">Cash on Delivery</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ backgroundColor: 'green', borderColor: 'green' }}>Place Order</Button>
          </Form.Item>
        </Form>
        <div>
          {orderDetails.cartItems?.map((item, index) => (
            <div key={index} className="order-item">
              <img alt={item.name} src={item.image} className="order-item-image" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
              <p>{item.name}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
          <p>Total: ${orderDetails.total}</p>
        </div>
      </Modal>
    </Layout>
  );
};

export default BuyerDashboard;
