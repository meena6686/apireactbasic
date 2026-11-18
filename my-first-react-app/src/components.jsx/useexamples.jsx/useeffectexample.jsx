import { useEffect, useState } from "react";

export default function UseEffectExample() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Current Time</h2>
      <h3>{time.toLocaleTimeString()}</h3>
    </div>
  );
}