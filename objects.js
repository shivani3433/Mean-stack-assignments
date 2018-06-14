var student={
name:"abc",
sclass:"VI",
rollno:12
}
console.log(student)
delete student.rollno
console.log(student)

var objLength=(obj)=>{
      var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}
console.log(objLength(student))


//--------array---------
var a=[1,3,4,7,4,8,89,79]
 var smax=" "
 var maximum=Math.max.apply(null,a);
console.log(maximum)
var ind=a.indexOf(maximum)
a.splice(ind,1)
var smax=Math.max.apply(null,a)
console.log(smax)