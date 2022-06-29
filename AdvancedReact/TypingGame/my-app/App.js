import React from 'react';
import useWordGame from './useWordGame';
function App() {
  const {
    textAreaRef,
    isStart,
    textArea,
    handleChange,
    time,
    startGame,
    wordCount,
  } = useWordGame(10);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        ref={textAreaRef}
        disabled={!isStart}
        name='textArea'
        value={textArea}
        onChange={handleChange}
      />
      <h4>Time reminaing: {time}</h4>
      <button disabled={isStart} onClick={startGame}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
