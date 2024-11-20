import { useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [intervalTracker, setIntervalTracker] = useState(-1);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);/// here floor div is for min to sec 
    const remainingSeconds = seconds % 60;/// mod div will give the remaining sec for exam take 130 sec should be represnted as 2 min 10 sec 2 min weill get by 
    // floor div operator and normal div with modulo operator 
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleStart = () => {
    const intervalId = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
    setIntervalTracker(intervalId);
    /// setIntervalTracker will store the interval id
  };

  const handleStop = () => {
    clearInterval(intervalTracker);
    setIntervalTracker(-1); /// for stop we no need to rest the time
    /// just clearInterval is ok ryt
  };

  const handleReset = () => {
    clearInterval(intervalTracker); /// clearIntervalTracker same as above
    setTime(0); /// rest the time to 0
    setIntervalTracker(-1);
  };

  return (
    /// syntax for the UI
    <div>
      <h1>StopWatch</h1>
      {/*the curly braces below used to insert the dynamic expressions  */}
      <p>Time: {formatTime(time)}</p>
      {/*conditionally render the UI if the interval Tracker has same value as inital value then start the button */}
      {intervalTracker !== -1 ? (
        <button onClick={handleStop}>Stop</button>
      ) : (
        /// assign the handleStart func as event handler to the onClick event
        <button onClick={handleStart}>Start</button>
      )}
      {/* assigning the handleReset function as the event handler for the onClick event. */}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
