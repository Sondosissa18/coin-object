const coin = {
  state: 0,
  flip: function() {
    this.state = Math.round(Math.random());
    console.log(this.state);
  },

  // 1. One point: Randomly set your coin object's "state" property to be either
  //    0 or 1: use "this.state" to access the "state" property on this object

  toString: function() {
    // 2. One point: Return the string "Heads" or "Tails", depending on whether
    if (this.state === 0) {
      return "head";
    } else {
      return "tail";
    }

    //    "this.state" is 0 or 1.
  },
  toHTML: function() {
    const image = document.createElement("img");
    // 3. One point: Set the properties of this image element to show either face-up
    //    or face-down, depending on whether this.state is 0 or 1.
    return image;
  }
};
function display20Flips() {
  const results = [];
  let resultText = "";
  let webPage = document.getElementById("textFlips");
  // 4. One point: Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page.  After your loop completes, return an array with the result of each flip.
  for (flip = 0; flip < 20; flip++) {
    coin.flip();
    resultText += coin.toString() + " , ";
    results.push(coin.toString);
  }
  console.log(resultText);
  webPage.innerHTML = resultText;
  return results;
}
function display20Images() {
  const results = [];
  // 5. One point: Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  After your loop completes, return an array with result of each flip.
}

display20Flips();
