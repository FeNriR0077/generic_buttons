import PropTypes from 'prop-types';
import BaseButton from "./BaseButton";

const Button = (props) => {

  const {className, variant, color, size, width, ...rest} = props
  const classes = `btn-${variant}-${color} btn-${size} width-${width} ${className}`
  
  return (
    <>
      <BaseButton
        className={classes}
        {...rest}
      />
    </>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func
  
};

Button.defaultProps = {
  id : "",
  className : "",
  disabled : false,
  variant : "filled",
  color : "primary",
  size : "md",
  onClick : null,
  startIcon : null,
  endIcon : null,
  width : null
};


export default Button;
