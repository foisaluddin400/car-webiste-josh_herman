import React from "react";
import img from "../../../public/img/d1.png";
import img1 from "../../../public/img/d2.png";
import img3 from "../../../public/img/d3.png";
import Image from "next/image";
import SharedBannar from "@/components/shared/SharedBannar";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const rentalData = [
  { hours: 1, price: "$8,500.00" },
  { hours: 2, price: "$8,500.00" },
  { hours: 4, price: "$8,500.00" },
  { hours: 6, price: "$8,500.00" },
  { hours: 7, price: "$8,500.00" },
  { hours: 8, price: "$8,500.00" },
  { hours: 9, price: "$8,500.00" },
];

const timeCategories = [
  "Weekday Hourly Rates",
  "Weekday Evening",
  "Weekend Hourly Rates",
  "Weekend Evening",
];

const page = () => {
  return (
    <div>
      <SharedBannar
        title="Exotic Cars"
        description="Step aboard a private floating villa for an unforgettable event surrounded by sweeping 360° water views. Designed with luxury, comfort, and exclusivity in mind, these villas redefine what it means to host on the water."
      ></SharedBannar>
      <div className="mt-11 container mx-auto">
        <div className="grid grid-cols-2 gap-5 ">
          <Image src={img} alt="Banner background" width={2000} height={1000} />
          <Image src={img} alt="Banner background" width={2000} height={1000} />
        </div>
        <Image
          src={img}
          alt="Banner background"
          width={2000}
          height={1000}
          className="w-full h-[400px] object-cover mt-5"
        />
        <p className="mt-11">
          EXPERIENCE THE EXTRAORDINARY WITH A FLOATING VILLA LIKE NO OTHER Step
          aboard a private floating villa for an unforgettable event surrounded
          by sweeping 360° water views. Designed with luxury, comfort, and
          exclusivity in mind, these villas redefine what it means to host on
          the water. Floating Villa Highlights . Fully furnished dining room,
          lounge, and rooftop deck with seating . Over 1,200 sq. ft. of space,
          including interior and covered rooftop . Expansive wrap-around decks
          for outdoor gatherings . Premium finishes with Hacker kitchen and
          Miele appliances · Zero-emission electric propulsion powered by solar
          energy . Innovative hydraulic anchoring system for stability with
          minimal seabed impact Why This Villa is Unique . Yacht-style
          exclusivity with flexible guest capacity . Host up to 26 guests at
          once with seamless guest transfers for larger rotations . Tailored to
          events such as: . Private performances . Product launches . Culinary
          or beverage tastings . Milestone celebrations . Corporate events and
          team building . Modular options: connect multiple villas for larger
          gatherings . Private limo tender service to and from Miami Beach
          Marina (up to 2 round trips included) . Flexible pickup/drop-off
          points available upon request for guest convenience The Ultimate
          Social Yacht Villa Experience Blending the privacy of a villa with the
          sophistication of a yacht, this floating venue makes hosting more
          dynamic, intimate, and memorable than ever before.
        </p>
        <div class="w-full h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden my-11">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31537641.21293088!2d-125.00165!3d39.828175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzkg4oCmMTI1!5e0!3m2!1sen!2sus!4v1694960000000!5m2!1sen!2sus"
            frameborder="0"
            class="w-full h-full"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="United States Location"
          ></iframe>
        </div>

        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              RENTAL RATES
            </h1>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Card Header */}
                <div className="border-b border-gray-200 p-4">
                  <h3 className="text-lg font-semibold text-center text-gray-900">
                    {category}
                  </h3>
                </div>

                {/* Card Content */}
                <div className="p-4 space-y-2">
                  {rentalData.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="text-gray-500">
                        {item.hours} Hour{item.hours > 1 ? "s" : ""}:
                      </span>
                      <span className="font-medium text-gray-900">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Booking Button */}
          <div className="flex justify-center pt-4">
           <Link href={'/booking'}> <button className="flex items-center bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl">
              Booking Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
