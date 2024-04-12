import Section from "./Section";
import { wave } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { Gradient } from "./design/Services";
import { useState, useEffect } from "react";

const Airdrops = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger the fade in effect after component mounts
    setFadeIn(true);
  }, []);

  return (
    <Section className="overflow-hidden" id="airdrops">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={wave}
            className="relative z-1"
            width={232}
            height={232}
            alt="Sphere"
          />
        </div>

        <div
          className={`fade-in-gradient ${
            fadeIn ? "opacity-100" : "opacity-0"
          } backdrop-blur-2xl bg-n-8/90 border border-n-6 p-8 rounded-2xl shadow-xl lg:p-10 lg:rounded-[2.5rem] lg:shadow-2xl lg:border-n-6/90 lg:backdrop-blur-sm`}
        >
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[1.875rem] md:mb-10 lg:mb-[2.25rem]"></div>
          <Heading tag="Commit to Orbital" title="Unlock airdrops today" />
          <Gradient />

          <div className="relative">
            <PricingList />
          </div>
          <div className="flex justify-center mt-10 ">
            <a
              className="text-s font-code font-bold tracking-wider uppercase border-b"
              href="/airdrops"
            >
              Find out more
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Airdrops;
