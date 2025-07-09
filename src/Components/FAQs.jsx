import React, { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  const faq = [
    {
      question: "How much does it cost?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod soluta ex a inventore earum necessitatibus expedita asperiores voluptatum ab adipisci corrupti natus illum, velit eius delectus nostrum nesciunt perspiciatis.",
    },
    {
      question: "Where can i buy?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod soluta ex a inventore earum necessitatibus expedita asperiores voluptatum ab adipisci corrupti natus illum, velit eius delectus nostrum nesciunt perspiciatis.",
    },
    {
      question: "Does this include round trip?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod soluta ex a inventore earum necessitatibus expedita asperiores voluptatum ab adipisci corrupti natus illum, velit eius delectus nostrum nesciunt perspiciatis.",
    },
    {
      question: "Are children allowed?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod soluta ex a inventore earum necessitatibus expedita asperiores voluptatum ab adipisci corrupti natus illum, velit eius delectus nostrum nesciunt perspiciatis.",
    },
  ];
  return (
    <section className="FAQs">
      <div className="faq-Heading">
        <h1>FAQ</h1>
        <button>View All</button>
      </div>
      <div className="faq-Content">
        {faq.map((faq, index) => (
          <div key={index} className="faq-Box">
            <div className="faq-Question" onClick={() => toggleAnswer(index)}>
              <span>{faq.question}</span>
              <span>
                {openIndex === index ? (
                  <i class="hgi hgi-stroke hgi-remove-01"></i>
                ) : (
                  <i class="hgi hgi-stroke hgi-add-01"></i>
                )}
              </span>
            </div>
            {openIndex === index && (
              <div
                className="faq-Answer"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
