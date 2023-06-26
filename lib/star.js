const Shapes = require("./shapes.js");
const beat = require("./animations/beat.js");

class Star extends Shapes {
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
    console.log(
      "******* this.fillcolor ****** ",
      this.fillcolor,
      this.shape,
      this.text,
      this.textcolor,
      this.atype
    );
  }

  render() {
    console.log(
      `@@@@ CLASS CIRCLE = *** ${this.fillcolor} *** ${this.shape} *** ${this.text} *** ${this.textcolor} `
    );

    return `<svg id="shape" height="210" width="500">${
      this.atype === "beat" ? beat : ``
    }<polygon points="100,10 40,198 190,78 10,78 160,198" fill="${
      this.fillcolor
    }"/><text x="100" y="125" font-size="40" text-anchor="middle" fill="${
      this.textcolor
    }">${this.text}</text></svg>`;
    // console.log("SVGRESSSS ==== ", svgres);

  }
}

module.exports = Star;
