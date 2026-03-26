import { capitalize } from "./capitalize";
import { reverse } from "./reverse";

describe('reverse', () => {
    test('reverses a single word', () =>{
        expect(reverse('hello')).toBe('olleh');
    });

    test('reverses multiple words', () => {
        expect(reverse('hello there')).toBe('ereht olleh');
    });

    test('reverses a sting with numbers and capitalized letters', () => {
        expect(reverse('1 HellO 2 thEre 3')).toBe('3 erEht 2 OlleH 1');
    });
    
})