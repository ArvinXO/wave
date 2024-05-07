import PropTypes from "prop-types";

const CapNotification = ({ className, title, subtitle }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center justify-center text-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <h6 className="mb-1 font-semibold text-base">{title}</h6>

      <div className="flex items-center">
        <ul className="flex "></ul>
        <div className="body-3 text-n-2">{subtitle}</div>
      </div>
    </div>
  );
};

CapNotification.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default CapNotification;
