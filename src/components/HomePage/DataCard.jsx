"use client";
import Image from "next/image";
import img1 from "../../../public/img/exo.png";
import Link from "next/link";

export default function DataCardPage() {
  const properties = [
    { title: "Luxury Beach House", priceRange: "$1800 - $2500" },
    { title: "Modern City Apartment", priceRange: "$1200 - $1700" },
    { title: "Cozy Mountain Cabin", priceRange: "$900 - $1200" },
    { title: "Elegant Penthouse", priceRange: "$2500 - $3200" },
    { title: "Family Country Villa", priceRange: "$1500 - $2000" },
  ];

  return (
    <div className="container mx-auto lg:px-0 px-4">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Link href={'/royelExoticDetails'}><div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={img1}
                  alt={property.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-40 backdrop-blur-sm text-white p-4">
                  <h2 className="text-xl font-bold mb-2">{property.title}</h2>
                  <p className="text-gray-300 text-lg">{property.priceRange}</p>
                </div>
              </div></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
