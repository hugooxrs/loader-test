"use client";

import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Dash from '../components/Dash';
import Image from "next/image";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="p-4">
      <Dash />
    </div>
  );
}
