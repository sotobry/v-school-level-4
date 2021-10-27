import { useState, useEffect } from 'react';
import getRandomColor from 'randomcolor';
const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [color, setColorTo] = useState('');

  const increment = () => setCount(count => count + 1);
  const decrement = () => setCount(count => count - 1);

  useEffect(() => {
    const randomColor = getRandomColor();
    setColorTo(randomColor);
  }, [count]);

  useEffect(() => {
    const intervalId = setInterval(() => increment(), 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1 style={{ color }}>{count}</h1>
      {/* <button onClick={increment}>Increment</button> */}
      {/* <button onClick={decrement}>Decrement</button> */}
    </div>
  );
}

export default UseEffect;
