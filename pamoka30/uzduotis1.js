const body = document.querySelector("body");
const main = document.createElement("main");
const img = document.createElement("img");
const h3 = document.createElement("h3");
const p1 = document.createElement("p");
const p2 = document.createElement("p");

h3.textContent = "Trent Walton";
p1.textContent = "Founder & 1/3 of @paravelinc";
p2.textContent = "Austin, TX";

body.append(main);
main.append(img, h3, p1, p2);

body.setAttribute("style", "background-color: lightblue");
main.setAttribute("style", "text-align: center; background-color: white; width: 40%; margin: 3rem auto; border-radius: 10px");

img.src = "assets/trent.jpeg";
img.setAttribute("style", "width: 20%; border: 3px solid white; border-radius: 50%; box-shadow: 1px 1px 2px 1px lightgrey; transform: translate(0, -1.5rem)");

h3.setAttribute("style", "margin-top: 0");
p1.setAttribute("style", "color: gray");
p2.setAttribute("style", "color: gray; padding-bottom: 2rem");
