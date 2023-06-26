const Shapes = require("./shapes.js");
const beat = require("./animations/beat.js");

class Circle extends Shapes {
  constructor(fillcolor, shape, text, textcolor, atype) {
    super(fillcolor, shape, text, textcolor, atype);
  }

  setSVGFillColor(fillcolor, shape, text, textcolor, atype) {
    console.log("--------TC1 CIRCLE =setSVGFillColor ---------");
    this.fillcolor = fillcolor;
    this.shape = shape;
    this.text = text;
    this.textcolor = textcolor;
    this.atype = atype;
  }

  render() {
      return `<svg id="shape" version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${
        this.atype === "beat" ? beat : ``
      }<${this.shape} cx="150" cy="100" r="80" fill="${
        this.fillcolor
      }" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${
        this.textcolor
      }">${this.text}</text></svg>`;
    }
  }


module.exports = Circle;
