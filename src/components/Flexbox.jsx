import React from "react";
import "./FlexboxStyles.css";

const Flexbox = () => {
  return (
    <div className="flexcontainer">
      <div className="flextxt">
        <div className="flexbox">
          <h3>01</h3>
          <p>
            Lorem ipsum dolor sit amet, <br /> consecteture adipiscing elit.
            <br /> Faucibus in libero risus
          </p>
        </div>
        <div className="flexbox">
          <h3>02</h3>
          <p>
            Lorem ipsum dolor sit amet, <br /> consecteture adipiscing elit.
            <br /> Faucibus in libero risus
          </p>
        </div>
        <div className="flexbox">
          <h3>03</h3>
          <p>
            Lorem ipsum dolor sit amet, <br /> consecteture adipiscing elit.
            <br /> Faucibus in libero risus
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flexbox;
