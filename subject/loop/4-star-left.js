/*
n = 5;
*
**
***
****
*****
*/
const n = 5;
let i = 0;
while (i < n) {
    let j = 0;
    while (j <= i) {
        process.stdout.write('*');
        j++;
    }
    process.stdout.write('\n');
    i++;
}