import SharedBannar from '@/components/shared/SharedBannar'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* Top Banner */}
      <SharedBannar
        title="Privacy & Policy"
        description="We value your trust. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services."
      />

      {/* Privacy Content Section */}
      <section className="container mx-auto px-6 py-16 text-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Introduction
        </h2>
        <p className="leading-relaxed mb-4 text-center">
          At <span className="font-semibold">OurCompany</span>, your privacy is our top priority. 
          This Privacy Policy describes how we handle your information when you visit our website, 
          use our services, or interact with us in any way. We are committed to ensuring that your personal 
          data is safe, transparent, and used responsibly.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          1. Information We Collect
        </h3>
        <p className="leading-relaxed mb-4">
          We may collect various types of information from you, including but not limited to:
        </p>
        <ul className="list-disc pl-8 space-y-2">
          <li>Personal details such as your name, email address, and phone number.</li>
          <li>Account information when you register or log in to our site.</li>
          <li>Browsing data such as pages visited, duration, and device details.</li>
          <li>Payment and transaction details when you make a purchase.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          2. How We Use Your Information
        </h3>
        <p className="leading-relaxed mb-4">
          The information we collect is used to:
        </p>
        <ul className="list-disc pl-8 space-y-2">
          <li>Provide and improve our services and customer experience.</li>
          <li>Communicate updates, promotional offers, and support messages.</li>
          <li>Ensure website functionality, analytics, and performance optimization.</li>
          <li>Protect against fraud, unauthorized access, or illegal activity.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          3. Data Protection and Security
        </h3>
        <p className="leading-relaxed mb-4">
          We implement strict security measures to safeguard your data from unauthorized access, alteration, 
          disclosure, or destruction. Your information is stored securely using encrypted systems and 
          accessible only by authorized personnel.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          4. Cookies Policy
        </h3>
        <p className="leading-relaxed mb-4">
          Our website uses cookies to improve user experience and analyze traffic. 
          Cookies help us remember your preferences, understand your behavior, 
          and offer a personalized browsing experience. 
          You can manage or disable cookies from your browser settings at any time.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          5. Third-Party Services
        </h3>
        <p className="leading-relaxed mb-4">
          We may use third-party tools or services (e.g., analytics, payment gateways) 
          to enhance our functionality. These third parties may have access to limited data 
          only to perform their assigned tasks and are bound by confidentiality agreements.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          6. Your Rights
        </h3>
        <p className="leading-relaxed mb-4">
          You have the right to:
        </p>
        <ul className="list-disc pl-8 space-y-2">
          <li>Access and request a copy of your personal information.</li>
          <li>Request correction or deletion of your data.</li>
          <li>Withdraw consent for data usage at any time.</li>
          <li>Opt-out from receiving promotional emails or notifications.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          7. Updates to This Policy
        </h3>
        <p className="leading-relaxed mb-4">
          We may update this Privacy Policy from time to time to reflect changes in our practices 
          or for legal and operational reasons. Any updates will be posted on this page with a revised date.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          8. Contact Us
        </h3>
        <p className="leading-relaxed">
          If you have any questions, concerns, or requests regarding this Privacy Policy, 
          feel free to contact us at <span className="font-semibold">privacy@ourcompany.com</span>.
        </p>
      </section>
    </div>
  )
}

export default page
