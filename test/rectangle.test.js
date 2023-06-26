const Rectangle = require('../lib/rectangle.js')
const beat = require("../lib/animations/beat.js");


describe('SVG_rectangle', () => {
  test('check is rectangle svg is created', () => {

    const r = new Rectangle();
    r.setSVGFillColor('blue','rectangle','rct','white','beat');
    expect(r.render()).toEqual(`<svg id="shape" version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${beat}<rect width="300" height="100" fill="blue"/><text x="150" y="70" font-size="60" text-anchor="middle" fill="white">rct</text></svg>`);
  });
});


