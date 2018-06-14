//1.convert a binary number to a decimal


//2.convert decimal to binary,hexadecimal,octal
//3.to generate random number
function randomNum() {
  return Math.random();
}
console.log(randomNum())

//4.to format number upto spectified decimal place
function format(num,n){
   return parseFloat(Math.round(num * 100) / 100).toFixed(n);
}
console.log(format(1,2))

//5.to find highest vale in array
var a=[1,4,2,6,45,678,90]
function findLarge(a){
var larger=Math.max.apply(null,a)
console.log(larger)}
findLarge(a)


//6.to find lowest value in array
function findLow(a){
var larger=Math.min.apply(null,a)
console.log(larger)}
findLow(a)

//7.to find gcd 
var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};
console.log(gcd(8,12))

//8.to check if number is power of 2
function power2(n) {
 if (typeof n !== 'number') 
      return 'Not a number'; 

    return n && (n & (n - 1)) === 0;
}

//9.to round a number upto given decimal place
var round = function(num,r){
    return Math.round(num).toFixed(r)
}
console.log(round(20.8,2))

//10. to hide email from unauthorized users

function hide(email)
{
    email1=email.split("@")
//    console.log(email1)
var len=email1[0].length/2
var hide1=email1[0].substr(0,len)
var hidden=hide1+"...@"+email1[1]
console.log(hidden)
    
}
hide("shivani3433@gmail.com")

//11. to capitalize first letter of the string

function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}
    
console.log(capital_letter("hello there")
            
//12.to accept 2 integer and display the larger
 var larger=(a,b)=>{
    return Math.max(a,b)
}
larger(4,9)


//14. to print pattern
 for(i=1;i<=5;i++){
     var str=" "
    for(j=1;j<=i;j++){
      str += "*";
    }
    console.log(str)
}


//15.to print all possible combination of strings
function permut(string) {
    if (string.length < 2) return string

    var permutations = []; 

    for (var i=0; i<string.length; i++) {
        var char = string[i];
        
        
        if (string.indexOf(char) != i) 
            continue;           

        var remainingString = string.slice(0,i) + string.slice(i+1,string.length); 

        for (var subPermutation of permut(remainingString))
            permutations.push(char + subPermutation)

    }
    return permutations;
}
console.log(permut("dog"))

substrings("dog");

