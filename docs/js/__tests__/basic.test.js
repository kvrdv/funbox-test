import sum from '../basic';

test('should sum', () => { //eslint-disable-line
  const result = sum([1, 2, 3]);
  expect(result).toBe(6); //eslint-disable-line
});
