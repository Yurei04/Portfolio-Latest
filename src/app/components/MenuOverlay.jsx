import React from "react";
import Link from "next/link";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <Link legacyBehavior href={link.path}>
           {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
