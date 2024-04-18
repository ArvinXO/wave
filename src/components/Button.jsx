import PropTypes from "prop-types";

const GradientButton = ({ className, href, onClick, children, px }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } text-white py-2 px-4 rounded-lg shadow-lg bg-gradient-to-br from-purple-800 to-transparent border-2 border-white ${
    className || ""
  }`;

  const spanClasses = "relative z-10";

  return href ? (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
    </a>
  ) : (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );
};

GradientButton.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  px: PropTypes.string,
};

export default GradientButton;
