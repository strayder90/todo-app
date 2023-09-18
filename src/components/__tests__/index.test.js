import sum from '../utils/index';

describe('testing sum() function', () => {
  test('should give result of adding two numbers', () => {
    const result = sum(1, 3);

    expect(result).toBe(4);
  });
});
