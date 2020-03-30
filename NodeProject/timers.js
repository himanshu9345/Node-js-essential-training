
const waitInterval = 500;
const waitTime = 3000;
let currenttime=0;
console.log(`setting a  ${waitTime/1000} seconds delay`);

const incTime=()=>{
    currenttime+=waitInterval;
    console.log(`waiting ${currenttime/1000} seconds `)
};

const timerFinished = () => {
    clearInterval(interval)
    console.log("done")
}

const interval=setInterval(incTime,waitInterval);
setTimeout(timerFinished,waitTime);