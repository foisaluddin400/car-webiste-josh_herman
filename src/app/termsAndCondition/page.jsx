import SharedBannar from '@/components/shared/SharedBannar'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* Top Banner */}
      <SharedBannar
        title="Terms & Conditions"
        description="Please read these Terms and Conditions carefully before using our services. By accessing or using our platform, you agree to be bound by these terms."
      />

      {/* Terms Content Section */}
      <section className="container mx-auto px-6 py-16 text-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Introduction
        </h2>
        <p className="leading-relaxed mb-6 text-center">
          Welcome to <span className="font-semibold">OurCompany</span>. These Terms and Conditions outline the rules 
          and regulations for the use of our website and services. By accessing our site, you accept these terms in full. 
          If you do not agree with any part of these terms, you should not use our platform.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          1. Use of Our Services
        </h3>
        <p className="leading-relaxed mb-4">
          You must be at least 18 years old to use our website and services. By agreeing to these terms, 
          you confirm that you have the legal capacity to enter into this agreement.
        </p>
        <p className="leading-relaxed mb-4">
          You agree to use our services only for lawful purposes and in a way that does not infringe on the rights 
          of others or restrict their use and enjoyment of the site.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          2. Account Registration
        </h3>
        <p className="leading-relaxed mb-4">
          When you create an account with us, you must provide accurate, complete, and up-to-date information. 
          You are responsible for maintaining the confidentiality of your login credentials 
          and for all activities that occur under your account.
        </p>
        <p className="leading-relaxed mb-4">
          If you suspect any unauthorized access to your account, please notify us immediately.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          3. Intellectual Property Rights
        </h3>
        <p className="leading-relaxed mb-4">
          All content, designs, logos, text, and graphics on our website are owned by 
          <span className="font-semibold"> OurCompany</span> or its licensors. 
          You may not copy, distribute, or reproduce any materials from this site without prior written permission.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          4. Limitation of Liability
        </h3>
        <p className="leading-relaxed mb-4">
          We strive to ensure that our website and services are reliable and secure. 
          However, we do not guarantee that the site will always be available, 
          error-free, or free from viruses. You use our services at your own risk.
        </p>
        <p className="leading-relaxed mb-4">
          In no event shall <span className="font-semibold">OurCompany</span> be held liable for any 
          direct, indirect, incidental, or consequential damages arising from the use of our services.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          5. Third-Party Links
        </h3>
        <p className="leading-relaxed mb-4">
          Our website may contain links to external websites that are not operated by us. 
          We have no control over the content, policies, or practices of these third-party sites 
          and are not responsible for any loss or damage that may arise from their use.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          6. Termination
        </h3>
        <p className="leading-relaxed mb-4">
          We reserve the right to suspend or terminate your account at any time 
          if we find that you have violated any of these terms or engaged in 
          unlawful or harmful behavior on our platform.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          7. Changes to These Terms
        </h3>
        <p className="leading-relaxed mb-4">
          We may update or modify these Terms and Conditions from time to time 
          without prior notice. The latest version will always be available on this page. 
          Your continued use of our services indicates your acceptance of the updated terms.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          8. Governing Law
        </h3>
        <p className="leading-relaxed mb-4">
          These Terms and Conditions are governed by the laws of your country or region. 
          Any disputes arising under these terms will be subject to the exclusive jurisdiction of the local courts.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          9. Contact Information
        </h3>
        <p className="leading-relaxed">
          If you have any questions or concerns about these Terms and Conditions, 
          please contact us at <span className="font-semibold">support@ourcompany.com</span>.
        </p>
      </section>
    </div>
  )
}

export default page
