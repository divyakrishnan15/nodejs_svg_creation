const Triangle = require('../lib/triangle.js')
const beat = require("../lib/animations/beat.js");


describe('SVG_triangle', () => {
  test('check is triangle svg is created', () => {

    const t = new Triangle();
    t.setSVGFillColor('blue','triangle','tri','white','beat');
    expect(t.render()).toEqual(`<svg id="shape" version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${beat}<path d="M150 0 L75 200 L250 200 Z" fill="blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">tri</text></svg>`);
  });
});


