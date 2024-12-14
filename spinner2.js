process.stdout.write('hello from spinner1.js... \rheyyy\n');

const intervals = 300;
const spinner2 = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

let delay = 0;

for (const spin of spinner2) {
setTimeout(() => {
    process.stdout.write(spin);
  }, delay);
  delay += intervals;
};