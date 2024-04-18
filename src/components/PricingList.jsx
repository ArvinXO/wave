import { check } from "../assets";
import { airdrops } from "../constants";
import GradientButton from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {airdrops.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col justify-center items-center w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 hover:bg-indigo-950  transition-colors duration-300 ${
            item.apy_percentage === "15"
              ? "border-indigo-700 border-[2px]"
              : "border-white border-[2px]"
          }`}
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.apy_percentage && (
              <>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.apy_percentage}%
                </div>
              </>
            )}
          </div>

          <GradientButton
            className="w-full mb-6"
            href={
              item.apy_percentage
                ? "/pricing"
                : "$mailto:teymouri.arvin@gmail.com"
            }
            white={!!item.apy_percentage}
          >
            {item.apy_percentage < 30 ? "Get started" : "Contact us"}
          </GradientButton>
          {item.apy}

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
