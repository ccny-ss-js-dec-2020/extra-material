const word = "reverse me";
let reversedWord = "";
for(var i = word.length - 1; i >= 0; i--){
  reversedWord += word[i]
}
console.log(reversedWord)
