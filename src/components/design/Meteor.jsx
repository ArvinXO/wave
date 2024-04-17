import { cn } from "../../utils/cn";
import PropTypes from "prop-types";

export const Meteors = ({ number, className, position }) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rounded-[999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: position.y + Math.random() * 100 + "px",
            left: position.x + Math.random() * 200 + "px",
            animationDelay: Math.random() * 1 + "s",
            animationDuration: Math.random() * 20 + 20 + "s", // Added more delay to make it slower
            opacity: Math.random() * 0.3 + 0.6,
            transition: "opacity 0.5s ease-in-out", // Added transition for smoother hover effect
          }}
        ></span>
      ))}
    </>
  );
};

Meteors.propTypes = {
  number: PropTypes.number,
  className: PropTypes.string,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};
