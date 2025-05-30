import { useState } from "react";

const faqs = [
  { question: "How can I get in touch with Envertis?", answer: "You can contact us via our contact form, email, or phone. Our team will respond promptly to assist you." },
  { question: "What are your business hours?", answer: "Our business hours are Monday to Friday, 9:00 AM to 6:00 PM." },
  { question: "How quickly can I expect a response after submitting my enquiry?", answer: "We aim to respond to all enquiries within 24 hours." },
  { question: "Where is Envertis located?", answer: "We are headquartered in Sydney, Australia, with offices in other major cities." },
  { question: "Do I need to book an appointment to speak with an Odoo expert?", answer: "Yes, booking an appointment ensures you get dedicated time with our experts." },
  { question: "Can I request a free consultation or strategy session?", answer: "Absolutely! We offer a free initial consultation to discuss your needs." },
  { question: "Is there a specific team I should contact for support or technical issues?", answer: "Please reach out to our Support Team via the support page or email." },
  { question: "What if I am unsure which Odoo services my business requires?", answer: "Our consultants can guide you in choosing the best services for your business." },
  { question: "Can I schedule an in-person meeting with Envertis?", answer: "Yes, you can schedule an in-person meeting at our office or your location." },
  { question: "What industries does Envertis primarily serve?", answer: "We serve a wide range of industries including manufacturing, retail, and services." },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f5fafa] min-h-screen py-12 px-2">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-200">
          {faqs.map((faq, idx) => (
            <button
              key={faq.question}
              className="w-full flex items-center justify-between py-5 px-6 text-left text-lg font-medium text-[#222] focus:outline-none transition"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-panel-${idx}`}
            >
              <span>{faq.question}</span>
              <span className="ml-4 text-2xl font-bold text-[#222] transition-transform duration-200"
                style={{ transform: openIndex === idx ? "rotate(45deg)" : "rotate(0deg)" }}>
                +
              </span>
              {/* Answer */}
              <div
                id={`faq-panel-${idx}`}
                className={`w-full text-base text-gray-600 pt-4 pr-10 transition-all duration-300 ${
                  openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
