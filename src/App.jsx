import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import BaseButton from "./Buttons/BaseButton";
import Button from "./Buttons/Button";

function App() {
  return (
    <div className="App">
      <h1 className="heading-text heading">Buttons</h1>

      <div className="base-button">
        <BaseButton
          buttonClass = {"btn-filled"}
          buttonId = {"submitt"}
          buttonText = {"BASE"}
        />

        <Button />
      </div>
    </div>
  );
}

export default App;
