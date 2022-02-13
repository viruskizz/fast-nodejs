// Calculation
// Logical
// Repeated
// condition in math result to be `true` or `false`
// > >= < <= == === != !== !
// empty string, undefined, NaN, 0 , false
// Conjunction   and &&  or ||

let x;
console.log('1 > 2 ', 1 > 2);
console.log('2 >= 2 ', 2 >= 2);
console.log('1 < 1 ', 1 < 1);
console.log('1 <= 1 ', 1 <= 1);
console.log('"1" == 1 ', "1" == 1);
console.log('1 === 1 ', 1 === 1);
console.log('"1" === 1 ', "1" === 1);
console.log('2 !== 3', 2 !== 3);
console.log(!true);
console.log(!!true);
console.log(!!'');
console.log(!!x);
console.log(!!NaN);
console.log(!!0);
console.log(!!false);
console.log(1 > 2 && 2 > 3);

let a = -12;
let b = 100;
let c = 50;

if (a > b) {
    // true statement
    console.log('YES');
} else {
    // false statement not necessory
    console.log('NO');
}

if (a > 0) {
    console.log('A');
} else if (a > -10) {
    console.log('B');
} else {
    console.log('C');
}
