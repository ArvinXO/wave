"use client";
import { cn } from "../../utils/cn";
import PropTypes from "prop-types";

const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
}) => {
  return (
    <main>
      <div
        className={cn(
          "absolute inset-0 ", // Adjust z-index to ensure it overlays everything
          className
        )}
      >
        <div className="absolute inset-0 overflow-hidden backdrop-blur-2xl">
          <div
            className={cn(
              `
              [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
              [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
              [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-800)_15%,var(--blue-600)_20%,var(--violet-800)_25%,var(--blue-400)_10%)]
              [background-image:var(--white-gradient),var(--aurora)]
              dark:[background-image:var(--dark-gradient),var(--aurora)]
              [background-size:100%,_200%]
              [background-position:50%_50%,50%_50%]
              filter blur-[90px] invert dark:invert-0
              after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
              after:dark:[background-image:var(--dark-gradient),var(--aurora)]
              after:[background-size:600%,_100%] 
              after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
              pointer-events-none
              absolute -inset-[10px] opacity-50 will-change-transform`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_20%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
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
