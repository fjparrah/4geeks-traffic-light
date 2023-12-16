import React, { useState } from "react";
import green from "../../img/Green-circle.png";
import red from "../../img/Red_Circle.png";
import yellow from "../../img/Yellow_circle.png";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const ImageClick = (imageSrc) => {
    setSelectedImage(imageSrc === selectedImage ? null : imageSrc);
  };

  const getClassName = (imageSrc) => {
    return selectedImage === imageSrc ? "img-fluid glow" : "img-fluid";
  };

  return (
    <>
      <div className="containers py-5">
        <div className="row justify-content-center">
          <div className="col-1">
            <div className="row justify-content-center">
              <div className="col-1 bg-dark text-dark">
                <h3>|</h3>
                <h3>|</h3>
                <h3>|</h3>
              </div>
              <div className="py-3 bg-dark text-light text-center">
                <img
                  className={getClassName(red) + " mb-2"}
                  src={red}
                  width="90"
                  height="90"
                  onClick={() => ImageClick(red)}
                />
                <img
                  className={getClassName(yellow)}
                  src={yellow}
                  width="90"
                  height="90"
                  onClick={() => ImageClick(yellow)}
                />
                <img 
                  className={getClassName(green)}
                  src={green}
                  width="110"
                  height="110"
                  onClick={() => ImageClick(green)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;