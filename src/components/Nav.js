import React from "react";

import {
  BiBriefcase,
  BiClipboard,
  BiHomeAlt,
  BiPhone,
  BiUser,
} from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";

import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[30px] flex justify-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            className="cursor-pointer w-[60px] h-[30px] flex justify-center"
          >
            <BiUser />
          </Link>
          <Link
            to="services"
            activeClass="active"
            smooth={true}
            className="cursor-pointer w-[60px] h-[30px] flex justify-center"
          >
            <BiClipboard />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            className="cursor-pointer w-[60px] h-[30px] flex justify-center"
          >
            <BiBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            className="cursor-pointer w-[60px] h-[30px] flex justify-center"
          >
            <BiPhone />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
