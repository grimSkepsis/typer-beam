type GradedString = {
  correct: string;
  mistake: string;
  remaining: string;
};

export function gradeUserString(
  string: string,
  userString: string
): GradedString {
  let i = 0;
  while (
    i < string.length &&
    i < userString.length &&
    string[i] === userString[i]
  ) {
    i++;
  }

  const correct = string.slice(0, i);
  const mistake = string.slice(i, userString.length);
  const remaining = string.slice(correct.length + mistake.length);

  return {
    correct,
    mistake,
    remaining,
  };
}

export const TYPE_SAMPLE = "The quick brown fox jumps over the lazy dog";
