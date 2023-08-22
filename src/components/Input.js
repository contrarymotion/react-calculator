import "./Input.css";

// This component displays provided text and result values within styled div elements.
const Input = ({ text, result }) => {
  return <div className="input-wrapper">
      <div className="result">
        <h1>{result}</h1>
      </div>

      <div className="text">
        <h3>{text}</h3>
      </div>
      </div>;
}

export default Input;