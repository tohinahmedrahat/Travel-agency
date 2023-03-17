import React from "react";
import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-[#1C231F] text-white ">
        <div>
          <h1 className="text-3xl font-bold uppercase">Travelus</h1>
          <p>
            Travelul LTD.
            <br />
            Providing reliable tech since 2022
          </p>
          <div className="flex items-center  justify-center space-x-4 mt-3">
            <p className="p-2 bg-[#333936] rounded-full hover:bg-[#63ac45] text-[#B1B6B3] hover:text-white duration-200 cursor-pointer">
              <GrFacebookOption className="text-2xl" />
            </p>
            <p className="p-2 bg-[#333936] rounded-full hover:bg-[#63ac45] text-[#B1B6B3] hover:text-white duration-200 cursor-pointer">
              <AiOutlineTwitter className="text-2xl" />
            </p>
            <p className="p-2 bg-[#333936] rounded-full hover:bg-[#63ac45] text-[#B1B6B3] hover:text-white duration-200 cursor-pointer">
              <AiOutlineInstagram className="text-2xl" />
            </p>
            <p className="p-2 bg-[#333936] rounded-full hover:bg-[#63ac45] text-[#B1B6B3] hover:text-white duration-200 cursor-pointer">
              <FaLinkedinIn className="text-2xl" />
            </p>
          </div>
        </div>
        <div>
          <span className="footer-title">Links</span>
          <Link to="/" className="link link-hover text-lg md:text-[17px]">
            Home
          </Link>
          <Link to="/" className="link link-hover text-lg md:text-[17px]">
            Pricing
          </Link>
          <Link to="/" className="link link-hover text-lg md:text-[17px]">
            About us
          </Link>
          <Link to="/" className="link link-hover text-lg md:text-[17px]">
            Features
          </Link>
          <Link to="/" className="link link-hover text-lg md:text-[17px]">
            Blog
          </Link>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link to="/" className="link link-hover text-lg md:text-[17px]">
            Caravan Soler Tent
          </Link>
          <Link to="/" className="link link-hover text-lg md:text-[17px]">
            Family Tent Camping
          </Link>
          <Link to="/" className="link link-hover text-lg md:text-[17px]">
            Classic Tent Camping
          </Link>
          <Link to="/" className="link link-hover text-lg md:text-[17px]">
            Wild Tent Camping
          </Link>
          <Link to="/" className="link link-hover text-lg md:text-[17px]">
            Bell Glamp One
          </Link>
          <Link to="/" className="link link-hover text-lg md:text-[17px]">
            Small Cabin Wood
          </Link>
        </div>
        <div>
          <span className="footer-title">Support</span>
          <Link to="/" className="link link-hover text-lg md:text-[17px]">
            Meet Our Team
          </Link>
          <Link to="/" className="link link-hover text-lg md:text-[17px]">
            Item Support
          </Link>
          <Link to="/" className="link link-hover text-lg md:text-[17px]">
            Contact Foram
          </Link>
          <Link to="/" className="link link-hover text-lg md:text-[17px]">
            Report Abuse
          </Link>
        </div>
      </footer>
      <hr />
      <footer className="footer items-center p-4 bg-[#1C231F] text-white ">
        <div className="items-center grid-flow-col">
          <p>Rainbosoft © 2023 - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <Link>Settings & Privacy</Link>
          <Link>FAQ</Link>
          <Link>Food Menu</Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
