import React, { useEffect, useState } from "react";

function Timer() {
  const [num, setNum] = useState(0);
  const [isRunning , setIsrunning] = useState(true)
  useEffect(() => {
    if (!isRunning) return;
    const count = setInterval(() => setNum((prev) => prev + 1), 100);
    return () => clearInterval(count);
  }, [isRunning]);

  return (
    <>
      <div className="text-9xl text-center"><div>{num}</div>
        <button onClick={()=>setIsrunning(prev => !prev)}>{isRunning? "Stop" : "Start"}</button>
      </div>
    </>
  );
}

export default Timer;
