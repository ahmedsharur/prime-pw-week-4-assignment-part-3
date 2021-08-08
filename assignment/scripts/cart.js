console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//Create a global variable named `basket` and set it to an empty array.

let basket = [];



//Create a function called `addItem`. It should:
  //take an input parameter for a string `item`
  //add the new item to the global array `basket`.
  //return `true` indicating the item was added

  function addItem(item){
    basket.push(item);
    if (basket.includes(item)){
      return true;
    }
    else{
      return false;
    }
  }

  console.log(addItem('apple'));
  console.log(addItem('mango'));

  // For example, to test `addItem`:

  console.log(`Basket is ${basket}`);
  console.log('Adding apples (expect true)', addItem('apples'));
  console.log(`Basket is now ${basket}`);


  //Create a function called `listItems`. It should:
    // loop over the items in the `basket` array
    // console.log each individual item on a new line

    function listItems(){
      for (let item = 0; item < basket.length; item++){
        console.log(basket[item])
      }
    }

    listItems();


    // Create a function called `empty`. It should:
    //   reset the `basket` to an empty array

    function empty(){
      basket = [];
      return basket;
    }

    empty()

    console.log(basket)

    //Add a global `const` named `maxItems` and set it to 5.

    const maxItems = 5;

    // Create a function called isFull(). It should:
    //   return `false` if the basket contains *less* than max number of items
    //   return `true` otherwise (equal or more than maxItems)

    function isFull(){
      if (basket.length >= maxItems){
        return true;
      }
      return false;
    }

    console.log(isFull());

    // Update the required `addItem` function to:
    //   Use the `isFull` function to prevent more than `maxItems` from being added to the basket.
    //   If an item was added to the array, return `true`
    //   If there was no room and the item could not be added return `false`


addItem('kiwi');
addItem('watermelon');
addItem('dates');
console.log(basket)
function newAddItem(){
if (isFull()){
  console.log(`We don't have an availability in the room`)
  return true;
}
console.log(`We have an availability in the room`)
return false;
}

console.log(newAddItem())
    // Create a function called `removeItem`. It should:
    //   Take an input parameter for a string `item`
    //   Use [Array.indexOf] to find the index of the first matching item in the basket.
    //   Use [Array.splice] to remove the first matching item from the basket.
    //   Return the item removed or `null` if the item was not found


function removeItem(item){
  let index = basket.indexOf(item);
  basket.splice(index, 2)
  return basket;
}

console.log(removeItem('kiwi'))
