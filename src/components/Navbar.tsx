"use client";
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
          "" +
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
        </div>
      </header>
    </>
  );
};

export default Navbar;
