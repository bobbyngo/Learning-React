import { useState, useRef, useEffect } from 'react';

export default function useWordGame(startingTime = 5) {
  const [textArea, setTextArea] = useState('');
  const [time, setTime] = useState(startingTime);
  const [isStart, setIsStart] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (time > 0 && isStart) {
      setTimeout(() => setTime((prevTime) => prevTime - 1), 1000);
    } else if (time === 0) {
      endGame();
    }
  }, [time, isStart]);

  function handleChange(event) {
    const { value } = event.target;
    setTextArea(value);
  }

  function countWords() {
    return textArea.split(' ').filter((word) => word !== '').length;
  }

  function startGame() {
    setIsStart(true);
    setTime(startingTime);
    setTextArea('');
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
  }

  function endGame() {
    setIsStart(false);
    setWordCount(countWords());
  }
  return {
    textAreaRef,
    isStart,
    textArea,
    handleChange,
    time,
    startGame,
    wordCount,
  };
}
