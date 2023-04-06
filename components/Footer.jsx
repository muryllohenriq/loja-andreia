import React from 'react';
import { AiFillInstagram, AiOutlineWhatsApp } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 Andreia Duarte Modas</p>
      <p className='icons'>
        <a href="">
          <AiFillInstagram />
        </a>
        <a href="">
          <AiOutlineWhatsApp />
        </a>
      </p>
    </div>
  )
}

export default Footer