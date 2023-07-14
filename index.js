let ones = document.getElementById("1");
let twos = document.getElementById("2");
let threes = document.getElementById("3");
let fours = document.getElementById("4");
let fives = document.getElementById("5");
let rating = document.getElementById("rating");
let rating_sections = document.getElementById("rating-sections");
let thankyou_section = document.getElementById("thankyou_section");

let x = 0;
let y;
function submit() {
  if (x == 1) {
    rating_sections.style.display = "none";
    thankyou_section.style.display = "flex";
    rating.innerText = y;
    console.log(`you have selected ${y} out of 5`);
  } else {
    rating_sections.style.display = "none";
    thankyou_section.style.display = "flex";
    rating.innerText = "5";
  }
}
function one() {
  if (ones.id == "1") {
    ones.style.backgroundColor = "grey";
    twos.style.backgroundColor = "hsl(216, 12%, 8%)";
    threes.style.backgroundColor = "hsl(216, 12%, 8%)";
    fours.style.backgroundColor = "hsl(216, 12%, 8%)";
    fives.style.backgroundColor = "hsl(216, 12%, 8%)";
    y = ones.id;
    x = 1;
  }
}
function two() {
  if (twos.id == "2") {
    twos.style.backgroundColor = "grey";
    ones.style.backgroundColor = "hsl(216, 12%, 8%)";
    threes.style.backgroundColor = "hsl(216, 12%, 8%)";
    fours.style.backgroundColor = "hsl(216, 12%, 8%)";
    fives.style.backgroundColor = "hsl(216, 12%, 8%)";
    y = twos.id;
    x = 1;
  }
}
function three() {
  if (threes.id == "3") {
    threes.style.backgroundColor = "grey";
    ones.style.backgroundColor = "hsl(216, 12%, 8%)";
    twos.style.backgroundColor = "hsl(216, 12%, 8%)";
    fours.style.backgroundColor = "hsl(216, 12%, 8%)";
    fives.style.backgroundColor = "hsl(216, 12%, 8%)";
    y = threes.id;
    x = 1;
  }
}
function four() {
  if (fours.id == "4") {
    fours.style.backgroundColor = "grey";
    ones.style.backgroundColor = "hsl(216, 12%, 8%)";
    twos.style.backgroundColor = "hsl(216, 12%, 8%)";
    threes.style.backgroundColor = "hsl(216, 12%, 8%)";
    fives.style.backgroundColor = "hsl(216, 12%, 8%)";
    y = fours.id;
    x = 1;
  }
}
function five() {
  if (fives.id == "5") {
    fives.style.backgroundColor = "grey";
    ones.style.backgroundColor = "hsl(216, 12%, 8%)";
    twos.style.backgroundColor = "hsl(216, 12%, 8%)";
    threes.style.backgroundColor = "hsl(216, 12%, 8%)";
    fours.style.backgroundColor = "hsl(216, 12%, 8%)";
    y = fives.id;
    x = 1;
  }
}
