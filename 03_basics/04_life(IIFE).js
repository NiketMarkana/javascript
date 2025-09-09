    // Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})() ;
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')    //here ";" is not there because after this none will be executed so don't worry about termination



//remove (IIFE) from file before run