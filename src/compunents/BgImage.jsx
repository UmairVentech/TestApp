import React from "react";

const BgImage = ({ scrollToServices }) => {
  const readMoreHandler = () => {
    window.scrollTo(0, scrollToServices.current.offsetTop);
  };
  return (
    <div>
      <div className="bgImage">
        <div className="d-flex justify-content-center align-items-center h-100 flex-column text-white">
          <h1 className="text-center">Welcome to Acme Web Solutions</h1>
          <p className="w-75 fs-5  text-center mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            eum error earum soluta voluptatum nisi laboriosam eos saepe
            asperiores dolorum.
          </p>
          <button onClick={readMoreHandler} className="moreButton">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BgImage;
