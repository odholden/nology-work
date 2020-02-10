const shuffle = (array) => {
    var copy = [], n = array.length, i;
  
    // While there remain elements to shuffle…
    while (n) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * array.length);
  
      // If not already shuffled, move it to the new array.
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
  
    return copy;
  }

const names = [
    "ellen",
    "sunny", 
    "samuel",
    "andrew",
    "stephen",
    "sonia",
    "sophie",
    "nasir",
    "jonny t",
    "louis",
    "ibrahim",
    "serghei"
]

const shuffledNames = shuffle(names);
for (let i = 0; i < names.length; i++) {
    setTimeout(() => {
        console.log(shuffledNames.pop());
    }, 10000)
}