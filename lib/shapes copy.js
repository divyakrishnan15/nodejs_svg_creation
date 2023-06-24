{/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */}

class Shapes{
    constructor(fillcolor,shape,text,textcolor, atype){
        this.fillcolor=fillcolor
        this.shape=shape
        this.text=text
        this.textcolor=textcolor
        this.atype = atype
    }

    
    createSvgFile(){
        return `<svg id="shape" version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                            <${this.shape} cx="150" cy="100" r="80" fill=${this.fillcolor} />
                            <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textcolor}>SVG</text>
                        </svg>`
    }


    isPassword = (password) => {
      if (password.length <= 3){
        return false
      }
      const pattern = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)$');
      return pattern.test(password)
      };
}



module.exports=Shapes




































// circle
{/* <circle cx="25" cy="75" r="20"/> */}

// ellipse
{/* <ellipse cx="75" cy="75" rx="20" ry="5"/> */}

// line
{/* <line x1="10" x2="50" y1="110" y2="150" stroke="black" stroke-width="5"/> */}


// <?xml version="1.0" standalone="no"?>
// <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

//     {/* //square */}
//   <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
//   {/* rounded square */}
//   <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

//     {/* circle */}
//   <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
//   {/* ellipse */}
//   <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>

//     {/* straight line slope */}
//   <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>
  
//   {/* zig zag line */}
//   <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
//       stroke="orange" fill="transparent" stroke-width="5"/>

//     {/* star */}
//   <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
//       stroke="green" fill="transparent" stroke-width="5"/>

//     {/* curved line */}
//   <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
// </svg>