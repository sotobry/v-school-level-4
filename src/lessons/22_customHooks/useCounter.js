import { useState } from 'react';

const useCounter = () => {
  const [count, setCountTo] = useState(0);
  const increment = () => setCountTo(count => count + 1);
  return [count, increment];
};

export default useCounter;