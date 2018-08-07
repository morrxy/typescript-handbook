// https://www.typescriptlang.org/docs/handbook/functions.html
export {}

interface Card {
    suit: string
    card: number
}

interface Deck {
    suits: string[]
    cards: number[]
    createCardPicker(this: Deck): () => Card
}

const deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function(this: Deck) {
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
