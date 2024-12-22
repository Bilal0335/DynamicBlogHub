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
          <h3 className="text-xl font-bold">M. Bilal Hussain</h3>
          <p className="text-slate-500">Frontend Developer | SQL</p>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
