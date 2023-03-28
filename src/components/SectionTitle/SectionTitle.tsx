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
    <div className="bg-gray-light px-10 py-8 flex w-80 shadow-md h-12 rounded-t-lg mt-[10%] md:mt-[5%]">
      <h1 className="flex-1 w-64 text-gray-dark font-sans font-medium text-2xl md:text-3xl text-center mb-4 -translate-y-2">
        {text}
      </h1>
    </div>
  );
};

export default SectionTitle;
