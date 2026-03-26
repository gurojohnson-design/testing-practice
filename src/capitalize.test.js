import { capitalize } from './capitalize';

describe('capitalize', () => {

    test('capitalizes the first letter of a lowercase word', () => {
        expect(capitalize('hello')).toBe('Hello');
  });

    test('does not change a string already starting with a capital', () => {
        expect(capitalize('Hello')).toBe('Hello');
  });

    test('leaves the rest of the string unchanged', () => {
        expect(capitalize('hELLO')).toBe('HELLO');
  });

    test('returns an empty string unchanged', () => {
        expect(capitalize('')).toBe('');
  });

    test('handles a single character', () => {
        expect(capitalize('a')).toBe('A');
  });

});