import BaseButton from "./BaseButton";
import PropTypes from 'prop-types';

const Button = (props) => {

  let {
    buttonText = "",
    buttonId = "",
    buttonClass = "",
    disabled = false,
    variant = "filled",
    color = "primary",
    size = "md",
    onClick=null,
    startIcon=null,
    endIcon=null,
    children
  } = props
  

  return (
    <>
      <BaseButton
        buttonText={children ? buttonText=children : buttonText}
        buttonClass={`btn-${variant}-${color} btn-${size} ${buttonClass}`}
        buttonId={buttonId}
        disabled={disabled}
        onClick={onClick}
      />
    </>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.string
  
};


export default Button;
