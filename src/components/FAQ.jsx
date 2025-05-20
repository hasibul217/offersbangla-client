import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy from the date of purchase with full refunds.",
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you will receive an email with a tracking number.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries around the world.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay.",
    },
    {
      question: "How can I contact customer service?",
      answer: "You can reach out via email at support@example.com or call us at 123-456-7890.",
    },
    {
      question: "Can I cancel my order?",
      answer: "Orders can be canceled within 24 hours of placement.",
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Yes, gift wrapping is available at checkout for an extra fee.",
    },
    {
      question: "Are your products environmentally friendly?",
      answer: "We prioritize sustainability in our materials and packaging.",
    },
    {
      question: "How do I reset my password?",
      answer: "Click 'Forgot Password' on the login page and follow the instructions.",
    },
    {
      question: "Can I modify my shipping address after placing an order?",
      answer: "Yes, contact our support team as soon as possible to make changes.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 border-b-2 border-teal-600 pb-2">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-200 py-3 mb-3 p-3 rounded shadow-lg">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800"
          >
            <span>{faq.question}</span>
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="mt-2 text-gray-600 text-base">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
