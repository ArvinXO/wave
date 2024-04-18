import TagLine from "./Tagline";

import PropTypes from "prop-types";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mb-14 sm:mx-6 lg:mx-auto md:text-center`}
    >
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

Heading.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  tag: PropTypes.string,
};

export default Heading;
