import brackets from "../assets/svg/Brackets";

const TagLine = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center text-base ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 px-10 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
