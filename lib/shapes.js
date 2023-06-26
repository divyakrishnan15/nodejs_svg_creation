class Shapes {
  constructor(fillcolor, shape, text, textcolor, atype) {
    this.fillcolor = fillcolor;
    this.shape = shape;
    this.text = text;
    this.textcolor = textcolor;
    this.atype = atype;
  }

  checkText(text) {
    console.log(
      "--------SHAPES = TC1 = checkText uppercase,lowercase --------"
    );
    console.log("${this.text} === ", this.text);
    const pattern = new RegExp("([A-Za-z0-9_+]$)");
    console.log("pattern.test(text) = ", pattern.test(text));
    return pattern.test(text);
  }

  checkTextLengthLessThan3char(text) {
    console.log(
      "--------SHAPES = TC2 = checkTextLength less than 3 char--------"
    );
    if (this.text.length <= 3) {
      console.log("${this.text} === ", this.text);
      console.log("Length of the text is less than or equal to 3");
      return this.text.length;
    }
  }




  // -----FAILED CASE TEST CASE ----

  // checkTextLengthGreaterthan3char() {
  //   console.log(
  //     "--------SHAPES = TC3 = checkTextLength greater than 3 char - ERROR--------"
  //   );
  //   if (this.text.length > 3) {
  //     console.log("${this.text} === ", this.text);
  //     console.log("Length of the text is Greater than or equal to 3");
  //     throw new Error('ERROR : TEXT ENTERED IS GREATER THAN 3 chars')
  //   }
  // }
}



module.exports = Shapes;



// const pattern = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)$');
// Regex for only allowing uppercase, lowercase, numbers, dashes, and underscores.
// const pattern = new RegExp('([A-Za-z0-9_-]+$)');