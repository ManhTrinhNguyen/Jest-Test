

// // PROMISE 
// test('The data is peanut butter', () => {
//   return fetchData().then(data => {
//     expect(data).toBe('peanut butter')
//   })
// })

// // Async/Await 
// test('The data is peanut butter', async () => {
//   const data = await fetchData()
//   expect(data).toBe('peanut butter')
// })
// test('Fetch fail with an error', async () => {
//   expect.assertion(1)
//   try {
//     await fetch();
//   } catch (error) {
//     expect(error).toMatch('error')
//   }
// })

// // Combine async and await with .resolves or .rejects
// test('The data is peanut butter', async () => {
//   await expect(fetchData()).resovles.toBe('peanut butter')
// })
// test('Fetch fail with an error', async () => {
//   await expect(fetchData()).rejects.toBe('error')
// })

// // CALL BACK

// test('the data is peanut butter', done => {
//   function callback(error, data) {
//     if (error) {
//       done(error);
//       return;
//     } 
//     try {
//       expect(data).toBe('peanut butter');
//       done();
//     } catch (error){
//       done(error)
//     }
//   }

//   fetchData(callback)
// })