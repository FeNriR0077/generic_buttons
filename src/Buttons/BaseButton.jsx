import PropTypes from 'prop-types';

const BaseButton = (props) => {
  const {
    buttonText = "",
    buttonId = "",
    buttonClass = "",
    disabled = false,
    onClick = null,
  } = props;

  const baseButtonClasses = "base-btn"


  return (
    <>
      <button 
        className={`${baseButtonClasses} ${buttonClass}`} 
        id={buttonId} 
        disabled={disabled} 
        onClick={onClick}
      >
        {buttonText ? buttonText : "TEXT"}
      </button>
    </>
  );
};

BaseButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};


export default BaseButton;
