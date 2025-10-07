import Image from "next/image";
import back from "/public/img/hero3.png";
import logo1 from "/public/img/l1.png";
import logo2 from "/public/img/air.png";
import logo3 from "/public/img/urk.png";
import logo4 from "/public/img/swi.png";
import logo5 from "/public/img/tri.png";
import car1 from "/public/img/car1.png";
import plan1 from "/public/img/plan1.png";
import car2 from "/public/img/car2.png";
import car3 from "/public/img/car3.png";
import PrivateJetsPage from "@/components/HomePage/HomePage";
import CarsPackages from "@/components/HomePage/CarsPackages";
import YachtsPack from "@/components/HomePage/YachtsPack";
import DataCard from "@/components/HomePage/DataCard";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="relative h-[80vh] text-white">
        {/* Background Image */}
        <Image
          src={back}
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-20"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto h-full px-4 lg:px-0 flex flex-col justify-center">
          <div className="max-w-4xl">
            <h1 className=" font-semibold leading-tight">
              <span className="md:text-6xl text-4xl">
                <span className="text-primary">Book</span> Your Perfect Stay
                Anytime, <span className="text-primary">Anywhere</span>
              </span>
            </h1>

            <p className="pt-8 text-gray-300">
              Discover the best hotels, resorts, and vacation rentals worldwide.
              Discover the best hotels, resorts, and vacation rentals worldwide.
              Discover the best hotels, resorts, and vacation rentals worldwide.
            
            </p>
            <button className="bg-gradient-to-r from-stone-400  to-orange-600 px-3 py-2 rounded border mt-9">
              Explore Now
            </button>
          </div>
        </div>
      </div>

      <div className=" relative py-9 bg-gradient-to-r from-primary  to-primary">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-300 via-zinc-300 to-zinc-300 opacity-40"></div>
        <div className="flex gap-11 justify-center">
          <Image src={logo1} alt="Hero background" width={200} height={100} />

          <Image src={logo2} alt="Hero background" width={200} height={100} />

          <Image src={logo3} alt="Hero background" width={200} height={100} />

          <Image src={logo4} alt="Hero background" width={200} height={100} />

          <Image src={logo5} alt="Hero background" width={200} height={100} />
        </div>
      </div>

      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold pt-11 pb-3 text-center">
          We Offer Best Services
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-11 text-center">
          <Link href={'/royalExotic'}><div className="shadow rounded-[30px] p-8">
            <div className="flex justify-center  h-[150px]">
              {" "}
              <Image
                src={car1}
                alt="Hero background"
                width={1000}
                height={1000}
                className="w-[200px]"
              />
            </div>
            <h3 className="font-semibold text-lg">Exotic Cars</h3>
            <p className="text-gray-700 pt-3">
             
              Unleash the power, luxury, and elegance of our handpicked fleet of
              exotic cars.
            </p>
          </div></Link>
        <Link href={'/royalExotic'}> <div className="shadow rounded-[30px] p-8">
            <div className="flex justify-center  h-[150px] ">
              {" "}
              <Image
                src={plan1}
                alt="Hero background"
                width={1000}
                height={1000}
                className="w-[200px]"
              />
            </div>
            <h3 className="font-semibold text-lg">Exotic Cars</h3>
            <p className="text-gray-700 pt-3">
             
              Unleash the power, luxury, and elegance of our handpicked fleet of
              exotic cars.
            </p>
          </div></Link>
          <Link href={'/royalExotic'}><div className="shadow rounded-[30px] p-8">
            <div className="flex justify-center  h-[150px]">
              {" "}
              <Image
                src={car2}
                alt="Hero background"
                width={1000}
                height={1000}
                className="w-[200px]"
              />
            </div>
            <h3 className="font-semibold text-lg">Exotic Cars</h3>
            <p className="text-gray-700 pt-3">
             
              Unleash the power, luxury, and elegance of our handpicked fleet of
              exotic cars.
            </p>
          </div></Link>
          <Link href={'/royalExotic'}> <div className="shadow rounded-[30px] p-8">
            <div className="flex justify-center  h-[150px]">
              {" "}
              <Image
                src={car3}
                alt="Hero background"
                width={1000}
                height={1000}
                className="w-[200px]"
              />
            </div>
            <h3 className="font-semibold text-lg">Exotic Cars</h3>
            <p className="text-gray-700 pt-3">
             
              Unleash the power, luxury, and elegance of our handpicked fleet of
              exotic cars.
            </p>
          </div></Link>
        </div>
      </div>
      <PrivateJetsPage></PrivateJetsPage>
      <CarsPackages></CarsPackages>
      <YachtsPack></YachtsPack>
      <DataCard></DataCard>
    </div>
  );
}
