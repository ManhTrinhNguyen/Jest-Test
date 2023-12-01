// // Repeating Setup 
//     // For example, let's say that several tests interact with a database of cities. You have a method initializeCityDatabase() that must be called before each of these tests, and a method clearCityDatabase() that must be called after each of these tests. You can do this with:
    
// beforeEach(() => {
//   initializeCityDatabase();
// })
// afterEach(() => {
//   clearCityDatabase();
// })

// test('city database has Vienna', () => {
//   expect(isCity('Vienna')).toBeTruthy()
// });

// test('city database has San Juan', () => {
//   expect(isCity('San Juan')).toBeTruthy()
// })

// // One-Tine Setup 
//     // In some cases, you only need to do setup once, at the beginning of a file. This can be especially bothersome when the setup is asynchronous, so you can't do it inline. Jest provides beforeAll and afterAll hooks to handle this situation.
// beforeAll(() => {
//   return initializeCityDatabase();
// });

// afterAll(() => {
//   return clearCityDatabase();
// });

// test('city database has Vienna', () => {
//   expect(isCity('Vienna')).toBeTruthy();
// });

// test('city database has San Juan', () => {
//   expect(isCity('San Juan')).toBeTruthy();
// });

// // Scoping 
// // Applies to all tests in this file
// beforeEach(() => {
//   return initializeCityDatabase();
// });

// test('city database has Vienna', () => {
//   expect(isCity('Vienna')).toBeTruthy();
// });

// test('city database has San Juan', () => {
//   expect(isCity('San Juan')).toBeTruthy();
// });

// describe('matching cities to foods', () => {
//   // Applies only to tests in this describe block
//   beforeEach(() => {
//     return initializeFoodDatabase();
//   });

//   test('Vienna <3 veal', () => {
//     expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
//   });

//   test('San Juan <3 plantains', () => {
//     expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
//   });
// });

// Order of Execution 

describe('descripe outer', () => {
  console.log('describe outer-a');

  describe('describe inner 1', () => {
    console.log('descripe inner 1');
    test('test 1', () => console.log('test 1'));
  });

  console.log('describe outer-b');

  test('test 2', () => console.log('test 2'));

  describe('describe inner 2', () => {
    console.log('describe inner 2')
    test('test 3', () => console.log('test 3'))
  });

  console.log('describe outer-c');
});