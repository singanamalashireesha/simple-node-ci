const greet = require('../app');

test('greets user by name', () => {
  expect(greet('singamShireesha')).toBe('Hello, Shireesha!');
});

