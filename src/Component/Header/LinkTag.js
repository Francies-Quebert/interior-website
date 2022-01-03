import React from "react";
import { Link } from "react-router-dom";

const LinkTag = ({ link, text }) => {
  return (
    <li className="h-[2.75rem] leading-[2.75rem] cursor-pointer hover:text-[#fff]">
      <Link to={link}> {text}</Link>
    </li>
  );
};

export default LinkTag;
