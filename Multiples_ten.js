const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

let num = parseInt(userInput[0]);
//console.log(num);
let str = ' ';
for(var i =1;i<=3;i++)
{
    var temp = 1;
    temp = num*i;
    str = str + temp +' ' ;
    
}
console.log(str.trim());
});
