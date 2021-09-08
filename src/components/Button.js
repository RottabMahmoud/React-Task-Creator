import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <div>
      {" "}
      <button
        onClick={onClick}
        style={{ backgroundColor: color }}
        className="btn"
      >
        {text}
      </button>
    </div>
  );
};

Button.defualtProps = {
  color: "steelblue",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onCLick: PropTypes.func
};
export default Button;
