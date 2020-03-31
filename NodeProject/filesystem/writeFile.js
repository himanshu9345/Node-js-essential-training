const fs = require("fs");

const text = `This is a new file`

fs.writeFile("./check/newfile.txt",text,(err)=>{
    if (err){
        throw err;
    }
})