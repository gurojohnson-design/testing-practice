import { capitalize } from "./capitalize";

describe('capitalize', () => {

    test('capitalizes the first letter of a lowecase word', () => {
        expect(capitalize('hello')).toBe('Hello');
    });


})