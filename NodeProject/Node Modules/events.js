const events = require("events");

const emitter = new events.EventEmitter();

emitter.on("catchme",(msg,eventType)=>{
    console.log(`${eventType}: ${msg}`);
})

process.stdin.on("data",data=>{
    const input =  data.toString().trim();
    if (input=="exit"){
        emitter.emit("catchme","bbye","process");
        process.exit();
    }
    emitter.emit("catchme",input,"from terminal");
})