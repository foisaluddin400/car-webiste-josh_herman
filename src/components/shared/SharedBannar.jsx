import React from "react";
import back from "../../../public/img/hero1.jpg";
import Image from "next/image";

const SharedBannar = ({ title, description }) => {
  return (

      <div className="relative h-[80vh] w-full">
      {/* Background Image */}
      <Image
        src={back}
        alt="Banner background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center container mx-auto">
        <div className="  text-white max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-gray-300 text-lg md:text-xl">{description}</p>
        </div>
      </div>
    </div>


 
  );
};

export default SharedBannar;
