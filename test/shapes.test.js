const shapes = require('../lib/shapes.js')
const circle = require('../lib/circle.js')


describe('SVG', () => {
  test('TC1. check text is uppercase lowercase or numbers and not any other symbols', () => {
    const sh = new shapes('fill','shape','abc','textcolor', 'atype');
    expect(sh.checkText()).toEqual(true);
  });
});

describe('SVG', () => {
  test('TC2. check LENGTH of the text input', () => {
    const sh = new shapes('fill','shape','svg','textcolor', 'atype');
    const c = new circle('red', 'circle', 'TEST', 'blye', 'beat')
    expect(sh.checkTextLengthLessThan3char()).toEqual(3);
  });
});

// -----FAILURE TEST CASE

// describe('SVG', () => {
//   test('check LENGTH of the text input', () => {
//     const sh = new shapes('fill','shape','divya','textcolor', 'atype');
//     expect(sh.checkTextLengthGreaterthan3char()).toThrowError(new Error('Error'));
//   });
// });




