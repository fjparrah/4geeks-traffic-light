import React, { useState } from "react";

// Include images into your bundle
import green from "../../img/Green-circle.png";
import red from "../../img/Red_Circle.png";
import yellow from "../../img/Yellow_circle.png";

// Create your first component
const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const ImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <>
      <div className="containers py-5">
        <div className="row justify-content-center">
          <div className="col-1">
            <div className="row justify-content-center">
              <div className="col-1 bg-dark text-dark">
                <h3>1</h3>
                <h3>1</h3>
              </div>
              <div className="bg-dark text-light text-center">
                <img
                  src={green}
                  width="100"
                  height="100"
                  onClick={() => ImageClick(green)}
                  style={{
                    filter:
                      selectedImage === green ? "brightness(500%)" : "none",
                  }}
                />
                <img
                  className="mb-1"
                  src={red}
                  width="90"
                  height="90"
                  onClick={() => ImageClick(red)}
                  style={{
                    filter: selectedImage === red ? "brightness(500%)" : "none",
                  }}
                />
                <img
                  className="mt-1 mb-2"
                  src={yellow}
                  width="90"
                  height="90"
                  onClick={() => ImageClick(yellow)}
                  style={{
                    filter:
                      selectedImage === yellow ? "brightness(500%)" : "none",
                  }}
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