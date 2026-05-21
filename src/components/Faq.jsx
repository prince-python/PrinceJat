import { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQ() {
  const [showFAQ, setShowFAQ] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Who is the founder of KaalCyberSec?",
      answer: "Prince Chaudhary is the founder of KaalCyberSec, focused on cybersecurity and secure development."
    },
    {
      question: "What services does KaalCyberSec provide?",
      answer: "It provides penetration testing, OSINT and secure application development."
    },
    {
      question: "What technologies do you use?",
      answer: "React, Django, FastAPI, Python and cybersecurity tools."
    },
    {
      question: "Do you offer penetration testing?",
      answer: "Yes, real-world penetration testing and vulnerability assessments."
    },
    {
      question: "Can you build full stack apps?",
      answer: "Yes, secure full stack applications with modern UI."
    },
    {
      question: "Your cybersecurity experience?",
      answer: "Hands-on experience in ethical hacking and OSINT."
    },
    {
      question: "Freelance available?",
      answer: "Yes, open for freelance and projects."
    },
    {
      question: "How to contact?",
      answer: "Through portfolio or LinkedIn."
    },
    {
      question: "What makes you different?",
      answer: "Combination of dev + cybersecurity."
    },
    {
      question: "Is KaalCyberSec a company?",
      answer: "It is a growing cybersecurity initiative."
    }
  ];

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
  };

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // 🔥 JSON-LD SEO
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => document.head.removeChild(script);
  }, );

  return (
    <div style={styles.container} id="faq">

      {/* MAIN BUTTON */}
      <button style={styles.mainBtn} onClick={toggleFAQ}>
        {showFAQ ? "CLOSE FAQ ✖" : "OPEN FAQ ⚡"}
      </button>

      {/* FAQ LIST */}
      {showFAQ && (
        <div style={styles.list}>
          {faqs.map((faq, index) => (
            <div key={index} style={styles.item}>

              {/* Question Row */}
              <div style={styles.question}>
                {faq.question}
                <button
                  style={styles.iconBtn}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleAnswer(index);
                  }}
                >
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </button>
              </div>

              {/* Answer */}
              <div style={{
                ...styles.answer,
                maxHeight: activeIndex === index ? "200px" : "0px",
                opacity: activeIndex === index ? 1 : 0
              }}>
                {faq.answer}
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Hidden SEO */}
      <p style={{ display: "none" }}>
        Prince Chaudhary is the founder of KaalCyberSec, providing cybersecurity and full stack development services.
      </p>

    </div>
  );
}

// 🎨 Styles
const styles = {
  container: {
    padding: "80px 20px",
    textAlign: "center",
    color: "white"
  },

  mainBtn: {
    border: "1px solid white",
    background: "black",
    color: "white",
    padding: "12px 25px",
    cursor: "pointer",
    letterSpacing: "2px",
    transition: "0.3s"
  },

  list: {
    maxWidth: "800px",
    margin: "30px auto"
  },

  item: {
    border: "1px solid white",
    marginBottom: "10px",
    padding: "12px",
    transition: "0.3s"
  },

  question: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold"
  },

  iconBtn: {
    background: "black",
    border: "1px solid white",
    color: "white",
    cursor: "pointer",
    padding: "5px"
  },

  answer: {
    overflow: "hidden",
    textAlign: "left",
    transition: "all 0.4s ease"
  }
};