const Star = require('../lib/star.js')
const beat = require("../lib/animations/beat.js");


describe('SVG_star', () => {
  test('check is star svg is created', () => {

    const s = new Star();
    s.setSVGFillColor('blue','star','str','white','beat');
    expect(s.render()).toEqual(`<svg id="shape" height="210" width="500">${beat}<polygon points="100,10 40,198 190,78 10,78 160,198" fill="blue"/><text x="100" y="125" font-size="40" text-anchor="middle" fill="white">str</text></svg>`);
  });
});


