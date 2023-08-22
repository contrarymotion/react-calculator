import { useState } from 'react';
import { evaluate } from 'mathjs';

import './App.css';
import Button from './components/Button';
import Input from './components/Input';

const App = () => {
  // State variables to hold the input text and calculation result
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  // Function to add values to the input text
  const addToText = (val) => {
    setText((text) => [...text, val + " "]);
  }

    // Function to reset input and result
  const resetInput = () => {
    setText("")
    setResult("")
  }


  // Color for arithmetic operator buttons
  const buttonColor = "#f2a33c";

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result}/>
        <div className="row">
          <Button symbol="7" handleClick={addToText}/>
          <Button symbol="8" handleClick={addToText}/>
          <Button symbol="9" handleClick={addToText}/>
          <Button symbol="/" color={buttonColor} handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText}/>
          <Button symbol="5" handleClick={addToText}/>
          <Button symbol="6" handleClick={addToText}/>
          <Button symbol="*" color={buttonColor} handleClick={addToText}/>
        </div>  
        <div className="row">
          <Button symbol="1" handleClick={addToText}/>
          <Button symbol="2" handleClick={addToText}/>
          <Button symbol="3" handleClick={addToText}/>
          <Button symbol="+" color={buttonColor} handleClick={addToText}/>
        </div>  
        <div className="row">
          <Button symbol="0" handleClick={addToText}/>
          <Button symbol="." handleClick={addToText}/>
          <Button symbol="=" handleClick={addToText}/>
          <Button symbol="-" color={buttonColor} handleClick={addToText}/>
        </div> 
        <Button symbol="Clear" color="red" handleClick={resetInput}/>   
      </div>
    </div>
  );
}

export default App;
