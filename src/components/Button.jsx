const GradientButton = ({ className, href, onClick, children, px }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } text-white py-2 px-4 rounded-lg shadow-lg bg-gradient-to-br from-purple-800 to-transparent border-2 border-white ${
    className || ""
  }`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default GradientButton;
