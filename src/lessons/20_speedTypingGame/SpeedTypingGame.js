import { useState } from 'react';
import './styles.css';

const SpeedTypingGame = () => {

  const [text, setTextTo] = useState('')
  return (
    <div className='SpeedTypingGame'>
      <h1>Speed Typing Game</h1>
      <textarea
        placeholder='Start typing here...'
        value={text}
        onChange={ev => setTextTo(ev.currentTarget.value)}
      />
      <h4>Time remaining: 00:00</h4>
      <button>Start</button>
      <h1>Word Count: ???</h1>
    </div>
  );
};

export default SpeedTypingGame;