import { useState } from "react";
import './styles.css'; // Import the styles


function Counter() {
  // Declare state variable for count and the setter function setCount
  const [count, setCount] = useState(0);

  // Increment function
  const increment = () => setCount(count + 1);

  // Decrement function
  const decrement = () => setCount(count - 1);

  return (
    <div>
         <h2 className="heading">Counter App</h2>
      <h1>{count}</h1>
      <button onClick={increment}>INC</button>
      <button onClick={decrement}>DEC</button>
    </div>
  );
}

export default Counter;
