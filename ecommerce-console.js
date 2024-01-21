
/* calling prompt-sync to get a prompting function
  sigint allows users to exit the program using Ctrl + C */

const prompt = require('prompt-sync')({sigint: true});

// object array containing all available items in the store

let products = [
    {
      name: "suit",
      price: 850,
    },
    {
      name: "shorts",
      price: 100,
    },
    {
      name: "dress",
      price: 350,      
    },
    {
      name: "hoodie",
      price: 200,      
    },
    {
      name: "skirt",
      price: 170,      
    }   
  ];

// function to display store products 

function displayProducts(products) {
  console.log('Here are the products in stock:');
  products.forEach((product) => {
  console.log(`${product.name} - $${product.price}`);
  });
  console.log(`\n`)

}

// function to display cart

function displayCart(myCart) {
  console.log(`\nHere are the products in your cart:\n`);
  myCart.forEach((product) => {
  console.log(`${product.name} - $${product.price}`);
  });
}

// function to generate invoice

function invoice(myCart) {
  let total = 0;
  myCart.forEach(myCart => {
    total += myCart.price;
  });

  console.log(`\nTotal: $${total}\n**********\nThanks For Your Patronage!\nGoodbye!\n**********
  `);
}

// create an empty variable for storing products on the cart

let myCart = [];

// asks for the user's name

const name = prompt('Hey, what is your name? ');
console.log(`Welcome ${name} to my store\n `);

displayProducts(products);

// takes input from the prompt, converts to lower case and stores it in the selection variable

let selection = prompt('Type the product name to add to your cart: ').toLowerCase();

// block of code in the loop runs till the user decides to checkout

while (selection !== 'invoice') {

  // stores the matching products in variable

  const product = products.find((product) => product.name === selection);

  // stores the match in the myCart variable and displays a message and the current cart

  if (product) {
    myCart.push(product);
    console.log(`${product.name} added to cart!`);
    displayCart(myCart);
    console.log('\n')

    /* displays a message on the console if there's no match and prompts the user
    to add another item or checkout */

  } else {
    console.log(`Product not found!\n`);
  }
    selection = prompt('Add another product name or type invoice to proceed to checkout: ' ).toLowerCase();
}   

// these functions displays the user's cart and total sum

displayCart(myCart);
invoice(myCart);
