import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
import prod from "../../../assets/products/earbuds-prod-1.webp";
const Search = ({ setShowSearch }) => {
  return (
    <>
      <div className='search-modal'>
        <div className='form-field'>
          <input type='text' autoFocus placeholder='Search for products' />
          <div className='close-btn'>
            <MdClose onClick={() => setShowSearch(!setShowSearch)} />
          </div>
        </div>
        <div className='search-result-content'>
          <div className='search-results'>
            <div className='search-result-item'>
              <div className='image-container'>
                <img src={prod} alt='' />
              </div>
              <div className='prod-details'>
                <span className='name'>Product Name</span>
                <span className='desc'>Product Description</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
