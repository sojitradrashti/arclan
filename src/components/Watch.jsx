import React from "react";
import "./Styles/WatchStyles.css";

const Watch = () => {
  return (
    <div className="contaier">
      <div classame="box">
        <div className="picture">
          <img src="./assets/5.jpg" alt="image" />
        </div>
        <div className="paragraph">
          <h2>01</h2>
          <p>
            Built to last, our watches offer durability and <br />{" "}
            longevity,making them a valuable <br />
            investment.
          </p>
          <h2>02</h2>
          <p>
            Every timepeice is made with the highest <br /> quality material and
            meticulous attention to detail.
          </p>
          <h2>03</h2>
          <p>Designed for both aesthentics and comfort,<br/>
          our watches are as pleasing to wear as they <br/>
          are to look at.</p>
        </div>
      </div>
    </div>
  );
};

export default Watch;
