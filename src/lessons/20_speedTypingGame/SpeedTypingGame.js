import { useState, useEffect } from 'react';
import './styles.css';

const SpeedTypingGame = () => {

  const [text, setTextTo] = useState('');
  const [timeRemaining, setTimeRemainingTo] = useState(5);
  const [isTimerActive, setIsTimerActiveTo] = useState(false);
  const [wordCount, setWordCountTo] = useState(null);

  const handleChange = ({ currentTarget: { value } }) =>
    setTextTo(value);

  const countWords = text => text.split(' ').filter(word => word).length;

  const handleClick = () => setIsTimerActiveTo(true);

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
    else {
      setIsTimerActiveTo(false);
      const wordCount = countWords(text);
      setWordCountTo(wordCount);
    }
  }, [timeRemaining, isTimerActive]);

  console.log({ text, isTimerActive, wordCount });
  return (
    <div className='SpeedTypingGame'>
      <h1>Speed Typing Game</h1>
      <textarea
        placeholder='Start typing here...'
        value={text}
        onChange={handleChange}
      />
      <h4>Time remaining: {timeRemaining} sec</h4>
      <button onClick={handleClick}>Start</button>
      <h1>Word Count: {wordCount === null ? `???` : wordCount}</h1>
    </div>
  );
};

export default SpeedTypingGame;