import React from "react";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="subscribe-Container">
        <div className="subscribe-UpperContainer">
          <h1>Subscribe to recive special offers</h1>
          <div className="input-Field">
            <input type="email" placeholder="Email address" />
            <button>Subscribe</button>
          </div>
        </div>
        <p className="subscribe-LowerContainer">
          By subscribing you agree to our <span>Privacy Policy</span>
        </p>
      </div>
    </section>
  );
};

export default Subscribe;
