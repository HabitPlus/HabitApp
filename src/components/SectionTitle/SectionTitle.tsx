import React, { useState, useEffect } from "react";

const SectionTitle = ({ text }: any) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(false);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="bg-orange md:bg-white px-10 py-8 flex w-80 shadow-md">
      <h1 className="flex-1 w-64 text-white md:text-gray-dark font-sans text-2xl md:text-3xl text-center mb-4">
        {text}
      </h1>
    </div>
  );
};

export default SectionTitle;
