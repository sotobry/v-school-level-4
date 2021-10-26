import { useState } from 'react';

const UseState = () => {

  const [answer] = useState('Yes');
  return (
    <div>
      <h1>Is state important? {answer}</h1>
    </div>
  );
}
export default UseState;