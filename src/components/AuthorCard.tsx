import React from "react";

const AuthorCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <img
          src="/image/9.jpg"
          alt="Author Image 1"
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-400"
        />
        <div>
          <h3 className="text-xl font-bold text-gray-800">M. Bilal Hussain</h3>
          <p className="text-slate-500">Frontend Developer | SQL Enthusiast</p>
        </div>
      </div>
      <p className="mt-4 leading-relaxed text-gray-700">
        I am a passionate Software Engineering student at Sindh Madressatul
        Islam University, Karachi, specializing in web development and
        programming. I have hands-on experience with HTML, CSS, JavaScript, and
        TypeScript, and I am continuously learning new technologies like Next.js
        and Python. My aim is to build user-friendly, efficient applications
        while constantly enhancing my technical skills.
      </p>
      <div className="mt-4 flex space-x-3">
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-600 rounded-md transition duration-300 hover:bg-blue-700"
        >
          Twitter
        </a>
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-600 rounded-md transition duration-300 hover:bg-blue-700"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-600 rounded-md transition duration-300 hover:bg-blue-700"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default AuthorCard;
