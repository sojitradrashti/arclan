import React from "react";
import "./Styles/BoxStyles.css";

const Box = () => {
  return (
    <div className="boxcontainer">
      <div className="boxes">
        <div>
          <img src="./assets/4.PNG" alt="image 4" />
        </div>
        <div>
          <img src="./assets/6.PNG" alt="image 6" />
        </div>
        <div>
          <img src="./assets/7.PNG" alt="image 7" />
        </div>
      </div>
    </div>
  );
};

export default Box;