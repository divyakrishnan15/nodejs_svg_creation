const inq= require('inquirer')
const { writeFile } = require('fs').promises;
const circle = require('./lib/circle.js');
const square = require('./lib/square.js');
const star = require('./lib/star.js');
const triangle = require('./lib/triangle.js');
const heart = require('./lib/heart.js');
const rectangle = require('./lib/rectangle.js');
var filename=''

const promptUser=()=>{
return inq.prompt([
    {
        type:'checkbox',
        message:'Choose a shape of your svg ?',
        name:'shape',
        choices:['circle','triangle','rect','heart','star','square']
    },
    {
        type:'input',
        message:'Enter the fill/inside color for the shape?',
        name:'fillcolor'
    },
    {
        type:'input',
        message:'Enter the text (not more than 3 chars)?',
        name:'text'
    },
    {
        type:'input',
        message:'Enter the text color ?',
        name:'textcolor'
    },
    {
        type:'confirm',
        message:'Do you need animations ?',
        name:'animation'
    },
    {
        type:'checkbox',
        message:'choose the type of animation ?',
        name:'atype',
        when: (answers) => answers['animation'],
        choices:['beat']
    }
])
}



const createsvg=(res)=>{
    // var a = JSON.parse(res)
    // console.log('aaaaaaaaa = ',a)

    const fill=`${res.fillcolor}`
    const shape=`${res.shape}`
    const text=`${res.text}`
    const textcolor=`${res.textcolor}`
    const animation=`${res.animation}`
    const atype=`${res.atype}`

    // console.log(`hiii = ${fill} ,${shape},${text},${textcolor}`)
    console.log(`hiii = ${animation} ,${atype}`)

    switch (shape){
        case 'circle':{
            const c = new circle(fill,shape,text,textcolor, atype)
            return c.createSvgFile()
        }
        case 'triangle':{
            const t = new triangle(fill,shape,text,textcolor, atype)
            return t.createSvgFile()
        }
        case 'rect':{
            const r = new rectangle(fill,shape,text,textcolor, atype)
            return r.createSvgFile()
        }
        case 'heart':{
            const h = new heart(fill,'path',text,textcolor, atype)
            return h.createSvgFile()
        }
        case 'star':{
            const st = new star(fill,shape,text,textcolor, atype)
            return st.createSvgFile()
        }
        case 'square':{
            const s = new square(fill,shape,text,textcolor, atype)
            return s.createSvgFile()
        }
        
    } 
}
    

const init = () => {
    
  promptUser()
    .then((res) => {
        console.log("--------------")
        console.log(res)
        // console.log(res.shape)
        console.log("--------------")
        writeFile(`./asset/${res.shape}.svg`, createsvg(res))
    })
    .then(() => console.log('Successfully created svg!!!'))
    .catch((err) => console.error(err));
};

init();


// RESULT =  {"fillcolor":"red","shape":["circle"],"text":"sdf","textcolor":"blue"}