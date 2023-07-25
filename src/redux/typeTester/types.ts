export type TypeTesterState = {
  userText: string;
  mistakeLength: number;
  totalKeyStrokes: number;
  totalMistakes: number;
  isComplete: boolean;
  currMistakeLength: number;
};

export type TimeBreakdown = {
  minutes: number;
  seconds: number;
  hours: number;
  days: number;
};
export function timeBreakdownToMilliseconds(time: TimeBreakdown): number {
  const { minutes, seconds, hours, days } = time;
  const totalSeconds =
    seconds + minutes * 60 + hours * 60 * 60 + days * 24 * 60 * 60;
  return totalSeconds * 1000;
}

export type CompletionState = {
  wpm: number;
  accuracy: number;
  time: TimeBreakdown;
  sampleId: string;
};
