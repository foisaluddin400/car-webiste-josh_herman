import SharedBannar from '@/components/shared/SharedBannar'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* Top Banner */}
      <SharedBannar
        title="About Us"
        description="We started as a small team of creatives and developers who were frustrated by the limitations of traditional online shopping. Why settle for generic products when you can design your own?"
      />

      {/* About Section */}
      <section className="container mx-auto px-6 py-16 text-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Who We Are</h2>
        <p className="leading-relaxed mb-4 text-center">
          We are a passionate group of developers, designers, and thinkers dedicated to building meaningful digital experiences. 
          Our journey started with a simple idea — to make online experiences more creative, interactive, and user-focused. 
          Over the years, we have grown into a full-fledged team working together to turn imagination into innovation.
        </p>
        <p className="leading-relaxed text-center">
          We believe in collaboration, transparency, and customer satisfaction. 
          Every product we create reflects our commitment to quality, innovation, and long-term value for our users.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-16 px-6 text-gray-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
          <p className="leading-relaxed mb-4">
            Our mission is to empower creativity and individuality. We strive to make it easier for people to design, 
            build, and customize their online experience. 
            We are continuously exploring new ways to merge technology with creativity, helping users make ideas come to life.
          </p>
          <p className="leading-relaxed">
            At the heart of everything we do is a desire to simplify technology and make it accessible for everyone — 
            from individuals to businesses who want to make their mark online.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Our Vision</h2>
        <p className="leading-relaxed mb-4 text-center">
          We envision a world where creativity meets technology seamlessly. 
          Our vision is to be a global leader in providing customizable, user-friendly digital solutions 
          that allow people to express themselves and achieve their goals.
        </p>
        <p className="leading-relaxed text-center">
          Through continuous innovation, teamwork, and customer focus, 
          we aim to shape the future of online experience — making it smarter, faster, and more enjoyable for everyone.
        </p>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 px-6 text-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Innovation</h3>
              <p className="text-sm leading-relaxed">
                We believe in pushing boundaries and finding creative solutions 
                to meet the ever-evolving demands of our users.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Integrity</h3>
              <p className="text-sm leading-relaxed">
                We are committed to honesty, transparency, and maintaining trust in every interaction with our customers and partners.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Teamwork</h3>
              <p className="text-sm leading-relaxed">
                We work together, support each other, and share a common goal — 
                to build products that make a difference in people’s lives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
