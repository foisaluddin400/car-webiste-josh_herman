import Image from "next/image"
import { MapPin, Users, Star } from "lucide-react"
import jek1 from '../../../public/img/jek1.png'
import jek2 from '../../../public/img/jek2.png'
import jek3 from '../../../public/img/jek3.png'

const jetPackages = [
  {
    id: 1,
    name: "SkyElite Jets",
    country: "Switzerland",
    flag: "🇨🇭",
    image: jek1,
    rating: 5,
    location: "Europe",
    capacity: 10,
    originalPrice: 1200,
    discountedPrice: 1000,
    description:
      "Experience the epitome of luxury and convenience with our fleet of private jets. Tailored for those who demand comfort, privacy, and impeccable service, our jets offer an unrivaled flying experience.",
  },
  {
    id: 2,
    name: "JetSet Luxury",
    country: "Brazil",
    flag: "🇧🇷",
    image: jek2,
    rating: 5,
    location: "Europe",
    capacity: 10,
    originalPrice: 1200,
    discountedPrice: 1000,
    description:
      "Experience the epitome of luxury and convenience with our fleet of private jets. Tailored for those who demand comfort, privacy, and impeccable service, our jets offer an unrivaled flying experience.",
  },
  {
    id: 3,
    name: "Royal Sky Jets",
    country: "Egypt",
    flag: "🇪🇬",
    image: jek3,
    rating: 5,
    location: "Europe",
    capacity: 10,
    originalPrice: 1200,
    discountedPrice: 1000,
    description:
      "Experience the epitome of luxury and convenience with our fleet of private jets. Tailored for those who demand comfort, privacy, and impeccable service, our jets offer an unrivaled flying experience.",
  },
]

export default function PrivateJetsPage() {
  return (
    <div className="min-h-screen  py-16 lg:px-0 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 text-balance">
            Our Private Jets Packages
          </h1>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jetPackages.map((jet) => (
            <div
              key={jet.id}
              className="overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Jet Image */}
              <div className="relative w-full h-64">
                <Image
                  src={jet.image}
                  alt={jet.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
                {/* Country Flag */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">{jet.flag}</span>
                </div>
              </div>

              <div className="p-6">
                {/* Jet Name and Rating */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-800">{jet.name}</h3>
                  <div className="flex items-center gap-1">
                    {[...Array(jet.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Location and Capacity */}
                <div className="flex items-center gap-6 mb-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{jet.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{jet.capacity}</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-orange-500">
                    {jet.discountedPrice.toLocaleString()} $
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    {jet.originalPrice.toLocaleString()} $
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {jet.description}
                </p>

                {/* CTA Button */}
                <button className="w-full  bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl">
                  Explore Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
