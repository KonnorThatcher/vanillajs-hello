/* eslint-disable */
import "bootstrap";
import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#excuse-generator").innerHTML =
    '"' + excuseGenerator(structure) + '"';
  //console.log("It worked!!!");
};

let who = [
  "My brother-in-law's second cousin's friend from Wichita",
  "Frankie, that guy who stole my lunch money in 3rd grade that one time,",
  "My dentist's dentist",
  "My computer, who believe it or not is actually sentient,"
];
let how = [
  "eviscerated",
  "demolished",
  "went back in time and erased from existence",
  "lit on fire"
];
let what = [
  "the code I needed to complete this project",
  "the rent money, and I got kicked out of my house",
  "the steering wheel of my car",
  "my internet router"
];
let when = [
  "while I was on a trip.",
  "before I could give you that thing you wanted.",
  "while I was interrupted by my neighbor, who was trying to show me his new favorite magic trick.",
  "when I went to the store to buy a tub of vanilla bean ice cream."
];

let structure = [who, how, what, when];

let excuseGenerator = array => {
  const sentence = [];
  for (let i in array) {
    let subArray = array[i];
    let rNG = Math.floor(Math.random() * subArray.length);
    console.log(rNG);
    sentence.push(subArray[rNG]);
  }
  return sentence.join(" ");
};
