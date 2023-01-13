const cards = ["Guadalupe", "Ollie", "Aki"];
let event = "surprise"
const cardsArray = []

function writeCards(cards, event){
  for (let i = 0; i < cards.length; i++) {
    cardsArray.push (`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
  }
  
  return cardsArray
}

writeCards();



let num = 10
function countDown(num){
    while (num >= 0) {
        console.log(num--);
    }
}
countDown();