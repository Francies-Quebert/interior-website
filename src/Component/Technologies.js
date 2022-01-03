import React from "react";
import Carousel from "./Carousel";

const Technologies = () => {
  return (
    <div className="container mx-auto py-14">
      <div className="lg:max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-3">
        <div className=" text-4xl font-bold col-span-2 ">
          Technologies.{" "}
          <span className="text-gray-600">
            My expertise in the best technologies
          </span>
        </div>
        <div className="hidden lg:block place-self-center">
          <div className="font-bold">Contact me?</div>
          <div className="text-blue-600 text-sm">
            <a href="tel:+6494461709 outline-none">click here</a>
          </div>
        </div>
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default Technologies;
