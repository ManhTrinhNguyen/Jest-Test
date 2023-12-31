const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2

  expect(data).toEqual({ one: 1, two: 2 })
}); 

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0)
    }
  }
})

test('There no I in team', () => {
  expect('team').not.toMatch(/I/)
})

test('There is "stop" in ChriStoph', () => {
  expect('Chirstoph').toMatch(/stop/)
})

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];


test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk')
  expect(new Set(shoppingList)).toContain('milk')
})

function compileCode() {
  throw new Error('you are using the wrong JDK!')
}

test('compiling android goes as expected', () => {
  expect(() => compileCode()).toThrow();
  expect(() => compileCode()).toThrow(Error);
})

