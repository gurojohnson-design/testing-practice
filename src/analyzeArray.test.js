import { experiments } from "webpack";
import { analyzeArray } from "./analyzeArray";

const someNumbers = [3, 6, 1, 9, 32, 91, 22, 24];

describe('analyzeArray', () => {
    test('return minimum value', () => {
        expect(analyzeArray(someNumbers).min).toBe(1);
    });
    test('return maximum value', () => {
        expect(analyzeArray(someNumbers).max).toBe(91);
    });
    test('return average value', () => {
        expect(analyzeArray(someNumbers).average).toBe(23.5);
    });
    test('return lengt of array', () => {
        expect(analyzeArray(someNumbers).length).toBe(8);
    });
})