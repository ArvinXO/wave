import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div
      className={`${className} bg-gradient-to-b from-black to-transparent p-8 md:p-12 space-y-8 max-w-screen-2xl mx-auto backdrop-filter backdrop-blur-lg`}
    >
      <h5 className="tagline mb-3 text-center text-2xl text-n-1">
        Exchange partners and integrations
      </h5>
      <ul className="flex flex-wrap justify-center gap-8">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center w-[184px] h-[28px]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
