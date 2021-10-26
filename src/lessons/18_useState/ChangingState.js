import { useState } from 'react';

// Convert the class below to a functional component that uses the useState hook to initalize a count vartiable to 0 and display the count on the screen.
// Don't worry about the part where the button changes the count quite yet, that's what you're here to learn about!

const ChangingState = () => {
  const [count, setCountTo] = useState(0);

  const increment = () => setCountTo(count => count + 1);
  const decrement = () => setCountTo(count => count - 1);
  const handleClick = ev => {
    const { name } = ev.currentTarget;
    if (name === 'increment') increment();
    else if (name === 'decrement') decrement();
  }

  return (
    <div>
      <h1>{count}</h1>
      <button name='increment' onClick={handleClick}>Increment</button>
      <button name='decrement' onClick={handleClick}>Decrement</button>
    </div>
  );
}

export default ChangingState;