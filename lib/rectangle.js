const Shapes= require('./shapes.js')
const beat = require("./animations/beat.js");

class Rectangle extends Shapes{
    constructor(fillcolor,shape,text,textcolor, atype) {
        super(fillcolor,shape,text,textcolor, atype)      
    }
    createSvgFile(){
        console.log(`@@@@ CLASS CIRCLE = *** ${this.atype} *** ${this.shape} *** ${this.text} *** ${this.textcolor} `)
        
        const svgres= `<svg id="shape" width="400" height="110">${ this.atype === "beat" ? beat : ``}<${this.shape} width="300" height="100" style="fill:${this.fillcolor};" /><text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textcolor}>${this.text}</text></svg>`
        console.log("SVGRESSSS ==== ",svgres)
        return svgres
    }

    

}

module.exports=Rectangle