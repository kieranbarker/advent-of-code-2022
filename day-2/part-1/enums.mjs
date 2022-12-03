export const moves = Object.freeze({
  A: "ROCK",
  B: "PAPER",
  C: "SCISSORS",
  X: "ROCK",
  Y: "PAPER",
  Z: "SCISSORS",
});

export const rules = Object.freeze({
  ROCK: "SCISSORS",
  PAPER: "ROCK",
  SCISSORS: "PAPER",
});

export const points = Object.freeze({
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
  DRAW: 3,
  WIN: 6,
});
