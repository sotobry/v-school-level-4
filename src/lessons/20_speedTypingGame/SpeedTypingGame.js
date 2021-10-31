import { useState, useEffect, useRef } from 'react';
import './styles.css';

const SpeedTypingGame = () => {
  const STARTING_TIME = 5; //In seconds

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
    textAreaEl.current.focus();
  };

  // const intervalRef = useRef();
  // useEffect(() => {
  //   if (timeRemaining === STARTING_TIME) {
  //     const intervalId = setInterval(() => {
  //       setTimeRemainingTo(time => time - 1);
  //     }, 1000);

  //     intervalRef.current = intervalId;
  //   }
  //   else if (timeRemaining === 1) return () => {
  //     clearInterval(intervalRef.current);
  //   }
  // }, [timeRemaining]);

  // useEffect(() => {
  //   if (timeRemaining === 0) return () => clearInterval(intervalId);
  // }, [timeRemaining]);


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

  return (
    <div className='SpeedTypingGame'>
      <h1>Speed Typing Game</h1>
      <textarea
        placeholder='Start typing here...'
        value={text}
        onChange={handleChange}
        disabled={!isTimerActive}
        ref={textAreaEl}
      />
      <h4>Time remaining: {timeRemaining} sec</h4>
      <button
        onClick={handleClick}
        disabled={isTimerActive}
      >{isTimerActive ? 'Running...' : 'Start'}</button>
      <h1>Word Count: {wordCount === null ? `???` : wordCount}</h1>
    </div>
  );
};

export default SpeedTypingGame;