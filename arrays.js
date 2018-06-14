var a=[1,3,4,7,4,8,89,79]
var slargest=(a)=>{
 var smax=" "
 var maximum=Math.max.apply(null,a);
//console.log(maximum)
var ind=a.indexOf(maximum)
a.splice(ind,1)
var smax=Math.max.apply(null,a)
return smax
}
console.log(slargest(a))

//10.to find union of arrays
var a=[1,2,3]
var b=[2,3,6]
function union(a,b){
var c=a.concat(b)
for(i=0;i<=c.length;i++){
    for(j=i+1;j<=c.length;j++){
        if(c[i]==c[j])
            {
                c.splice(j,1)
               
                
            }
    }
    
}
return c}
console.log(union(a,b))

//11.to check the input is array or not
var check=(a)=>{
return    Array.isArray(a)
}
console.log(check("ahsydghs"))

//12.to get 1st element of array
var first=(a,n)=>{
   
if(n==0 ||n==null){
   return a[0]
}else if(n<0){
    return []
} else{
    return a.splice(0,n)
}  
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

//13.to find the most frequent item of an array
var a=[1,2,3,3,3,4,4,4,4,4,3,3,3,5,5,7]
var count=0
var fcount=1
var data;
for(i=0;i<=a.length;i++){
    for(j=i;j<=a.length;j++){
        if(a[i]==a[j])
            {
               count++ 
                if(fcount<count){
                   fcount=count
                    data=a[i]
                    
                }
            }
    }
    count=0
    
}
console.log("number---"+data+"---"+fcount+"times")

//14. to compute the sum and product of an array of integers.

var a=[1,2,5,6]
var sum=0
var mul=1
a.forEach(function(data){
    sum=sum+data
    console.log(sum)
})
a.forEach(function(data){
    mul=mul*data
    console.log(mul)
})

//15.to add items in an blank array and display the items.
var add=(a,i)=>{
    a.push(i)
    return a
}
console.log(add([],2))

//16.Write a JavaScript program which prints the elements of the following array. Note : Use nested for loops
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
for (var i in a) 
{
   console.log("row " + i);
   for (var j in a[i]) 
     {
      console.log(" " + a[i][j]);
     }
}


//17.to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
var a=[NaN, 0, 15, false, -22, '',undefined, 47, null]
function er(arr) {
  function filterer(arr) {
     return arr > 0|| isNaN(arr) === false;
  }
  arr = arr.filter(filterer);
  return arr;
}
console.log(er(a))
