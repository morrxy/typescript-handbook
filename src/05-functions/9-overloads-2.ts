// https://www.typescriptlang.org/docs/handbook/functions.html
export {}

const suits = ['hearts', 'spades', 'clubs', 'diamonds']

function pickCard(x: {suit: string; card: number}[]): number
function pickCard(x: number): {suit: string; card: number}
function pickCard(x: any): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x === "object") {
        const pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    } else if (typeof x === "number") {
        const pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

const myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
const pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

const pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
