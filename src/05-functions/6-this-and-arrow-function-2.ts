// https://www.typescriptlang.org/docs/handbook/functions.html
export {}

const deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function() {
      return () => {
          const pickedCard = Math.floor(Math.random() * 52);
          const pickedSuit = Math.floor(pickedCard / 13);

          return {suit: this.suits[pickedSuit], card: pickedCard % 13};
      }
  }
}

const cardPicker = deck.createCardPicker();
const pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);
