import React from "react";
import "./Product.scss";
import { useNavigate } from "react-router-dom";

const Product = ({ id, data }) => {
  const url = process.env.REACT_APP_STRIPE_APP_DEV_URL;
  const navigate = useNavigate();

  return (
    <>
      <div className='product-card' onClick={() => navigate(`/product/` + id)}>
        <div className='thumbnail'>
          <img src={url + data?.img?.data[0]?.attributes?.url} />
        </div>

        <div className='product-details'>
          <span className='name'>{data?.title}</span>
          <span className='price'>&#8377;{data?.price}</span>
        </div>
      </div>
    </>
  );
};

export default Product;
