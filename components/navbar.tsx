"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="mx-auto flex h-full items-center justify-between text-white">
        <h1 className="navbar-title">
          Zer
          <span className="nav-spin-wrap">
            <span className="nav-spin" />
          </span>
          jin Anime
        </h1>
        <ul className="flex items-center justify-center space-x-4">
          <li className="navbar-icon">
            <Image className="bg-" fill src="tistory-mark.svg" alt="github" />
          </li>
          <li className="navbar-icon">
            <Image fill src="github-mark.svg" alt="github" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
