import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import BaseButton from "./Buttons/BaseButton";
import Button from "./Buttons/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";

function App() {
  const handleClick = () => {
    console.log("clickeddd");
  };

  return (
    <div className="App">
      <div className="main-container">
        <h1 className="heading-text heading">Buttons</h1>

        <div className="base-button button-container">
          <BaseButton id={"submitt"} >
            BASE
          </BaseButton>
        </div>

        <div className="primary-button-container button-container">
          <p>Primary Color</p>
          <Button variant={"filled"} onClick={handleClick} >
            FILLED
          </Button>

          <Button  size="lg" color="secondary" variant={"outlined"} onClick={handleClick}>
            OUTLINED
          </Button>

          <Button variant={"text"} onClick={handleClick} >
            TEXT
          </Button>

          <Button variant="text" size="md" onClick={handleClick} >
            <FontAwesomeIcon icon={faUser} />
          </Button>
          
        </div>

        {/* <div className="secondary-button-container button-container">
          <p>Secondary Color</p>
          <Button variant={"filled"} color="secondary" onClick={handleClick} />
          <Button
            variant={"outlined"}
            color="secondary"
            onClick={handleClick}
          />
          <Button variant={"text"} color="secondary" onClick={handleClick} />
        </div>

        <div className="tertiary-button-container button-container">
          <p>Tertiary Color</p>
          <Button variant={"filled"} color="tertiary" onClick={handleClick} />
          <Button variant={"outlined"} color="tertiary" onClick={handleClick} />
          <Button variant={"text"} color="tertiary" onClick={handleClick} />
        </div>

        <div className="success-button-container button-container">
          <p>Success Color</p>
          <Button variant={"filled"} color="success" onClick={handleClick} />
          <Button variant={"outlined"} color="success" onClick={handleClick} />
          <Button variant={"text"} color="success" onClick={handleClick} />
        </div>

        <div className="error-button-container button-container">
          <p>Error Color</p>
          <Button variant={"filled"} color="error" onClick={handleClick} />
          <Button variant={"outlined"} color="error" onClick={handleClick} />
          <Button variant={"text"} color="error" onClick={handleClick} />
        </div>

        <div className="button-container">
          From Children
          <Button buttonText="hi" variant={"filled"} color="error" onClick={handleClick} >
            Children
          </Button> 
        </div> */}
      </div>
    </div>
  );
}

export default App;
