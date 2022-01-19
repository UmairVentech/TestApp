import React from "react";
import Card from "../compunents/Card";
import BgImage from "../compunents/BgImage";
import HomeBottom from "../compunents/HomeBottom";
import About from "../compunents/About";
import { useRef } from "react";

const Home = () => {
  const services = useRef(null);

  const cardNames = [
    "Web Development",
    "Mobile Applications",
    "Tech Marketing",
  ];
  return (
    <div>
      <BgImage scrollToServices={services} />

      <HomeBottom />

      <div
        id="services"
        ref={services}
        className="p-5 bgGray d-flex flex-wrap align-items-center justify-content-center"
      >
        {cardNames.map((card, i) => (
          <Card key={i} cardName={card} />
        ))}
      </div>

      <div className="container-fluid">
        <About />
      </div>
    </div>
  );
};

export default Home;
