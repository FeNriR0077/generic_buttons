import PropTypes from 'prop-types';

const BaseButton = (props) => {
  const {
    buttonText = "",
    buttonId = "",
    buttonClass = "",
    disabled = false,
  } = props;

  const baseButtonClasses = "base-btn"

  return (
    <>
      <button 
        className={`${baseButtonClasses} ${buttonClass}`} 
        id={buttonId} 
        disabled={disabled} 
      >
        {buttonText ? buttonText : "TEXT"}
      </button>
    </>
  );
};

BaseButton.propTypes = {
  disabled: PropTypes.bool
};


export default BaseButton;
