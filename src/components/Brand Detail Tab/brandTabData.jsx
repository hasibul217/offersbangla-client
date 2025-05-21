// brandTabData.jsx
import React from "react";

export const tabsData = [
  { id: "about", label: "About" },
  { id: "address", label: "Address" },
  { id: "facilities", label: "Facilities" },
  { id: "privacy", label: "Privacy Policy" },
  { id: "faqs", label: "FAQs" },
  { id: "contact", label: "Contact Us" },
];

// For content, you can export React components or JSX
export const tabContent = {
  about: (
    <section>
      <h2 className="text-2xl font-bold mb-3">About</h2>
      <p>
        We are a leading brand in the industry, committed to providing quality
        products and services for over 25 years. Our mission is to deliver
        excellence with every customer interaction.
      </p>
      <p>
        Founded in 1997, our brand has grown from a small local shop to a
        nationwide recognized name.
      </p>
    </section>
  ),
  address: (
    <section>
      <h2 className="text-2xl font-bold mb-3">Our Address</h2>
      <address className="not-italic">
        123 Brand Street
        <br />
        Suite 456
        <br />
        Metropolis, XY 78901
        <br />
        Country
        <br />
        Phone: +1 (234) 567-8900
        <br />
        Email:{" "}
        <a href="mailto:contact@brand.com" className="text-teal-600 underline">
          contact@brand.com
        </a>
      </address>
    </section>
  ),
  facilities: (
    <section>
      <h2 className="text-2xl font-bold mb-3">Facilities</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>24/7 Customer Support</li>
        <li>On-site Repair & Maintenance</li>
        <li>Free Wi-Fi Access</li>
        <li>Comfortable Waiting Lounge</li>
        <li>Wide Parking Space</li>
      </ul>
    </section>
  ),
  privacy: (
    <section>
      <h2 className="text-2xl font-bold mb-3">Privacy Policy</h2>
      <p>
        We respect your privacy and are committed to protecting your personal
        information. We collect data only to improve your experience and never
        share it with third parties without your consent.
      </p>
      <p>
        Read the full policy{" "}
        <a href="/privacy-policy" className="text-teal-600 underline">
          here
        </a>
        .
      </p>
    </section>
  ),
  faqs: (
    <section>
      <h2 className="text-2xl font-bold mb-3">Frequently Asked Questions</h2>
      <dl className="space-y-3">
        <dt className="font-semibold">What are your operating hours?</dt>
        <dd>We operate from 9 AM to 8 PM, Monday to Saturday.</dd>

        <dt className="font-semibold">Do you offer international shipping?</dt>
        <dd>
          Yes, we ship to selected countries worldwide. Please check our
          shipping policy for details.
        </dd>

        <dt className="font-semibold">What is your return policy?</dt>
        <dd>
          Returns are accepted within 30 days of purchase with the original
          receipt and packaging.
        </dd>
      </dl>
    </section>
  ),
  contact: (
    <section>
      <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
      <p>Have questions or want to reach out? We're here to help!</p>
      <form className="max-w-md mt-4 space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Write your message here..."
          />
        </div>
        <button
          type="submit"
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
        >
          Send
        </button>
      </form>
    </section>
  ),
};
