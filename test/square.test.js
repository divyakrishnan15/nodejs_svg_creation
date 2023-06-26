const Square = require('../lib/square.js')
const beat = require("../lib/animations/beat.js");


describe('SVG_square', () => {
  test('check is square svg is created', () => {

    const s = new Square();
    s.setSVGFillColor('blue','square','sqr','white','beat');
    expect(s.render()).toEqual(`<svg id="shape" version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${beat}<rect width="100" height="100" fill="blue"/><text x="50" y="70" font-size="50" text-anchor="middle" fill="white">sqr</text></svg>`);
  });
});


