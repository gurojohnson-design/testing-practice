import { calculator } from "./calculatorObj";

describe("calculator", () => {
  test("take two numbers and add them. Return the result.", () => {
    expect(calculator.sum(3, 7)).toBe(10);
  });
  test("take two numbers and subtract one from the other", () => {
    expect(calculator.subtract(3, 7)).toBe(-4);
  });
  test("take two numbers and divide them", () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
  test("take two numbers and multiply them", () => {
    expect(calculator.multiply(2, 4)).toBe(8);
  });
});
