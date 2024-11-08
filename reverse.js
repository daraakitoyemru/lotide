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

function pigLatin(args) {
  let firstLetter = "";
  const arr = [];
  for (let word of args) {
    firstLetter = word[0];
    word += firstLetter + `ay`;
    if (word.length == 1) {
      arr.push(word);
    } else {
      arr.push(word.slice(1));
    }
  }
  return arr.join(" ");
}

console.log(pigLatin(args));

//pigLatin(args);
