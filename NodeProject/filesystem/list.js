
const fs = require("fs");
const files = fs.readdirSync("./check");
console.log(files)

// const text = fs.readFileSync("./check/gg","UTF-8"); //sync
// console.log(text);

fs.readFile("./check/gg1",(err,text)=>{
    if(err){
        console.log(`error occured: ${err.message}`);
        process.exit();
    }
    console.log(text);
}); //async

