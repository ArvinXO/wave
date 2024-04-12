import { token } from "../assets";
import Section from "./Section";
import { useRef } from "react";
import CompanyLogos from "./CompanyLogos";
import { Custom_B } from "./design/Custom_Button";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section className="pt-[8rem] -mt-[1.25rem]" id="hero">
      <div className="container relative w-full h-full" ref={parallaxRef}>
        <div className="relative max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Orbital Token: Ignite Your Exploration {` `}
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Maximize productivity. Ride the orbital wave. Start now.
          </p>
          <Custom_B className="hidden md:inline-block" href="#signup">
            <h1 className="h6 text-center">EXPLORE</h1>
          </Custom_B>
        </div>
        <div className="h-[100px] w-full flex items-center justify-center md:h-auto">
          <img
            src={token}
            loading="lazy"
            alt="token"
            decoding="async"
            importance="high"
          />
        </div>
<<<<<<< HEAD
=======

        <CompanyLogos className="hidden relative z-10 mt-14 lg:block" />
<<<<<<< HEAD
>>>>>>> df33a36 (Add partner logos, clean up props)
=======
>>>>>>> df33a36 (Add partner logos, clean up props)
      </div>
      <CompanyLogos className="hidden relative z-10 mt-14 lg:block" />
    </Section>
  );
};

export default Hero;
