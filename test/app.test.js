const greet = require('../app');

test('greets user by name', () => {
  expect(greet('Shireesha')).toBe('Hello, Shireesha!');
});

