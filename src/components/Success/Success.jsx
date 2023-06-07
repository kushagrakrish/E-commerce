import React from "react";
import "./SuccessPage.css";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();
  return (
    <div className='success-page'>
      <h2>Your order is successfully placed!</h2>
      <p>Thank you for shopping.</p>
      <button onClick={() => navigate(`/`)} className='continue-shopping-btn'>
        Continue Shopping
      </button>
    </div>
  );
};

export default SuccessPage;
