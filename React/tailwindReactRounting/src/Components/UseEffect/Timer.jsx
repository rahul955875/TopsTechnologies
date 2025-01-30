import React, { useEffect, useState } from "react";

function Timer() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    if (num >= 10) return;
    const count = setInterval(() => setNum((prev) => prev + 1), 100);
    return () => clearInterval(count);
  }, [num]);

  return <div className="text-9xl text-center">{num}</div>;
}

export default Timer;
