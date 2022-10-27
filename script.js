// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log('Importing module');
// ShoppingCart.addToCart('bread', 5);
// console.log(price, tq);
// import * as ShoppingCart from './shoppingCart.js';
// console.log('Importing module');
// ShoppingCart.addToCart('mouse', 4);
// console.log(ShoppingCart.totalPrice);
// import add, { cart } from './shoppingCart.js';

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const result = await res.json();
// console.log(result);

// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = await res.json();

  return { title: result.at(-1).title, text: result.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
