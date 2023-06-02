import "./CartItem.scss";
import React, { useContext } from "react";
import { Context } from "../../../utils/context";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-3.webp";
const CartItem = () => {
  return (
    <>
      <div className='cart-products'>
        <div className='cart-product'>
          <div className='image-container'>
            <img src={prod} alt='' />
          </div>
          <div className='prod-details'>
            <span className='name'>Product Name</span>
            <MdClose className='close-btn' />
            <div className='quantity-buttons'>
              <span>-</span>
              <span>5</span>
              <span>+</span>
            </div>
            <div className='text'>
              <span>3</span>
              <span>x</span>
              <span>&#8377;4500</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
