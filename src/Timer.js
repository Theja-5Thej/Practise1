import { useState, useEffect } from "react";
const Timer = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [start, setStart] = useState(false);
  useEffect(() => {
    let timer;
    if (start) {
      timer = setInterval(() => {
        setCurrentTime((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [start]);
  const handleReStart = () => {
    setCurrentTime(0);
    setStart(true);
  };
  return (
    <>
      <div>Timer-{currentTime}</div>
      <button onClick={handleReStart}>Restart</button>
      <button onClick={() => setStart(true)}>Start</button>
      <button onClick={() => setStart(false)}>Stop</button>
    </>
  );
};
export default Timer;
