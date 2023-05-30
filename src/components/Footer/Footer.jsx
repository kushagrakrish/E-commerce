import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const data = [
  {
    title: "Categories",
    list: [
      "Headphone",
      "Smart Watches",
      "Speakers",
      "Wirless Earbuds",
      "Projectors",
    ],
  },
  {
    title: "Pages",
    list: [
      "Home",
      "About",
      "Privacy",
      "Returns",
      "Terms & Conditions",
      "Contact Us",
    ],
  },
];
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='col'>
          <div className='title'>About</div>
          <div className='text'>
            Voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo eaque ipsa quae ab illo.
          </div>
        </div>
        <div className='col'>
          <div className='title'>Contact</div>
          <div className='c-item'>
            <FaLocationArrow />
            <div className='text'>
              Kayaloram Rd, Punnamada, Kottankulangara, Alappuzha, Kerala,
              688006
            </div>
          </div>
          <div className='c-item'>
            <FaMobileAlt />
            <div className='text'>Phone: 0471 272 0261</div>
          </div>
          <div className='c-item'>
            <FaEnvelope />
            <div className='text'>Email: store@jsdev.com</div>
          </div>
        </div>
        {data?.map((item, idx) => (
          <div key={idx} className='col'>
            <div className='title'>{item.title}</div>
            {item?.list.map((item, idx) => (
              <span key={idx} className='text'>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className='bottom-bar'>
        <div className='bottom-bar-content'>
          <span className='text'>
            JSDEVSTORE 2022 CREATED BY JS DEV. PREMIUM E-COMMERCE SOLUTIONS.
          </span>
          <img src={Payment} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
