import { gradeUserString } from "@/util/string";
import { useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";
import styles from "@/styles/Home.module.css";
import testerStyles from "@/styles/TypeTester.module.css";
type Props = {
  sampleText: string;
};

export function TypeTester({ sampleText }: Props) {
  const [text, setText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const { correct, mistake, remaining } = gradeUserString(sampleText, text);
  const { seconds, minutes, hours, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

  useEffect(() => {
    if (text === sampleText) {
      pause();
      setIsComplete(true);
    } else if (text !== sampleText && text && !isRunning && !isComplete) {
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
    <div>
      <h1 style={{ fontFamily: "monospace" }} className={styles.title}>
        Welcome to TYPEBEAST!
      </h1>
      <p style={{ fontFamily: "monospace" }}>
        Time Taken : {hours} : {minutes} : {seconds}
      </p>
      <p style={{ fontFamily: "monospace" }}>WPM : {calcWPM()}</p>
      <p
        style={{
          lineHeight: "1.8rem",
          maxWidth: "30rem",
          fontFamily: "monospace",
        }}
      >
        <span
          style={{
            color: "green",
          }}
        >
          {correct}
          <span className={testerStyles.cursor} />
        </span>
        <span style={{ color: "red" }}>{mistake}</span>
        <span>{remaining}</span>
      </p>
      <textarea
        autoFocus
        style={{ width: "100%", height: "200px", marginTop: "1rem" }}
        onChange={(e) => setText(e.target.value)}
        disabled={isComplete}
      />
    </div>
  );
}
