import React from "react";

const Popular = () => {
  const cardContent = [
    {
      image: "/Images/Popular/Sea Beach View.png",
      title: "Sea Beach View",
      place: "1130 place",
    },
    {
      image: "/Images/Popular/Luxurious Resort At Sea.png",
      title: "Luxurious Resort At Sea",
      place: "2340 place",
    },
    {
      image: "/Images/Popular/Great Switzerland.png",
      title: "Great Switzerland",
      place: "1230 place",
    },
    {
      image: "/Images/Popular/Venice, Veneto, Italy.png",
      title: "Venice, Veneto, Italy",
      place: "342 place",
    },
    {
      image: "/Images/Popular/Thera, Greece.png",
      title: "Thera, Greece",
      place: "324 place",
    },
    {
      image: "/Images/Popular/Liguria, Italy.png",
      title: "Liguria, Italy",
      place: "354 place",
    },
    {
      image: "/Images/Popular/Goa Beach India.png",
      title: "Goa Beach India",
      place: "230 place",
    },
    {
      image: "/Images/Popular/Luxurious Resort At Sea2.png",
      title: "Luxurious Resort At Sea",
      place: "2340 place",
    },
  ];
  return (
    <section className="Popular">
      <div className="popular-Heading">
        <h1>Most Popular Destination</h1>
      </div>
      <div className="popular-Content">
        {cardContent.map((content, index) => (
          <div className="popular-Card" key={index}>
            <img src={content.image} alt={content.title} />
            <div className="popular-Text">
              <h1>{content.title}</h1>
              <div>
                <span>{content.place}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Popular;
