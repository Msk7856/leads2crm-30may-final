// components/FAQ.js
"use client"

import { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is ERP software?",
      answer: "ERP (Enterprise Resource Planning) software integrates various business processes such as finance, human resources, sales, and inventory into a single system. This enables efficient management and data-driven decision-making. Our ERP solutions extend to Zoho, Oracle, Odoo, and more, helping businesses automate and optimize operations."
    },
    {
      question: "How can ERP help my business?",
      answer: "ERP helps businesses streamline operations, reduce costs, improve productivity, and ensure better data accuracy by integrating all functions into a unified system. We offer ERP systems that are customizable for Zoho, Oracle, Odoo, or your custom needs."
    },
    {
      question: "Is your ERP software customizable?",
      answer: "Yes, our ERP software is highly customizable to fit your specific business needs, whether you are in manufacturing, retail, healthcare, or service industries. We specialize in Zoho, Oracle, and Odoo ERP systems that can be tailored to your unique business processes."
    },
    {
      question: "Do you provide support and training?",
      answer: "Yes, we offer full customer support and training to help you get the most out of our ERP software. Our team is experienced in Zoho, Oracle, Odoo, and website development, providing in-depth support throughout your journey."
    },
    {
      question: "Can your ERP integrate with other tools?",
      answer: "Our ERP software can seamlessly integrate with third-party applications such as CRM, accounting software, and more to ensure smooth data flow across all business functions. We support integration with Zoho, Oracle, Odoo, and many other platforms."
    },
    {
      question: "Do you offer custom website development?",
      answer: "Yes, we specialize in custom website development. Whether you're looking to integrate your ERP system with an eCommerce website or a full-featured corporate portal, we provide end-to-end website development solutions."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-4xl font-semibold text-center mb-10 text-gray-800">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div 
              className="flex justify-between items-center p-5 cursor-pointer hover:bg-gray-50 transition"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-xl font-medium text-gray-800">{faq.question}</h3>
              <span className="text-gray-500 text-xl">
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div className="p-5 bg-gray-100 text-gray-700 text-lg">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
