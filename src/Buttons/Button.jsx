import BaseButton from "./BaseButton";

const Button = (props) => {

  const {
    buttonText = "",
    buttonId = "",
    buttonClass = "",
    disabled = false,
    variant = "filled",
    color = "primary",
    size = "md",
    onClick=null
  } = props
  

  return (
    <>
      <BaseButton
        buttonText={buttonText}
        buttonClass={`btn-${variant}-${color} btn-${size} ${buttonClass}`}
        buttonId={buttonId}
        disabled={disabled}
        onClick={onClick}
      />
    </>
  );
};



export default Button;
