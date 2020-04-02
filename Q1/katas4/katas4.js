const gotCitiesCSV =
  "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = [
  "Mordor",
  "Gondor",
  "Rohan",
  "Beleriand",
  "Mirkwood",
  "Dead Marshes",
  "Rhun",
  "Harad"
];
const bestThing =
  "The best thing about a boolean is even if you are wrong you are only off by a bit";

function kata1() {
  const array = gotCitiesCSV.split(",");
  var ul_ = document.getElementById("ulist_1");

  var listItem = document.createElement("li");
  var text = document.createTextNode(JSON.stringify(array));
  listItem.appendChild(text);
  ul_.appendChild(listItem);
}
kata1();

function kata2() {
  const array = bestThing.split(" space ");
  var ul_ = document.getElementById("ulist_2");

  var listItem = document.createElement("li");
  var text = document.createTextNode(JSON.stringify(array));
  listItem.appendChild(text);
  ul_.appendChild(listItem);
}
kata2();
function kata3() {
  let array = gotCitiesCSV.split(",");
  array = array.join(";");
  var ul_ = document.getElementById("ulist_3");

  var listItem = document.createElement("li");
  var text = document.createTextNode(JSON.stringify(array));
  listItem.appendChild(text);
  ul_.appendChild(listItem);
}
kata3();
function kata4() {
  let array = lotrCitiesArray.join(", ");

  var ul_ = document.getElementById("ulist_4");

  var listItem = document.createElement("li");
  var text = document.createTextNode(JSON.stringify(array));
  listItem.appendChild(text);
  ul_.appendChild(listItem);
}
kata4();
function kata5() {
  const array = lotrCitiesArray.slice(0, 5);
  var ul_ = document.getElementById("ulist_5");

  var listItem = document.createElement("li");
  var text = document.createTextNode(JSON.stringify(array));
  listItem.appendChild(text);
  ul_.appendChild(listItem);
}
kata5();
function kata6() {
  const array = lotrCitiesArray.slice(3, 8);
  var ul_ = document.getElementById("ulist_6");

  var listItem = document.createElement("li");
  var text = document.createTextNode(JSON.stringify(array));
  listItem.appendChild(text);
  ul_.appendChild(listItem);
}
kata6();

function kata7() {
  const array = lotrCitiesArray.slice(2, 5);
  var ul_ = document.getElementById("ulist_7");

  var listItem = document.createElement("li");
  var text = document.createTextNode(JSON.stringify(array));
  listItem.appendChild(text);
  ul_.appendChild(listItem);
}
kata7();
function kata8() {
  //   let array = lotrCitiesArray.split(",");
  lotrCitiesArray.splice(2, 1);
  //   array.splice(2, 1);
  var ul_ = document.getElementById("ulist_8");

  var listItem = document.createElement("li");
  var text = document.createTextNode(JSON.stringify(lotrCitiesArray));
  listItem.appendChild(text);
  ul_.appendChild(listItem);
}
kata8();
function kata9() {
  lotrCitiesArray.splice(5, 2);
  var ul_ = document.getElementById("ulist_9");

  var listItem = document.createElement("li");
  var text = document.createTextNode(JSON.stringify(lotrCitiesArray));
  listItem.appendChild(text);
  ul_.appendChild(listItem);
}
kata9();
function kata10() {
  //   let array = lotrCitiesArray.split(",");
  lotrCitiesArray.splice(2, 0, "Rohan");
  //   array.splice(2, 1);
  var ul_ = document.getElementById("ulist_10");

  var listItem = document.createElement("li");
  var text = document.createTextNode(JSON.stringify(lotrCitiesArray));
  listItem.appendChild(text);
  ul_.appendChild(listItem);
}
kata10();
function kata11() {
  //   let array = lotrCitiesArray.split(",");
  lotrCitiesArray.splice(5, 1, "Deadest Marshes");
  //   array.splice(2, 1);
  var ul_ = document.getElementById("ulist_11");

  var listItem = document.createElement("li");
  var text = document.createTextNode(JSON.stringify(lotrCitiesArray));
  listItem.appendChild(text);
  ul_.appendChild(listItem);
}
kata11();

function kata12() {
  const array = bestThing.slice(0, 14);

  var ul_ = document.getElementById("ulist_12");

  var listItem = document.createElement("li");
  var text = document.createTextNode(JSON.stringify(array));
  listItem.appendChild(text);
  ul_.appendChild(listItem);
}
kata12();
function kata13() {
  const array = bestThing.slice(bestThing.length - 14);

  var ul_ = document.getElementById("ulist_13");

  var listItem = document.createElement("li");
  var text = document.createTextNode(JSON.stringify(array));
  listItem.appendChild(text);
  ul_.appendChild(listItem);
}
kata13();
function kata14() {
  const array = bestThing.slice(23, 38);

  var ul_ = document.getElementById("ulist_14");

  var listItem = document.createElement("li");
  var text = document.createTextNode(JSON.stringify(array));
  listItem.appendChild(text);
  ul_.appendChild(listItem);
}
kata14();
function kata15() {
  const array = bestThing.substring(bestThing.length - 14);

  var ul_ = document.getElementById("ulist_15");

  var listItem = document.createElement("li");
  var text = document.createTextNode(JSON.stringify(array));
  listItem.appendChild(text);
  ul_.appendChild(listItem);
}
kata15();
function kata16() {
  const array = bestThing.substring(23, 38);

  var ul_ = document.getElementById("ulist_16");

  var listItem = document.createElement("li");
  var text = document.createTextNode(JSON.stringify(array));
  listItem.appendChild(text);
  ul_.appendChild(listItem);
}
kata16();
function kata17() {
  const array = lotrCitiesArray.pop();
  //   lotrCitiesArray.pop("Harad");
  var ul_ = document.getElementById("ulist_17");

  var listItem = document.createElement("li");
  var text = document.createTextNode(JSON.stringify(lotrCitiesArray));
  listItem.appendChild(text);
  ul_.appendChild(listItem);
}
kata17();
function kata18() {
  const array = lotrCitiesArray.push("Dead Marshes");
  //   lotrCitiesArray.pop("Harad");
  var ul_ = document.getElementById("ulist_18");

  var listItem = document.createElement("li");
  var text = document.createTextNode(JSON.stringify(lotrCitiesArray));
  listItem.appendChild(text);
  ul_.appendChild(listItem);
}
kata18();
function kata19() {
  const array = lotrCitiesArray.shift();
  //   lotrCitiesArray.pop("Harad");
  var ul_ = document.getElementById("ulist_19");

  var listItem = document.createElement("li");
  var text = document.createTextNode(JSON.stringify(lotrCitiesArray));
  listItem.appendChild(text);
  ul_.appendChild(listItem);
}
kata19();
function kata20() {
  lotrCitiesArray.unshift("Mordor");
  //   lotrCitiesArray.pop("Harad");
  var ul_ = document.getElementById("ulist_20");

  var listItem = document.createElement("li");
  var text = document.createTextNode(JSON.stringify(lotrCitiesArray));
  listItem.appendChild(text);
  ul_.appendChild(listItem);
}
kata20();
