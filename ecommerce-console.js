
// allows us to take user input using the prompt module
const prompt = require('prompt-sync')({sigint: true});

// object array containing all available items in the store
let items = [
    {
      name: "Tv",
      price: 3550
    },
    {
      name: "Fridge",
      price: 4500,
    },
    {
      name: "Phone",
      price: 550,      
    },
    {
      name: "Shoe",
      price: 200,      
    },
    {
      name: "Shirt",
      price: 170,      
    }   
  ];

// first prompt asks for the visitors name

const name = prompt('Hey, what is your name? ');

console.log(
`Hello ${name}, welcome to my store.
Here are the available items and their prices:

Tv - 3550
Fridge - 1700
Phone - 550
Shoe - 200
Shirt - 170`

);

let cart = [];

// this prompt stores the user input in the selection variable
let selection = prompt('Type the name of any store item to add to your cart: ');
 
// the some method returns a boolean value if the user input matches any shop item    
while (selection !== 'no') {
  let match = items.some(function(item) {
      return item.name === selection;
    });

// if there is a match the item is added to the cart
  if (match) {
    console.log(`${selection} added to cart!\n`)
    cart.push(selection);
    selection = prompt(`Type item name to add another item, type no to proceed to checkout: ` );

// if not a message is displayed on the console 
  } else {
    console.log(`Item not available!\n`);
    selection = prompt(`Type item name to add another item, type no to proceed to checkout: ` );
  }
}   

// displays the items on the user's cart 
console.log(cart);     
