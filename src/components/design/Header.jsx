import { background } from "../../assets";

export const Rings = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-[48.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
      <div className="absolute top-1/2 left-1/2 w-[34.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-6 pointer-events-none lg:hidden">
      <div className="absolute inset-6 opacity-[.046]">
        <img
          className="w-full h-full object-cover"
          src={background}
          width={688}
          height={953}
          alt="Background"
        />
      </div>
      <Rings />
    </div>
  );
};
