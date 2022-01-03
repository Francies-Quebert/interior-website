import React from "react";
import { Link } from "react-router-dom";
import LinkTag from "./Header/LinkTag";
const Header = () => {
  return (
    <div>
      <div className="bg-black/[.8] max-h-[2.8rem] min-h-[2.75rem] ">
        <ul className="text-white/[.875] text-xs font-light justify-center h-[2.75rem] flex space-x-[2.2rem]">
          <LinkTag link="/" text="Home" />
          <LinkTag link="/about" text="About Me" />
          <LinkTag link="/about" text="Blog" />
          <LinkTag link="/about" text="Contact Us" />
        </ul>
      </div>
    </div>
  );
};

export default Header;
