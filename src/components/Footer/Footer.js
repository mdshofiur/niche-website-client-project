import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillGooglePlusCircle } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="mt-5" style={{ backgroundColor: '#F9F9FB' }} >
             
              <div className="d-flex justify-content-evenly p-5 ">
              <div className="fs-3 fw-bold ">ToolsMaster</div>
              <div className="pt-2">
                <p>© 2020 All Rights Reserved. Developed By Assignment-12</p>
              </div>
              <div className=" fs-3 d-flex" style={{ color: 'tomato' }}>
                <div className="ps-2" ><BsFacebook /></div>
                <div className="ps-2"><AiFillTwitterCircle /></div>
                <div className="ps-2"><AiOutlineInstagram /></div>
                <div className="ps-2"> <AiFillGooglePlusCircle /></div>
                <div className="ps-2"> <BsPinterest /></div>
              </div>
              </div>
              
        </div>
    );
};

export default Footer;
