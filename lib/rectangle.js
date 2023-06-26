const Shapes = require("./shapes.js");
const beat = require("./animations/beat.js");

class Rectangle extends Shapes {
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
    
      return `<svg id="shape" version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${
        this.atype === "beat" ? beat : ``
      }<rect width="300" height="100" fill="${
        this.fillcolor
      }"/><text x="150" y="70" font-size="60" text-anchor="middle" fill="${
        this.textcolor
      }">${this.text}</text></svg>`;
    }
  }



module.exports = Rectangle;
