import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { TYPE_SAMPLE, gradeUserString } from "@/util/string";
import { useStopwatch } from "react-timer-hook";

export default function Home() {
  const [text, setText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const { correct, mistake, remaining } = gradeUserString(TYPE_SAMPLE, text);
  const { seconds, minutes, hours, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

  useEffect(() => {
    if (text === TYPE_SAMPLE) {
      pause();
      setIsComplete(true);
    } else if (text !== TYPE_SAMPLE && text && !isRunning && !isComplete) {
      start();
    }
  }, [text]);

  function calcWPM() {
    if (seconds === 0 && minutes === 0 && hours === 0) return 0;
    const numWords = correct.length / 5;
    const minutesFromSeconds = seconds === 0 ? 0 : seconds / 60;
    const numMinutes = hours * 60 + minutes + minutesFromSeconds;
    return Math.round(numWords / numMinutes);
  }

  return (
    <>
      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>Welcome to TYPEBEAST!</h1>
          <p>
            Time Taken : {hours} : {minutes} : {seconds}
          </p>
          <p>WPM : {calcWPM()}</p>
          <p>
            <span style={{ color: "green" }}>{correct}</span>
            <span style={{ color: "red" }}>{mistake}</span>
            <span>{remaining}</span>
          </p>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            disabled={isComplete}
          />
        </div>
      </main>
    </>
  );
}
