import React from "react";
import Navbar from "./Navbar";
import BgImage from "../../assets/bg-slate.png";
import BlackCoffee from "../../assets/black.png";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const Hero = () => {
  return (
    <main style={bgImage}>
      <section className="min-h-[750px] w-full">
        <div className="container">
          {/* navbar section*/}
          <Navbar />
          {/* hero section*/}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text section*/}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className="text-7xl font-bold leading-tight ml-14">
                Black coffee
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black life style lovers</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam quibusdam alias consequatur, rem error magni deleniti
                    mollitia. Voluptate dolorum nobis, odit assumenda enim
                    aspernatur deleniti tempora optio eveniet, impedit neque.
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </div>
            </div>
            {/* hero image section*/}
            <div className="relative">
              <img
                src={BlackCoffee}
                alt="coffe-img"
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              {/* orange circle ring*/}
              <div className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10"></div>
              {/* big text section */}
              <div className="absolute -top-20 left-[200px] z-[1]">
                <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">
                  Black coffee
                </h1>
              </div>
            </div>
            <div></div>
            {/* third div section*/}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                Black coffee
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black coffee</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam quibusdam alias consequatur.
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-darkGray/50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
