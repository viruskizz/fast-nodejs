/*
while
do while
for
*/
let i = 0;
while (i < 3) {
    // console.log('Araiva', i++);
    // console.log('Araiva', ++i);
    console.log('Araiva', i);
    // i = i + 1;
    // i += 1;
    i++;
    // ++i;
}
console.log(i);
do {
    console.log('Araiva', i);
} while (i < 3)

for (let j = 0; j < 10; j++) {
    if (j === 5) {
        break;
    }
    if (j % 2 === 0) {
        continue;
    }
    console.log('mobile', j);
}
// console.log('outer for', j);