import { useState, useEffect } from "react";

interface Time {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

interface Timer {
  time: Time;
  isRunning: boolean;
  totalTime: number;
  toggleTimer: () => void;
  resetTimer: () => void;
}

export function useTimer(): Timer {
  const [time, setTime] = useState<Time>({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  const [isRunning, setIsRunning] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [stopTime, setStopTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      setStartTime(Date.now());

      interval = setInterval(() => {
        setTime((prevTime) => {
          const newTime = { ...prevTime };
          newTime.milliseconds += 10;

          if (newTime.milliseconds >= 1000) {
            newTime.seconds += 1;
            newTime.milliseconds = 0;
          }

          if (newTime.seconds >= 60) {
            newTime.minutes += 1;
            newTime.seconds = 0;
          }

          if (newTime.minutes >= 60) {
            newTime.hours += 1;
            newTime.minutes = 0;
          }

          return newTime;
        });
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleTimer = () => {
    if (isRunning) {
      setStopTime(Date.now());
      console.log("STOP TIME ", startTime, stopTime);
      setTotalTime((prevTotalTime) => prevTotalTime + stopTime - startTime);
      console.log("TOTAL TIME ", totalTime);
    } else {
      setStartTime(Date.now());
    }

    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const resetTimer = () => {
    setTime({
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });
    setTotalTime(0);
    setStartTime(0);
    setStopTime(0);
  };

  return { time, isRunning, totalTime, toggleTimer, resetTimer };
}
