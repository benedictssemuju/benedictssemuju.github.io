"use strict"
const readline = require('readline').createInterface({
 input: process.stdin,
 output: process.stdout,
});

//Number 1
readline.question('What is your name? ', name => {
 console.log(`Welcome ${name}`);
readline.q.uestion('What is your age? ', age => {
    if(age<16){
        console.log("You’re not allowed to drive in Iowa");
    }else{ console.log("You’re allowed to get a drivers license in Iowa");}
    readline.close();
});
});

//Number 2

function sumOfNums(){
    let sum =0;
    const getNumber = function(){
        readline.question('What is your number or "stop" to exit? ', response => {
            if(response.toLowerCase==="stop"){
                console.log(`Sum: ${sum}`);
            }else{
                sum+=parsInt(response);
                getNumber();
            }
            
           });
    } 
    getNumber();
};

