import React from "react";
import Image from "next/image";
import { Users } from "lucide-react";

import b1 from "../../../public/img/b1.jpg";
import b2 from "../../../public/img/b2.jpg";
import b3 from "../../../public/img/b3.jpg";

const cars = [
  {
    id: 1,
    name: "Exotic Cars",
    price: 840,
    capacity: 10,
    image: b1,
  },
  {
    id: 2,
    name: "Exotic Cars",
    price: 840,
    capacity: 10,
    image: b2,
  },
  {
    id: 3,
    name: "Exotic Cars",
    price: 840,
    capacity: 10,
    image: b3,
  },
  {
    id: 4,
    name: "Exotic Cars",
    price: 840,
    capacity: 10,
    image: b2,
  },
   {
    id: 4,
    name: "Exotic Cars",
    price: 840,
    capacity: 10,
    image: b2,
  },
   {
    id: 4,
    name: "Exotic Cars",
    price: 840,
    capacity: 10,
    image: b2,
  },
   {
    id: 4,
    name: "Exotic Cars",
    price: 840,
    capacity: 10,
    image: b2,
  },
   {
    id: 4,
    name: "Exotic Cars",
    price: 840,
    capacity: 10,
    image: b2,
  },
   {
    id: 4,
    name: "Exotic Cars",
    price: 840,
    capacity: 10,
    image: b2,
  },
];

const CarsPackages = () => {
  return (
    <div className=" pt-7 lg:px-0 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Our Exotic Cars Packages
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="relative rounded-xl overflow-hidden group shadow hover:shadow-lg transition-shadow duration-300"
            >
              {/* Car Image */}
              <div className="relative w-full h-64">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 text-white">
                <div className="flex items-center gap-2 text-sm mb-1">
                  <Users className="w-4 h-4" />
                  <span>{car.capacity}</span>
                </div>
                <h3 className="text-lg font-semibold">{car.name}</h3>
                <p className="text-md font-medium">${car.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarsPackages;
