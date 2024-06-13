import React from "react";
import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link legacyBehavior href={href} passHref>
      <a className="text-white group focus:outline-none relative py-2">
        {title}
        <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left shadow-[0_0_10px_2px_rgba(30,144,255,0.75)]"></span>
      </a>
    </Link>
  );
};

export default NavLink;
