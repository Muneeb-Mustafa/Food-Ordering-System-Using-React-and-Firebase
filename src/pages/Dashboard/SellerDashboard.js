import React, { useState } from "react";  
import { useNavigate } from "react-router-dom"; 
import AddProduct from "./AddProduct";
import ManageProducts from "./ManageProducts";
import Orders from "./Orders";
import Earnings from "./Earnings";

const SellerDashboard = () => { 
  const [activeSection] = useState("addProduct"); 

  return (
    <div>   
      {activeSection === "addProduct" && <AddProduct />}
      {activeSection === "manageProducts" && <ManageProducts />}
      {activeSection === "orders" && <Orders />}
      {activeSection === "earnings" && <Earnings />}
    </div>
  );
};

export default SellerDashboard;
