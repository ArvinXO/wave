import { cn } from "@/utils/cn";
import PropTypes from "prop-types";
import React from "react";

const AuroraBackground = ({ className, children }) => {
  const css = React.useMemo(() => {
    const whiteGradient =
      "repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)";
    const darkGradient =
      "repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)";
    const aurora =
      "repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-800)_15%,var(--blue-600)_20%,var(--violet-800)_25%,var(--blue-400)_10%)";
    const background = `var(--white-gradient),var(--aurora)`;
    const darkBackground = `var(--dark-gradient),var(--aurora)`;
    const backgroundSize = `100%,_200%`;
    const backgroundPosition = `50%_50%,50%_50%`;
    const filter = `blur-[90px] invert dark:invert-0`;
    const afterContent = `[""]`;
    const afterBackground = `var(--white-gradient),var(--aurora)`;
    const afterDarkBackground = `var(--dark-gradient),var(--aurora)`;
    const afterBackgroundSize = `600%,_100%`;
    const afterAnimation = `aurora`;
    const afterBackgroundAttachment = `fixed`;
    const afterMixBlendMode = `difference`;
    const pointerEvents = `none`;
    const absoluteInset = `-inset-[10px]`;
    const opacity = `50`;
    const willChange = `transform`;

    return cn(
      "z-8",
      "absolute inset-0 ", // Adjust z-index to ensure it overlays everything
      className,
      `
      [--white-gradient:${whiteGradient}]
      [--dark-gradient:${darkGradient}]
      [--aurora:${aurora}]
      [background-image:${background}]
      dark:[background-image:${darkBackground}]
      [background-size:${backgroundSize}]
      [background-position:${backgroundPosition}]
      filter ${filter}
      after:content-${afterContent} after:absolute after:inset-0 after:[background-image:${afterBackground}] 
      after:dark:[background-image:${afterDarkBackground}]
      after:[background-size:${afterBackgroundSize}] 
      after:animate-${afterAnimation} after:[background-attachment:${afterBackgroundAttachment}] after:${afterMixBlendMode}
      pointer-events-${pointerEvents}
      absolute ${absoluteInset} opacity-${opacity} will-change-${willChange}
    `
    );
  }, [className]);

  return (
    <main>
      <div className={css}>
        <div className="absolute inset-0 overflow-hidden backdrop-blur-2xl">
          <div></div>
        </div>
        {children}
      </div>
    </main>
  );
};

AuroraBackground.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  showRadialGradient: PropTypes.bool,
};

export default AuroraBackground;
