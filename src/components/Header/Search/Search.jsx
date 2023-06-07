import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import useFetch from "../../../hooks/useFetch";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const url = process.env.REACT_APP_STRIPE_APP_DEV_URL;
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  if (!query?.length) {
    data = null;
  }
  return (
    <>
      <div className='search-modal'>
        <div className='form-field'>
          <input
            autoFocus
            type='text'
            placeholder='Search for products'
            value={query}
            onChange={(e) => handleChange(e)}
          />
          <div className='close-btn'>
            <MdClose onClick={() => setShowSearch(!setShowSearch)} />
          </div>
        </div>
        <div className='search-result-content'>
          <div className='search-results'>
            {data?.data?.map((item) => (
              <div
                key={item.id}
                className='search-result-item'
                onClick={() => {
                  navigate(`/product/${item.id}`);
                  setShowSearch(!setShowSearch);
                }}
              >
                <div className='image-container'>
                  <img
                    src={url + item?.attributes?.img?.data[0]?.attributes?.url}
                    alt=''
                  />
                </div>
                <div className='prod-details'>
                  <span className='name'>{item?.attributes.title}</span>
                  <span className='desc'>{item?.attributes.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
