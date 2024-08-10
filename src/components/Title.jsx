import React from "react";
import "./Styles/TitleStyles.css";

const Title = () => {
  return (
    <div className="hero">
      <div className="image">
        <img src="./assets/1.jpg" alt="image" />
      </div>
      <div className="herotxt">
        <h1>
          Timeless Luxury <br /> Watches
        </h1>
        <p>
          Discover our curated collection of premium <br /> timepieces, blending
          classic elegance with modern <br /> craftsmanship. Elevate your style
          with watches that <br /> embody precision, sophistication, and
          enduring <br /> quality
        </p>
        <button className="btn">Explore More</button>
      </div>
    </div>
  );
};

export default Title;
