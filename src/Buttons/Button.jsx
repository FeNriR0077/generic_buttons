import BaseButton from "./BaseButton";

const Button = (props) => {

  const {
    buttonText = "",
    buttonId = "",
    buttonClass = "",
    disabled = false,
    variant = "filled",
    color = "primary",
    size = "md"
  } = props
  

  return (
    <>
      <BaseButton
        buttonText={buttonText}
        buttonClass={`btn-${variant} btn-${color} btn-${size} ${buttonClass}`}
        buttonId={buttonId}
        disabled={disabled}
      />
    </>
  );
};



export default Button;
