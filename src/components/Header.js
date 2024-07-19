import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex justify-between px-5 py-7 bg-header">
      <a className="font-bold text-2xl" href="#">
        VS
      </a>
      <nav className="hidden md:block">
        <ul className="flex text-white">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {toggleMenu && (
        <nav className="block md:hidden ">
          <ul
            onClick={() => setToggleMenu(!toggleMenu)}
            className="flex flex-col text-white nav-mobile"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="block md:hidden"
      >
        <Bars3Icon className="h-6 text-white" />
      </button>
    </header>
  );
}
