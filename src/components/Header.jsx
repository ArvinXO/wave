import { brainwave } from "../assets";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const pathname = useLocation();
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ">
      <div className="flex items-center justify-between px-5 lg:7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12em] xl:mr-8" href="#hero">
          <img src={brainwave} width="190" height="40" alt="Wave" />
        </a>
        <nav className="hidden lg:flex lg:mx-auto lg:bg-transparent">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className={`block relative font-code text-2xl uppercase transition-colors hover:text-color-1 ${
                item.onlyMobile ? "lg:hidden" : ""
              } px-6 py-6 md:pd-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                item.url === pathname.hash ? "text-n1/50" : "text-gray-500"
              } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
            >
              {item.title}
            </a>
          ))}
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>

        <Button href="#login" className="hidden lg:flex">
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default Header;
