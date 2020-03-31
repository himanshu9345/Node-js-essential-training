const cp  = require("child_process");
const runlistdotjs=cp.spawn("node",["list.js"])
console.log(runlistdotjs)

runlistdotjs.stdout.on("data",data=>{
    console.log(`from list.js ${data}`)
})