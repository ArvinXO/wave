import PropTypes from "prop-types";

const Section = ({ className, id, children, customPaddings }) => {
  return (
    <div
      id={id}
      className={`
      relative 
      ${customPaddings || `py-10 lg:py-16 xl:py-20`} 
      ${className || ""}`}
    >
      {children}
    </div>
  );
};

Section.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node,
  customPaddings: PropTypes.string,
};

export default Section;
