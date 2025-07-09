import React from "react";

const Explore = () => {
  const cardContent = [
    {
      image: "/Images/Explore/Santorini Escape.png",
      title: "Santorini Escape",
      price: "$260/per night",
    },
    {
      image: "/Images/Explore/Maldives Ocean Villa.png",
      title: "Maldives Ocean Villa",
      price: "$410/per night",
    },
    {
      image: "/Images/Explore/Taj Mahal.png",
      title: "Taj Mahal",
      price: "$180/per night",
    },
    {
      image: "/Images/Explore/Bali Tropical Resort.png",
      title: "Bali Tropical Resort",
      price: "$220/per night",
    },
    {
      image: "/Images/Explore/Kyoto Temples.png",
      title: "Kyoto Temples",
      price: "$270/per night",
    },
    {
      image: "/Images/Explore/Thera Greece.png",
      title: "Thera, Greece",
      price: "$350/per night",
    },
    {
      image: "/Images/Explore/Goa Beach.png",
      title: "Goa Beach",
      price: "$190/per night",
    },
    {
      image: "/Images/Explore/Romantic Paris.png",
      title: "Romantic Paris",
      price: "$310/per night",
    },
  ];
  return (
    <section className="Explore">
      <div className="explore-Heading">
        <h1>Find Your Perfect Escape</h1>
        <button>View All</button>
      </div>
      <div className="explore-Content">
        {cardContent.map((content, index) => (
          <div className="explore-Card" key={index}>
            <img src={content.image} alt={content.title} />
            <div className="wonders-Text">
              <h1>{content.title}</h1>
              <div>
                <span>{content.price}</span>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Explore;
