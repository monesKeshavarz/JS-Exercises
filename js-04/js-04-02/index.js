const word = prompt("Enter a word to search");
const Sentence = prompt("Enter a search term");

function search(word,Sentence) {
   const findWord = Sentence.search(word);
  if (findWord!== -1){
      console.log("The word is in this sentence")
  }else{
      throw Error ("The value entered is incorrect")
  }
}
search(word,Sentence) 