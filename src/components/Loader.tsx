"use client";

import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex space-x-3">
        <div className="w-3 h-3 bg-blue-950 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-blue-950 rounded-full animate-bounce delay-200"></div>
        <div className="w-3 h-3 bg-blue-950 rounded-full animate-bounce delay-400"></div>
      </div>
    </div>
  );
};

export default Loader;