"use client";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [currentDateTime, setCurrentDateTime] = useState(``);
  useEffect(() => {
    const upDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      };
      setCurrentDateTime(
        now.toLocaleDateString("en-US", options) +
          " " +
          now.toLocaleTimeString("en-US", { hour12: false })
      );
    };
    upDateTime();
    const interValId = setInterval(upDateTime, 1000);
    return () => clearInterval(interValId);
  }, []);

  return (
    <>
      <header className="text-gray-400 shadow-lg">
        <div className="mx-auto flex flex-wrap flex-col md:flex-row p-2 items-center container">
          <div className="flex-1 text-black">
            <span>{currentDateTime}</span>
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-black justify-center">
            <Link
              href={"http://localhost:3000/"}
              className="mr-5 hover:text-red-700 transition duration-300 transform hover:scale-105"
            >
              Home
            </Link>
            <Link
              href={"http://localhost:3000/about"}
              className="mr-5 hover:text-red-700 transition duration-300 transform hover:scale-105"
            >
              About
            </Link>
            <Link
              href={"http://localhost:3000/blog"}
              className="mr-5 hover:text-red-700 transition duration-300 transform hover:scale-105"
            >
              Blog
            </Link>
            <Link
              href={"http://localhost:3000/contact"}
              className="mr-5 hover:text-red-700 transition duration-300 transform hover:scale-105 capitalize"
            >
              contact
            </Link>
          </nav>
          <button className="capitalize inline-flex items-center bg-blue-700 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 text-white mt-4 md:mt-0 rounded transition-colors duration-300">
            Youtube
            <FaLongArrowAltRight className="flex items-center justify-center space-x-6 ml-1" size={16}/>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
