
//five things about delete operator in javascript
let details={
    firstName:"jayanth",
    lastName:"babu"
}
console.log(delete details.lastName);
console.log(details);
console.log(delete details.name);

//can we delete the variables in javascript

var a=20;
console.log(delete a);
console.log(a);
b=30;
console.log(window);
console.log(delete b);
console.log(b);

//can we delete values from an array in javascript?

var elements = [1,2,3,4];
console.log(delete elements[0]);
console.log(elements);
console.log(JSON.stringify(elements));

//can we delete builtin objects in javascript?

console.log(Math);
console.log(delete Math);

// can we delete non-configurable in javascript?

'use strict';
let user={};
Object.defineProperty(user,"name",{
    value:"jayanth",
    configurable:false
});
console.log(user);
console.log(delete user.name);
console.log(user);