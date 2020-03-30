console.log(process.pid);
console.log(process.versions.node);
console.log(process.argv[2]);
console.log('your name is '+process.argv[2]);

const grab = flag => {
    let indexAfterFlag=process.argv.indexOf(flag)+1
    return process.argv[indexAfterFlag]
}

const  name=grab("--name");
console.log(name);

const  lastname=grab("--lastname");
console.log(lastname);