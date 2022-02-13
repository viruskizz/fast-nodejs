// process.stdout.write('*');
// process.stdout.write('*');
// process.stdout.write('\n');
// process.stdout.write('*');

const n = 5;
let i = 0;
while (i < n) {
    let j = 0;
    while (j < n) {
        process.stdout.write('*');
        j++;
    }
    process.stdout.write('\n');
    i++;
}