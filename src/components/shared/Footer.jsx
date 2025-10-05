import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Button Component
const Button = ({ children, className, ...props }) => (
  <button
    className={`px-3 py-2 rounded ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Input Component
const Input = ({ className, ...props }) => (
  <input
    className={`px-3 py-2 border rounded ${className}`}
    {...props}
  />
);
export const Footer = () => {
  return (
 <footer className="bg-[#0F1010] text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Exclusive Section */}
          <div className="lg:col-span-1">
             <Image
                              alt="logo"
                              src="/img/logo4.png"
                              height={40}
                              width={500}
                              priority
                              className="w-[50px]"
                            />
            <h3 className="text-xl font-semibold mb-4">Exclusive</h3>
            <h4 className="text-lg font-medium mb-3">Subscribe</h4>
            <p className="text-gray-300 mb-4">Get 10% off your first order</p>
            
          </div>

          {/* Support Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <div className="space-y-2 text-gray-300">
              <p>111 Mohakhali, Dhaka,</p>
              <p>DH 1515, Bangladesh.</p>
              <p>bdcalling@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>

          {/* Account Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Account</h3>
            <div className="space-y-2">
              <a href="/profile" className="block text-gray-300 hover:text-white transition-colors">
                My Account
              </a>
              <a href="/signIn" className="block text-gray-300 hover:text-white transition-colors">
                Login / Register
              </a>
             
            </div>
          </div>

          {/* Quick Linkd Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Quick Link</h3>
            <div className="space-y-2">
              <Link href="/aboutUs" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/privecyPolicy" className="block text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/termsAndCondition" className="block text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/faq" className="block text-gray-300 hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Download App Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Download App</h3>
            <p className="text-sm text-gray-300 mb-4">Save $3 with App New User Only</p>

            <div className="flex gap-3 mb-4">
              {/* QR Code placeholder */}
              <div className="w-20 h-20 bg-white rounded flex items-center justify-center">
                <div className="w-16 h-16 bg-black rounded grid grid-cols-4 gap-px p-1">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className={`${Math.random() > 0.5 ? "bg-white" : "bg-black"} rounded-sm`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {/* Google Play Store */}
                <div className="bg-black rounded px-3 py-1 flex items-center gap-2 text-xs">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <span className="text-black font-bold text-xs">▶</span>
                  </div>
                  <div>
                    <div className="text-gray-300">GET IT ON</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </div>

                {/* App Store */}
                <div className="bg-black rounded px-3 py-1 flex items-center gap-2 text-xs">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <span className="text-black font-bold text-xs">🍎</span>
                  </div>
                  <div>
                    <div className="text-gray-300">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
