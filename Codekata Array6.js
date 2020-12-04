/*Array Codekata
6. you are given with array of numbers.you have to find whether array is beautiful or not. A beautiful array is an array whose sum of all numbers is divisible by 2, 3 and 5

Input Description:
You are given a number ‘n’ denoting the size of array.Next line contains n space separated numbers.

Output Description:
Print 1 if array is beautiful and 0 if it is not

Sample Input :
5
5 25 35 -5 30

Sample Output :
1*/


const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

let count = +userInput[0];
let testarray = userInput[1];
let myarray = userInput[1].split(' ').map(Number);
let sum = 0;
/*console.log(count);
console.log(testarray);
console.log(myarray);*/

for(var i=0;i<count;i++)
{
    sum = sum + myarray[i];
}

console.log(sum);
//console.log(sum%2);
//console.log(sum%3);
//console.log(sum%5);

if(sum% 2 ===0 )
{
    if (sum%3===0)
    {
        if(sum%5===0)
        {
          console.log('1');
        }
    }

}
else
{
    console.log(0);
}


});



