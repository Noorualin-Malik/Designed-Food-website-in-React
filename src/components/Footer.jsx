import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <>
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-3 col-sm-2">
          <h5>Food For All</h5>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
        </div>
         <div className="col-lg-3 col-sm-2">
          <h5>Menu</h5>
          <p>Shop</p>
          <p>About</p>
          <p>Journal</p>
          <p>Contact</p>
        </div>
        <div className="col-lg-3 col-sm-2">
          <h5>Help</h5>
          <p>Shipping Information</p>
          <p>Returns and Exchange</p>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
        </div>
        <div className="col-lg-3 col-sm-2">
          <h5>Have a question?</h5>
          <p><FaLocationDot />	203 Fake St. Mountain View, San Francisco, California, USA</p>
          <p><FaPhoneAlt />  +921234567</p>
          <p><MdEmail />  info@abcgmail.com</p>
        </div>
      </div>
      <h4><FaTwitter /> <FaFacebook /> <AiFillInstagram /></h4>
      <div>
        <br />
      <p>Copyright ©2025 All rights reserved</p></div>
    </div>
    </>
  )
}

export default Footer
