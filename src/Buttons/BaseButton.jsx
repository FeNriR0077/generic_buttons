import PropTypes from "prop-types";

const BaseButton = (props) => {
  const { children, className, startIcon, endIcon, ...rest } = props;
  const classes = `base-btn ${className}`;

  if (startIcon || endIcon) {
    return (
      <>
        <button className={classes} {...rest}>
          <span className="start-icon">{startIcon}</span>

          {children}

          <span className="end-icon">{endIcon}</span>
        </button>
      </>
    );
  } else {
    return (
      <button className={classes} {...rest}>
      {children}
    </button>
    )
  }
};

BaseButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

BaseButton.defaultProps = {
  id: "",
  className: "",
  disabled: false,
  onClick: null,
  startIcon: null,
  endIcon: null,
  size: "md"
};

export default BaseButton;
