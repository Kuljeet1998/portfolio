import React, { FC } from 'react';
import { MdEmail } from "react-icons/md";
import './CopyToClipboardButton.css'
import { FaPhoneAlt } from "react-icons/fa";

export default function CopyToClipboardButton ({ text, icon, type}) {
   const copyToClipboard = () => {
     navigator.clipboard.writeText(text)
       .then(() => {
         alert(`${type} copied to clipboard!`);
       })
       .catch((err) => {
         console.error('Unable to copy text to clipboard:', err);
         alert('Failed to copy text to clipboard.');
       });
   };
   
   if(icon=='email'){
    return (
      <button className='email' onClick={copyToClipboard}>
        <MdEmail />
      </button>
    );
   }
   else if (icon=='phone'){
    return (
      <button className='phone' onClick={copyToClipboard}>
        <FaPhoneAlt />
      </button>
    );
   }

 };
