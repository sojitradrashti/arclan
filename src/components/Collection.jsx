import React from "react";
import "./Styles/CollectionStyles.css";

const Collection = () => {
  return (
    <div className="collection">
      <div className="text">
        <div className="txt">
          <h1>
            Elegant <br /> Timepieces <br /> Collection
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consecteture <br /> adipiscing elit.
            Faucibus in libero risus semper <br />
            habitant arcu eget. Et integer facilisi eget
            <br />
            diam. Lorem ipsum dolor.
          </p>
          <button className="btn">Explore More</button>
        </div>
        <div className="photo">
          <div className="photo1">
            <img src="./assets/2.png" alt="image1" />
          </div>
          <div className="photo2">
            <img src="./assets/3.png" alt="image2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
