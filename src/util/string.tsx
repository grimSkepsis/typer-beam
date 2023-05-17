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

export const LARGE_TYPE_SAMPLE = `The sun had set, and the sky was ablaze with shades of red, orange, and pink. It was a beautiful sight, but it also signaled the end of another day. As she walked along the path, she felt a sense of calm and peace wash over her. She loved this time of day, when the world seemed to slow down and everything was bathed in a warm, golden light. As she continued on her way, she noticed the trees rustling in the gentle breeze. Leaves danced and swayed, creating a soothing sound that was both relaxing and energizing. She paused for a moment to take it all in, closing her eyes and breathing deeply. When she opened her eyes again, she realized that she had been walking for much longer than she had intended. She had lost track of time, lost in her thoughts and the beauty of the world around her. But she didn't mind. In fact, she felt rejuvenated and ready to take on whatever challenges lay ahead. As she made her way back home, she couldn't help but smile. There was something magical about this time of day, and she knew that she would always treasure these quiet moments of reflection and peace.`;

export const DUNE_TYPE_SAMPLE =
  "A beginning is the time for taking the most delicate care that the balances are correct. This every sister of the Bene Gesserit knows. To begin your study of the life of Muad'Dib, then, take care that you first place him in his time: born in the 57th year of the Padishah Emperor, Shaddam IV. And take the most special care that you locate Muad'Dib in his place: the planet Arrakis. Do not be deceived by the fact that he was born on Caladan and lived his first fifteen years there. Arrakis, the planet known as Dune, is forever his place.";
