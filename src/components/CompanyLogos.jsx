import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div
      className={`${className} bg-gradient-to-b from-slate-600 to-transparent p-8 md:p-12 space-y-10 max-w-screen-2xl mx-auto backdrop-filter backdrop-blur-3xl`}
    >
      <h5 className="tagline mb-3 text-center text-2xl text-n-1 py-2">
        Exchange partners and integrations
      </h5>
      <ul className="flex flex-wrap justify-center gap-10">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center w-[184px] h-[28px]"
            key={index}
          >
            <img src={logo} width={104} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

import PropTypes from "prop-types";

CompanyLogos.propTypes = {
  className: PropTypes.string.isRequired,
};

export default CompanyLogos;
