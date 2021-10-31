import { useState, useEffect } from 'react';
import './styles.css';

const SpeedTypingGame = () => {

  const [text, setTextTo] = useState('');
  const [timeRemaining, setTimeRemainingTo] = useState(5);
  const handleChange = ({ currentTarget: { value } }) =>
    setTextTo(value);

  const countWords = text => text.split(' ').filter(word => word).length;

  const handleClick = () => {
    const wordCount = countWords(text);
    console.log(wordCount)
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
      setTimeout(() => {
        setTimeRemainingTo(time => time - 1)
      }, 1000);
    }
  }, [timeRemaining]);

  console.log({ text });
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
      <h1>Word Count: ???</h1>
    </div>
  );
};

export default SpeedTypingGame;