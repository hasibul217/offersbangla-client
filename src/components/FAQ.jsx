import React, { useState, useRef, useEffect } from "react";

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
    <div className="container mx-auto my-10 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 border-b-2 border-teal-600 pb-2">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          faq={faq}
          isOpen={openIndex === index}
          onClick={() => toggle(index)}
        />
      ))}
    </div>
  );
};

const AccordionItem = ({ faq, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="py-3 mb-3 p-3 rounded-lg shadow">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800"
      >
        <span>{faq.question}</span>
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: `${height}px`,
          overflow: "hidden",
          transition: "max-height 0.3s ease, opacity 0.3s ease",
          opacity: isOpen ? 1 : 0,
        }}
        className="text-gray-600 text-base"
      >
        <div className="mt-2">{faq.answer}</div>
      </div>
    </div>
  );
};

export default FAQ;
