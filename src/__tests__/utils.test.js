// Your tests here
import { pointsForWord } from "../utils.js";

describe("pointsForWord", () => {
    test("calculates the total points of a word (1 point per vowel, 2 points per consonant", () => {
        const word = "tEsT";

        const points = pointsForWord(word);

        expect(points).toBe(7);

    });
});
