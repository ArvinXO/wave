import PropTypes from "prop-types";

const StarSvg = ({ className = "" }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke=""
    >
      {/* Horizontal lines */}
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="12"
        y1="3"
        x2="12"
        y2="21"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Diagonal lines */}
      <line
        x1="5.5"
        y1="5.5"
        x2="18.5"
        y2="18.5"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="5.5"
        y1="18.5"
        x2="18.5"
        y2="5.5"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

StarSvg.propTypes = {
  className: PropTypes.string,
};

export default StarSvg;
