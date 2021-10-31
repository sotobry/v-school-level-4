import { useState, useEffect } from 'react';
import './styles.css';

const SpeedTypingGame = () => {
  const STARTING_TIME = 5; //In seconds

  const [text, setTextTo] = useState('');
  const [timeRemaining, setTimeRemainingTo] = useState(STARTING_TIME);
  const [isTimerActive, setIsTimerActiveTo] = useState(false);
  const [wordCount, setWordCountTo] = useState(null);

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
  };

  // let intervalId = null;
  // useEffect(() => {
  // intervalId = setInterval(() => {
  // setTimerTo(timer => timer - 1);
  // }, 1000);
  // if (!timer) return () => {
  // clearInterval(intervalId);
  // }
  // }, [])

  // useEffect(() => {
  // if (timer === 0) return () => clearInterval(intervalId);
  // }, [timer]);

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