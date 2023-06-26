const circle = require('../lib/circle.js')
const beat = require("../lib/animations/beat.js");


describe('SVG_circle', () => {
  test('check is circle svg is created', () => {

    const c = new circle();
    c.setSVGFillColor('blue','circle','cir','white','beat');
    expect(c.render()).toEqual(`<svg id="shape" version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${beat}<circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">cir</text></svg>`);
  });
});


