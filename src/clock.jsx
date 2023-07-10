import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Clock({ title, dateTime }) {
  const [currentTime, setCurrentTime] = useState(dateTime);

  useEffect(() => {
    const changeTime = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(changeTime);
    };
  }, []);

  return (
    <div>
      <h1 className="tittle">
        {title}
        <br />
        <span className="clock">{currentTime}</span>
      </h1>
    </div>
  );
}

export default Clock;
