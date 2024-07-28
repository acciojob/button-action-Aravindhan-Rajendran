import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  // State to control the visibility of the paragraph
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App" id="main">
      <p id="para" className={isVisible ? 'show' : 'hide'}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
      </p>
      <button type="button" id="click" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

export default App;
