import { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/utils/cn";

import PropTypes from "prop-types";

export function Custom_B({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}) {
  return (
    <Component
      className={cn(
        "relative transition-colors hover:text-color-5 text-white py-3 px-4 rounded-lg shadow-lg bg-gradient-to-br from-purple-800 to-transparent",
        "opacity-0 md:opacity-100",
        containerClassName,
        className // Added className here
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="justify-center inset-0 absolute rounded-lg shadow-lg"
        style={{ borderRadius: `calc(${borderRadius} * 0.9)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-2 w-2 opacity-[0.5] bg-[radial-gradient(var(--sky-200)_40%,transparent_90%)]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className="justify-center rounded-lg" // Removed redundant cn() here
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}) => {
  const pathRef = useRef();
  const progress = useMotionValue(0);

  useEffect(() => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      const time = performance.now();
      progress.set((time * pxPerMillisecond) % length);
    }
  }, [duration, progress]);

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useTransform(
    [x, y], // Modified to use array syntax
    (x, y) =>
      `translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`
  );

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

MovingBorder.propTypes = {
  children: PropTypes.node,
  duration: PropTypes.number,
  rx: PropTypes.string,
  ry: PropTypes.string,
};

Custom_B.propTypes = {
  borderRadius: PropTypes.string,
  children: PropTypes.node,
  as: PropTypes.elementType,
  containerClassName: PropTypes.string,
  borderClassName: PropTypes.string,
  duration: PropTypes.number,
  className: PropTypes.string, // Added prop type for className
};
