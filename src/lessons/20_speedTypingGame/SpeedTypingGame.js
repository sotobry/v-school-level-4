import { useState } from 'react';
import './styles.css';

const SpeedTypingGame = () => {

  const [text, setTextTo] = useState('');

  const handleChange = ({ currentTarget: { value } }) =>
    setTextTo(value);

  const countWords = text => text.split(' ').filter(word => word).length;

  const handleClick = () => {
    const wordCount = countWords(text);
    console.log(wordCount)
  };

  console.log({ text });
  return (
    <div className='SpeedTypingGame'>
      <h1>Speed Typing Game</h1>
      <textarea
        placeholder='Start typing here...'
        value={text}
        onChange={handleChange}
      />
      <h4>Time remaining: 00:00</h4>
      <button onClick={handleClick}>Start</button>
      <h1>Word Count: ???</h1>
    </div>
  );
};

export default SpeedTypingGame;