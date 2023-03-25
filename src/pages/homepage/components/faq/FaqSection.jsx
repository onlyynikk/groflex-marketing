import React, { useState } from "react";
import "./faqsection.css";
import Faq from "./Faq";

export default function FaqSection() {
  const [active, setActive] = useState(0);
  return (
    <div className="faq__container">
      <h1>Frequently asked questions</h1>
      <div className="faq__section--items">
        <div className="faq__section1">
          <Faq
            id={1}
            active={active}
            setActive={setActive}
            question={dataCollection[0].question}
            answer={dataCollection[0].answer}
          />
          <Faq
            id={2}
            active={active}
            setActive={setActive}
            question={dataCollection[1].question}
            answer={dataCollection[1].answer}
          />
          <Faq
            id={3}
            active={active}
            setActive={setActive}
            question={dataCollection[2].question}
            answer={dataCollection[2].answer}
          />
        </div>
        <div className="faq__section2">
          <Faq
            id={4}
            active={active}
            setActive={setActive}
            question={dataCollection[3].question}
            answer={dataCollection[3].answer}
          />
          <Faq
            id={5}
            active={active}
            setActive={setActive}
            question={dataCollection[4].question}
            answer={dataCollection[4].answer}
          />
          <Faq
            id={6}
            active={active}
            setActive={setActive}
            question={dataCollection[5].question}
            answer={dataCollection[5].answer}
          />
        </div>
      </div>
    </div>
  );
}

const dataCollection = [
  {
    id: 1,
    question: "What is grofleX?",
    answer:
      "With Groflex, you can create, send, and manage estimates and invoices online without the need for software downloads. Once signed up, easily create invoices in seconds from your start page. Download, email, or share invoices with ease, eliminating the need for printing and posting.",
  },
  {
    id: 2,
    question: "Who should use grofleX?",
    answer:
      "Groflex is suitable for a wide range of users including freelancers, agencies, web designers, small and medium-sized business owners, photographers, creatives, reporters, and anyone who needs to create estimates or invoices.",
  },
  {
    id: 3,
    question: "Can I send my invoices to my customers?",
    answer:
      "There are various ways to use Groflex. You can save invoices on your computer, send them via email, or use our system. Alternatively, you can share a link with customers to view and download invoices at their convenience. Please note that there is no charge for emailing invoices from your account.",
  },
  {
    id: 4,
    question: "Can I receive online payments?",
    answer:
      "We've partnered with Razor Pay to enable invoice payments. Complete your online KYC to add a QR code and payment options for customers to easily pay you.",
  },
  {
    id: 5,
    question: "How much does grofleX cost?",
    answer:
      "We believe in growing alongside our customers, which is why we offer lifetime free estimates and invoices on Groflex without any limits on the number or value of your documents. We promise to never charge you for these services.",
  },
  {
    id: 6,
    question: "Why should I pick grofleX over another?",
    answer:
      "Groflex is designed for small and medium-sized businesses, with affordability and simplicity in mind. Creating and sending documents is easy, with more features coming soon to manage your entire business. The software is developed with users in mind.",
  },
];
