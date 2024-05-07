import StarSvg from "./PlusSvg";

import PropTypes from "prop-types";

const SectionSvg = ({ crossesOffset }) => {
  return (
    <>
      <StarSvg
        className={`hidden absolute -top-[0.3125rem] left-[1.5625rem] ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:left-[2.1875rem]`}
      />

      <StarSvg
        className={`hidden absolute  -top-[0.3125rem] right-[1.5625rem] ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:right-[2.1875rem]`}
      />
    </>
  );
};

SectionSvg.propTypes = {
  crossesOffset: PropTypes.any.isRequired,
};

export default SectionSvg;
