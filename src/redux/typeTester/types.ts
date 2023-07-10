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

export type CompletionState = {
  wpm: number;
  accuracy: number;
  time: TimeBreakdown;
  sampleId: string;
};
