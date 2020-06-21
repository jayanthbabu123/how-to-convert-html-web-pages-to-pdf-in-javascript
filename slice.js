
// practical uses of slice method in javascript

const a = [1, 2, 3, 4];
const b = a.slice();
b.push(5);
console.log(a);
console.log(b);


// scenario-2  convert array like objects into array
function add(){
  console.log(arguments);
  const args = Array.prototype.slice.call(arguments);
  console.log(args);
  console.log(Array.from(arguments));
  console.log([...arguments]);
}

add(1,2,3,4,5,6,7);

// scenario-3   extract some part of array

const fruits = ["apple","banana","grapes","melon"];

console.log(fruits.slice(0,2));





