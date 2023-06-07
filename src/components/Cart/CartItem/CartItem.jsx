import "./CartItem.scss";
import React, { useContext } from "react";
import { Context } from "../../../utils/context";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-3.webp";

const CartItem = () => {
  const url = process.env.REACT_APP_STRIPE_APP_DEV_URL;
  const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
    useContext(Context);
  return (
    <>
      <div className='cart-products'>
        {cartItems?.map((item) => (
          <div key={item.id} className='cart-product'>
            <div className='image-container'>
              <img
                src={url + item?.attributes?.img?.data[0]?.attributes?.url}
                alt=''
              />
            </div>
            <div className='prod-details'>
              <span className='name'>{item.attributes.title}</span>
              <MdClose
                className='close-btn'
                onClick={() => handleRemoveFromCart(item)}
              />
              <div className='quantity-buttons'>
                <span onClick={() => handleCartProductQuantity("dec", item)}>
                  -
                </span>
                <span>{item?.attributes?.quantity}</span>
                <span onClick={() => handleCartProductQuantity("inc", item)}>
                  +
                </span>
              </div>
              <div className='text'>
                <span>{item?.attributes?.quantity}</span>
                <span>x</span>
                <span>
                  &#8377;{item?.attributes?.price * item?.attributes?.quantity}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartItem;
