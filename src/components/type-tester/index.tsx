import { gradeUserString } from "@/util/string";
import { useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";
import styles from "@/styles/Home.module.css";
import testerStyles from "@/styles/TypeTester.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  resetTypeTester,
  selectTypeTesterState,
  setCurrentMistakeLength,
  setTotalKeyStrokes,
  setTotalMistakes,
  setUserText,
} from "@/redux/typeTester/slice";
import { completeTypeTesterSample } from "@/redux/typeTester/thunks";
type Props = {
  sampleText: string;
  sampleId: string;
  onComplete: () => void;
};

export function TypeTester({ sampleText, sampleId }: Props) {
  const {
    isComplete,
    userText,
    totalKeyStrokes,
    currMistakeLength,
    totalMistakes,
  } = useSelector(selectTypeTesterState);
  const dispatch = useDispatch();
  const { correct, mistake, remaining } = gradeUserString(sampleText, userText);
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

  useEffect(() => {
    if (userText === sampleText) {
      pause();
      // Note this works but the linter just complains for some reason
      dispatch(
        completeTypeTesterSample({
          wpm: calcWPM(),
          accuracy: (totalKeyStrokes - totalMistakes) / totalKeyStrokes,
          time: { days, hours, minutes, seconds },
          sampleId: sampleId,
        })
      );
    } else if (
      userText !== sampleText &&
      userText &&
      !isRunning &&
      !isComplete
    ) {
      start();
    }
  }, [userText]);

  function updateStats(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Backspace") {
      return;
    }
    dispatch(setTotalKeyStrokes(totalKeyStrokes + 1));
    if (mistake.length > currMistakeLength) {
      dispatch(setTotalMistakes(totalMistakes + 1));
    }
    dispatch(setCurrentMistakeLength(mistake.length));
  }

  function calcWPM() {
    if (seconds === 0 && minutes === 0 && hours === 0) return 0;
    const numWords = correct.length / 5;
    const minutesFromSeconds = seconds === 0 ? 0 : seconds / 60;
    const numMinutes = hours * 60 + minutes + minutesFromSeconds;
    return Math.round(numWords / numMinutes);
  }

  function onReset() {
    reset();
    dispatch(resetTypeTester());
  }

  return (
    <div>
      <h1 style={{ fontFamily: "monospace" }} className={styles.title}>
        Welcome to TYPEBEAST!
      </h1>
      <p style={{ fontFamily: "monospace" }}>
        Time Taken : {hours} : {minutes} : {seconds}
      </p>
      <p style={{ fontFamily: "monospace" }}>
        Accuracy :{" "}
        {totalKeyStrokes === 0
          ? 100
          : Math.round(
              ((totalKeyStrokes - totalMistakes) / totalKeyStrokes) * 100
            )}
        %
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
        value={userText}
        autoFocus
        style={{ width: "100%", height: "200px", marginTop: "1rem" }}
        onChange={(e) => dispatch(setUserText(e.target.value))}
        onKeyDown={updateStats}
        disabled={isComplete}
      />
      <button disabled={!isComplete} onClick={onReset}>
        reset
      </button>
    </div>
  );
}
