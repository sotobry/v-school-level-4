import { useState, useEffect, useRef } from 'react';
const useGame = (startingTime = 5) => {
  const STARTING_TIME = startingTime; //In seconds

  const [text, setTextTo] = useState('');

  const [timeRemaining, setTimeRemainingTo] = useState(STARTING_TIME);
  const [isTimerActive, setIsTimerActiveTo] = useState(false);
  const [wordCount, setWordCountTo] = useState(null);

  const textAreaEl = useRef(null);


  const handleChange = ({ currentTarget: { value } }) =>
    setTextTo(value);

  const countWords = text => text.split(' ').filter(word => word).length;

  const startGame = () => {
    setTextTo('');
    setTimeRemainingTo(STARTING_TIME);
    setIsTimerActiveTo(true);
  };
  const endGame = () => {
    setIsTimerActiveTo(false);
    setWordCountTo(countWords(text));
  };

  const handleClick = () => {
    // setWordCountTo(0);
    startGame();
    textAreaEl.current.disabled = false;
    textAreaEl.current.focus();
  };

  useEffect(() => {
    if (timeRemaining) {
      if (isTimerActive) {
        setTimeout(
          () => setTimeRemainingTo(time => time - 1),
          1000
        );
      }
    }
    else if (isTimerActive) {
      endGame();
    }
  }, [timeRemaining, isTimerActive]);

  return {
    isTimerActive,
    text,
    textAreaEl,
    timeRemaining,
    wordCount,
    handleChange,
    handleClick,
  };
};

export { useGame };