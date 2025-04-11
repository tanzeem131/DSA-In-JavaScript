/**AMAZON ASKED QUESTION */

/**
 * input:["yellowShirt","redHat","blackShirt","bluePant","redHat","pinkHat","blackShirt","yellowshirt","greenPant","greenPant","greenPant"];
 * output:greenPant
 */

function featuredProduct(arr) {
  let sortedArr = arr.sort();
  console.log(sortedArr);

  let productDict = new Map();
  productDict.set("key1", "hello");
  productDict.set("key2", "hello");
  productDict.set("key2", "hello");

  console.log(productDict.has("key1"));

  let featuredProductCount = new Map();
}

let arr = [
  "yellowShirt",
  "redHat",
  "blackShirt",
  "bluePant",
  "redHat",
  "pinkHat",
  "blackShirt",
  "yellowshirt",
  "greenPant",
  "greenPant",
  "greenPant",
];

let result = featuredProduct(arr);
// console.log(result);
