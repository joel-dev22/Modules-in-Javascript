// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log('Importing module');
// ShoppingCart.addToCart('bread', 5);
// console.log(price, tq);
import * as ShoppingCart from './shoppingCart.js';
console.log('Importing module');
ShoppingCart.addToCart('mouse', 4);
console.log(ShoppingCart.totalPrice);
import add from './shoppingCart.js';