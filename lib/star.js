const Shapes= require('./shapes.js')
const beat = require("./animations/beat.js");

class Circle extends Shapes{
    constructor(fillcolor,shape,text,textcolor, atype) {
        super(fillcolor,shape,text,textcolor, atype)      
    }
    createSvgFile(){
        console.log(`@@@@ CLASS CIRCLE = *** ${this.fillcolor} *** ${this.shape} *** ${this.text} *** ${this.textcolor} `)
        
        const svgres= `<svg id="shape" height="210" width="500">${ this.atype === "beat" ? beat : ``}<polygon points="100,10 40,198 190,78 10,78 160,198" fill="${this.fillcolor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textcolor}>${this.text}</text></svg>`
        console.log("SVGRESSSS ==== ",svgres)
        return svgres
    }

    

}

module.exports=Circle