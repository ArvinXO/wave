import { gradient, token } from "../assets";
import GradientButton from "./Button";
import Section from "./Section";
import { Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import CompanyLogos from "./CompanyLogos";
import CapNotification from "./Capnotification";
import SparklesCore from "./design/Sparkle";
import { Custom_B } from "./design/Custom_Button";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section className="pt-[12rem] -mt-[6.25rem]" customPaddings id="hero">
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            <SparklesCore></SparklesCore>
            Orbital Token: Ignite Your Exploration {` `}
            {/* <span className="inline-block relative">
              Brainwave{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span> */}
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Maximize productivity. Ride the orbital wave. Start now.
          </p>
          <Custom_B className="hidden md:inline-block" href="#signup">
            <h1 className="h6 text-center">EXPLORE</h1>
          </Custom_B>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-34">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={token}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]   "
                  width={1024}
                  height={490}
                  alt="token"
                />
                <ScrollParallax isAbsolutelyPositioned>
                  <CapNotification
                    className="hidden absolute -left-[7.5rem] bottom-[16rem] w-[18rem] xl:flex"
                    title="Staking Rewards "
                    subtitle={"Earn up to 20% APY"}
                  />
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <CapNotification
                    className="hidden absolute -right-[7.5rem] bottom-[26rem] w-[18rem] xl:flex"
                    title="Supply Cap "
                    subtitle={"100,000,000 ORB"}
                  />
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <CapNotification
                    className="hidden absolute -right-[7.5rem] bottom-[6rem] w-[18rem] xl:flex"
                    title="Community Governance"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[208%] lg:-top-[104%] opacity-25">
            <img src={gradient} className="w-full" alt="hero" />
          </div>
        </div>

        <CompanyLogos className="hidden relative z-10 mt-14 lg:block" />
      </div>
    </Section>
  );
};

export default Hero;
