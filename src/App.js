import { useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [intervalTracker, setIntervalTracker] = useState(null); // Use null as initial value

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleStart = () => {
    const intervalId = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
    setIntervalTracker(intervalId); // Store the interval ID
  };

  const handleStop = () => {
    clearInterval(intervalTracker); // Stop the stopwatch by clearing the interval
    setIntervalTracker(null); // Set intervalTracker to null (indicating stopped state)
  };

  const handleReset = () => {
    clearInterval(intervalTracker); // Clear interval when resetting
    setTime(0); // Reset the time to 0
    setIntervalTracker(null); // Set intervalTracker to null when reset
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      {/* Display the formatted time */}
      <p>Time: {formatTime(time)}</p>
      {/* Conditionally render Start/Stop button */}
      {intervalTracker === null ? (
        <button onClick={handleStart}>Start</button> // Start button when not running
      ) : (
        <button onClick={handleStop}>Stop</button> // Stop button when running
      )}
      {/* Reset button, which is always visible */}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
