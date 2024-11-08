const args = process.argv.slice(2);

function reverse(args) {
  let string = "";
  const arr = [];
  for (let elem of args) {
    for (let i = elem.length - 1; i >= 0; i--) {
      string += elem[i];
    }
    arr.push(string);
    string = "";
  }
  return arr;
}

console.log(reverse(args));
