const express = require("express");
const path = require("path");
const fs = require("fs");
const { title } = require("process");
const app = express();
const port= 80;


// static folder access publically 

app.use('/static', express.static('static'));

// set template engine as pug in express 

app.set('view engine', 'pug');

// set the view directory

app.set('views', path.join(__dirname, 'views'));

// pug template

app.use(express.urlencoded());

app.get("/",(req,res)=>{

    const con= "this is the data written in file ";
    const prams= {'title':'game',content:con};
    res.render('index.pug',prams);

})

app.post("/",(req,res)=>{

     NAMEE = req.body.name;
     age = req.body.age;
     gender = req.body.gender;
     address = req.body.address;
     More = req.body.MORE;
     
     let stringTOwrite = `NAME IS ${NAMEE} WHO IS ${age} YEARS OLD AND GENDER IS ${gender} WHO IS FROM ${address} AND MORE ABOUT IT IS ${More}`;
     console.log(stringTOwrite);
     fs.writeFileSync('output.txt',stringTOwrite);
    const prams= {'message':'Form submitted successfully'};
    res.render('index.pug',prams);

})

// app.get("/demo",(req,res)=>{

//     res.status(200).render('demo',{title:'hey faizan',message:'hello there thanks for telling me how to use pug'});
// })


// app.get("/",(req,res)=>{

//     res.send("this is my first tut with express");
// })

// app.get("/about",(req,res)=>{

//     res.send("this is my about get request tut with express");
// })

// app.get("/this",(req,res)=>{

//     res.status(404).send("this page is not found ");
// })

// app.post("/about",(req,res)=>{

//     res.send("this is my about post request tut with express");
// })


app.listen(port,()=>{

    console.log(`the application stated successfully on port ${port}`);

})