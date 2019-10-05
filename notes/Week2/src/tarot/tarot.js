// load the JSON file
const tarot = require('./tarot_interpretations.json');

// The list of cards are under "tarot_interpretations" object
let cards = tarot.tarot_interpretations;

// Choose a random card
const card = cards[Math.floor(Math.random() * cards.length)];

// Get the card's name in uppercase
const name = card.name.toUpperCase();

// Get a random fortune
const fortunes = card.fortune_telling;
const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];

// Here is how we will map suit name to a symbol
const suits = {
  coins: '⚭',
  swords: '☨',
  cups: '☉',
  wands: '☥',
  major: '●'
};

// Select the symbol based on the card.suit
const key = card.suit;
const symbol = suits[key];

// Print the fortune
console.log();
console.log(symbol, name);
console.log(fortune);
console.log();
