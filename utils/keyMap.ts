const MAP = {
  0: "C",
  1: "C#",
  2: "D",
  3: "Eb",
  4: "E",
  5: "F",
  6: "F#",
  7: "G",
  8: "Ab",
  9: "A",
  10: "Bb",
  11: "B",
};

export default function KeyMap(key: number): string {
  return MAP[key];
}
