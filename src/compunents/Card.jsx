import React from "react";

const Card = ({ cardName }) => {
  return (
    <div>
      <div className="card cardData m-3">
        <img className="card-img-top" src="images/image2.jpg" alt="" />
        <div className="card-body">
          <h4 className="card-title pt-3 pb-3">{cardName}</h4>
          <p className="card-text pb-2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            culpa neque quo eum et quasi velit voluptatum cum maiores
            exercitationem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
