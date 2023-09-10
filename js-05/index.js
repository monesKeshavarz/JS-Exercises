const list =[];
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
const processing = () =>{
    const randomNumber = Math.floor(Math.random()*10);
    const listWord = ["mones","ali", "hossin", "keshavarz","maasomi"]
    const randomWord =  listWord[Math.floor(Math.random()*listWord.length)];
    const randomDate = Date.now()+ getRandomInt(1000, 4000);
    return {
      randomNumber,
      randomDate: new Date(+randomDate),
      randomWord,
    }
}
const pushItem = () =>{
  list.push(processing());
}
pushItem();
pushItem();
console.log(list);