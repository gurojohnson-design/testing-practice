import { caesarCypher } from "./caesarCipher";

describe('caesarCypher', () => {
    test('does it shift', () => {
        expect(caesarCypher('abc', 1)).toBe('bcd');
    });
    test('multipe words?', () => {
        expect(caesarCypher('nice and short', 1)).toBe('ojdf boe tipsu');
    });
    test('does it wrap', () => {
        expect(caesarCypher('zeus', 10)).toBe('joec');
    });
    test('does it respect capital letters', () => {
        expect(caesarCypher('abCdeFGhi', 1)).toBe('bcDefGHij');
    });
})