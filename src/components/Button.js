import "./Button.css";
// This Button component renders a customizable button element that displays the given symbol text. The provided handleClick function is called when the button is clicked, with the symbol as an argument. The color prop determines the button's background color based on the provided value. The styling is managed using CSS classes defined in a separate "Button.css" file.

// Button component takes symbol, color, and handleClick function as props
const Button = ({ symbol, color, handleClick }) => {
  return (
    // Div element representing the button
    <div

      onClick={() => handleClick(symbol)}
      className="button-wrapper"
      style={{ backgroundColor: color }}
    >
      {symbol}
    </div>
  );
};

export default Button;