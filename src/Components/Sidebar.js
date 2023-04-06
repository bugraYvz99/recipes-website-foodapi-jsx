import React, { useState } from "react";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="">
      <button
        className="fixed z-10 top-0 left-0 p-4 text-white bg-blue-600"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? "Close" : "Open"} Sidebar
      </button>
      <nav
        className={`fixed z-10 h-screen top-0 left-0 px-8 py-16 bg-blue-400 transform transition-transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <a href="/" className="block mb-4 text-white font-bold hover:text-gray-200">
          Home
        </a>
        <a href="/" className="block mb-4 text-white font-bold hover:text-gray-200">
          Contact
        </a>
        <a href="/" className="block mb-4 text-white font-bold hover:text-gray-200">
          About Us
        </a>
      </nav>
      <div className="flex-1 bg-gray-100"></div>
    </div>
  );
};

export default Sidebar;
