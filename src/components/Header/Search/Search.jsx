import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import { useNavigate } from "react-router-dom";

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
      </div>
    </>
  );
};

export default Search;
