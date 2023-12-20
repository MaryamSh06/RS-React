import React from "react";
import "./screensAfterLoginStyles.css";
import blackScreen from "../../images/screens/black_image.jpg";
import screen1 from "../../images/screens/screen1.png";
import screen2 from "../../images/screens/screen2.jpeg";
import screen3 from "../../images/screens/screen3.png";
import screen4 from "../../images/screens/screen4.png";
import screen5 from "../../images/screens/screen5.jpg";
import screenIcon from "../../images/screens/screenIcon.png";

export const ScreensAfterLogin = () => {
  const screenContents = [
    { ID: 2559865602, screenImg: blackScreen },
    { ID: 2559865645, screenImg: screen5 },
    { ID: 2559865686, screenImg: screen1 },
    { ID: 2559865623, screenImg: screen4 },
    { ID: 2559865676, screenImg: screenIcon },
    { ID: 2559865692, screenImg: screen2 },
    { ID: 2559865616, screenImg: blackScreen },
    { ID: 2559865684, screenImg: screen3 },
    { ID: 2559865640, screenImg: screenIcon },
    { ID: 2559865627, screenImg: screen3 },
    { ID: 2559865697, screenImg: screen4 },
    { ID: 2559865666, screenImg: screenIcon },
    { ID: 2559865607, screenImg: screen5 },
  ];
  return (
    <>
      <div className="flexContainer">
        {screenContents?.map((singleScreen, index) => {
          return (
            <div className="containerItem" key={index}>
              <div className="screenContainer">
                <img className="imageStyle" src={singleScreen?.screenImg} />
                <p className="screenIDStyle">{singleScreen?.ID}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
