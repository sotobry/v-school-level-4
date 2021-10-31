import { useState } from 'react';

const useToggler = (defaultIsOnValue = false) => {
  const [isOn, setIsOnTo] = useState(defaultIsOnValue);

  const toggle = () => setIsOnTo(isOn => !isOn);

  return [isOn, toggle];
};

export { useToggler };