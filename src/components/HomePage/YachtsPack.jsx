import Image from "next/image";

import img1 from "../../../public/img/n1.jpg";
import img2 from "../../../public/img/n2.jpg";
import img3 from "../../../public/img/n3.jpg";
import img4 from "../../../public/img/n4.jpg";
import img5 from "../../../public/img/n5.png";

export default function YachtsPack() {
  return (
    <main className="min-h-screen ">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Yachts Packages
          </h1>
        </div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-orange-500 text-sm font-semibold tracking-wider uppercase">
                YACHTS
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
              Indulge in the luxury of the sea with our exquisite yachts
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Discover the ultimate escape on the open water with our exclusive
              collection of yachts. From intimate cruises to extravagant
              parties, each yacht is designed to provide a perfect blend of
              luxury, performance, and sophistication. Experience the freedom of
              the sea like never before.
            </p>

            <button className=" bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl">
              Explore Now
            </button>

            {/* Yacht Gallery */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[img1, img2, img3, img4].map((img, index) => (
                <div key={index} className="relative group cursor-pointer">
                  <Image
                    src={img}
                    alt={`Yacht ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                    width={300}
                    height={250}
                  />
                  <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    $700
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-t-[50%] mt-20">
              <Image
                src={img5}
                alt="Luxury yacht at sunset"
                className="w-full h-[500px] lg:h-[700px]  object-cover"
                width={800}
                height={600}
                priority
              />

              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 origin-center">
                <div className="bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  <span className="text-white text-sm font-light tracking-[0.3em] uppercase">
                    Best Packages
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
