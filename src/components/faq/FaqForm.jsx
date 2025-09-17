'use client'
import React, { useState } from "react";


const Faq = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    "How does customization work?",
    "Can I upload my own design or logo?",
    "What kind of products can I customize?",
    "Do you offer bulk or business orders?",
    "How does customization work?",
    "How does customization work?",
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="">
   
      <div className="max-w-3xl m-auto space-y-3 my-16">
        {faqs.map((question, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-md cursor-pointer"
          onClick={() => toggleFAQ(index)}
        >
          <div className="flex justify-between items-center px-4 py-3">
            <span className="font-medium">
              {index + 1}. {question}
            </span>
            <span className="text-xl">{openIndex === index ? "−" : "⌄"}</span>
          </div>
          {openIndex === index && (
            <div className="px-4 pb-3 text-gray-600">
              <p>
                This is a dummy answer for: <b>{question}</b>. You can replace
                it with your actual FAQ answer content.
              </p>
            </div>
          )}
        </div>
      ))}
      </div>
    </div>
  );
};

export default Faq;
