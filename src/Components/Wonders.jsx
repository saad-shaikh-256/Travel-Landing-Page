import React from "react";

const Wonders = () => {
  return (
    <section className="Wonders">
      <div className="wonders-Heading">
        <h1>Wonders of the World</h1>
        <button>View All</button>
      </div>
      <div className="wonders-Content">
        <div className="wonders-Card">
          <img src="/Images/Taj Mahal.png" alt="Taj Mahal" />
          <div className="wonders-Text">
            <h1>Taj Mahal - IND</h1>
            <div>
              <span>India</span>
              <span>Taj Mahal</span>
            </div>
          </div>
        </div>
        <div className="wonders-Card">
          <img src="/Images/Great Wall of China.png" alt="Taj Mahal" />
          <div className="wonders-Text">
            <h1>Great Wall of China - CN</h1>
            <div>
              <span>China</span>
              <span>Great Wall of China</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wonders;
