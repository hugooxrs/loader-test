import React from 'react';
import Image from "next/image";
import { Dog } from 'lucide-react'

const Dash: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center text-blue-950">
      <h1 className="text-3xl font-bold">Hello World!</h1>
      <p>After the loader comes the dog.</p>
      <Dog />
    </div>
  );
};

export default Dash;
