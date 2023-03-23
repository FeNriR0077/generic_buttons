import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import BaseButton from "./Buttons/BaseButton";
import Button from "./Buttons/Button";

function App() {

  const handleClick = () => {
    console.log("clickeddd")
  }

  return (
    <div className="App">
      <h1 className="heading-text heading">Buttons</h1>

      <div className="base-button">
        <BaseButton
          buttonId = {"submitt"}
          buttonText = {"BASE"}
        />

        <Button
          variant={"filled"}
          color={"primary"}
          size = "md"
          onClick={handleClick}
        />
        <Button
          variant={"outlined"}
          color="secondary"
          size="md"
        />
        <div>
        <Button
          variant={"text"}
          color="primary"
          size="md"
        />
        </div>
        
      </div>
    </div>
  );
}

export default App;
