**Introduction**

A cli console app that runs on nodejs
please install the npm prompt-sync module the enable prompts

This is a simple ecommerce console app written in JavaScript.
It allows users to view catalogue, add items to cart and proceed to checkout.

**Getting started**

- Install Node and Node.js Package Manager (NPM)
- Execute the prompt sync installation command using the terminal
	`npm install prompt-sync`
- Run the program in the command line
	`node ecommerce-console.js`

**Usage**

Running the program shows the user a prompt to enter their name after which a welcome message and product catalogue is now displayed.
Another prompt pops up and the user is to input a product they wish to purchase.
Doing this adds the product to their cart which is now displayed alongside
a message telling the user the product has been sucessfully added.
A subsequent prompt will pop up. The user can add as many products as they wish or they can type `invoice` in the prompt to proceed to checkout and generate an invoice.
