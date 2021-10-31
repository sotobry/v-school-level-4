import './styles.css';
import { useGame } from './useGame';
const SpeedTypingGame = () => {

  const {
    isTimerActive,
    text,
    textAreaEl,
    timeRemaining,
    wordCount,
    handleChange,
    handleClick
  } = useGame(5);

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