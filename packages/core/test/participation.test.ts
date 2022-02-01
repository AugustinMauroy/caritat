import type { Actor } from "../dist/vote";
import getParticipation from "../dist/utils/participation.js";

const authorizedVoters = Array.from(
  { length: 10 },
  (_, i) =>
    ({
      id: i.toString(),
    } as Actor)
);

it("should find 100% participation if no voters list", () => {
  expect(getParticipation([], 0)).toBe(1);
  expect(getParticipation([], 1)).toBe(1);
});

it("should find the participation for one voter", () => {
  expect(getParticipation([{ id: "a" }], 0)).toBe(0);
  expect(getParticipation([{ id: "a" }], 1)).toBe(1);
});

it("should find the participation for 10 voters", () => {
  for (let i = 0; i < 10; i++) {
    expect(getParticipation(authorizedVoters, i)).toBe(i / 10);
  }
});

it("should throw error if the participation is more than 100%", () => {
  expect(() => getParticipation([{ id: "a" }], 2)).toThrow(
    "More ballots than authorized voters"
  );
  expect(() => getParticipation(authorizedVoters, 11)).toThrow(
    "More ballots than authorized voters"
  );
});
