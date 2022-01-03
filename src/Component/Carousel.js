import React from "react";

const Carousel = () => {
  return (
    <div className="carousel-container whitespace-nowrap relative">
      <Item value={1} />
      <Item value={2} />
      <Item value={3} />
      <Item value={4} />
      <Item value={5} />
      <Item value={6} />
      <Item value={7} />
    </div>
  );
};

export const Item = ({ value }) => {
  return <div className="inline-block min-w-[25%]">Item {value}</div>;
};

export default Carousel;
