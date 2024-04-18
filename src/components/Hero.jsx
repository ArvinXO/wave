import { gradient, token } from "../assets";
import Section from "./Section";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import CompanyLogos from "./CompanyLogos";
import CapNotification from "./Capnotification";
import SparklesCore from "./design/Sparkle";
import { Custom_B } from "./design/Custom_Button";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section className="pt-[8rem] -mt-[6.25rem]" customPaddings id="hero">
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            <SparklesCore></SparklesCore>
            Orbital Token: Ignite Your Exploration {` `}
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Maximize productivity. Ride the orbital wave. Start now.
          </p>
          <Custom_B className="hidden md:inline-block" href="#signup">
            <h1 className="h6 text-center">EXPLORE</h1>
          </Custom_B>
        </div>
        <div className="flex justify-center items-center h-[200px] md:h-auto">
          <div className="aspect-[33/3] overflow-hidden md:aspect-[188/210]">
            <img
              src={token}
              loading="lazy"
              className="w-full h-auto md:w-auto md:h-auto max-w-[650px] mx-auto" // Set maximum width and center the image
              alt="token"
            />
          </div>

          <ScrollParallax isAbsolutelyPositioned>
            <CapNotification
              className="hidden absolute -left-[.2rem] bottom-[36rem] w-[25rem] xl:flex"
              title="Staking Rewards "
              subtitle={"Earn up to 20% APY"}
            />
          </ScrollParallax>
          <ScrollParallax isAbsolutelyPositioned>
            <CapNotification
              className="hidden absolute -right-[.0rem] bottom-[36rem] w-[20rem] xl:flex"
              title="Supply Cap "
              subtitle={"100,000,000 ORB"}
            />
          </ScrollParallax>
          <ScrollParallax isAbsolutelyPositioned>
            <CapNotification
              className="hidden absolute -left-[-29rem] bottom-[4rem] w-[30rem] xl:flex"
              title="Community Governance"
              subtitle={"Vote on proposals"}
            />
          </ScrollParallax>
        </div>
        <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[208%] lg:-top-[104%] opacity-10">
          <img src={gradient} className="w-full" alt="hero" />
        </div>
      </div>

      <CompanyLogos className="hidden relative z-10 mt-14 lg:block" />
    </Section>
  );
};

export default Hero;
