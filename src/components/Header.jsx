import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { wave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section[id]");

      let activeSection = "";
      sections.forEach((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          activeSection = section.id;
        }
      });

      setActiveSection(activeSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/70 lg:backdrop-blur-sm${
        openNavigation ? " bg-n-8/70" : " bg-transparent/70"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 bg-transparent">
        <a
          className="block w-[12rem] xl:mr-8 lg:mr-0 bg-transparent"
          href="#hero"
        >
          <img src={wave} width={94} height={40} alt="Wave logo" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex justify-center items-center " : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-3 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-lg lg:font-semibold  ${
                  (item.url === pathname.hash && pathname.hash !== "") ||
                  item.url === `#${activeSection}`
                    ? "active-nav-item" // Apply 'active-nav-item' class for highlighting
                    : "inactive-nav-item" // Apply 'inactive-nav-item' class for non-highlighted items
                } lg:leading-5 lg:hover:text-n-1 xl:px-12 border-button`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <div className="hidden justify-end lg:flex ">
          <button
            onClick={() => {
              window.location.href = "#signup";
            }}
            className="text-n-1/50 border-button hover:text-n-1 mr-4"
          >
            NEW ACCOUNT
          </button>

          <button
            onClick={() => {
              window.location.href = "#login";
            }}
            className="button text-base border-button hover:text-n-1 relative bg-gradient-to-br from-purple-800 to-transparent border-2 border-white text-white py-2 px-4 rounded-lg shadow-lg"
          >
            <span className="z-10 relative justify-end">Sign in</span>
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-20 rounded-lg z-0"></span>
          </button>
        </div>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
