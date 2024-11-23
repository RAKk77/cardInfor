const people = [
  {
    Name: "Ren Rechana",
    Position: "Studentd",
    images: "./images/person2.webp",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          reprehenderit deleniti quaerat blanditiis laboriosam, reiciendis
          suscipit nobis cupiditate odio soluta.`,
  },
  {
    Name: "Karina",
    Position: "Busennis",
    images: "./images/person3.webp",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          reprehenderit deleniti quaerat blanditiis laboriosam, reiciendis
          suscipit nobis cupiditate odio soluta.`,
  },
  {
    Name: "LIna",
    Position: "Teacher",
    images: "./images/person4.webp",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          reprehenderit deleniti quaerat blanditiis laboriosam, reiciendis
          suscipit nobis cupiditate odio soluta.`,
  },
  {
    Name: "Zayn",
    Position: "Singer",
    images: "./images/person5.png",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          reprehenderit deleniti quaerat blanditiis laboriosam, reiciendis
          suscipit nobis cupiditate odio soluta.`,
  },
  {
    Name: "Justin",
    Position: "Singer",
    images: "./images/person6.png",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          reprehenderit deleniti quaerat blanditiis laboriosam, reiciendis
          suscipit nobis cupiditate odio soluta.`,
  },
];

const img = document.querySelector(".img > img");
const author = document.querySelector(".author");
const position = document.querySelector(".position");
const txt = document.querySelector(".throught");
const pre = document.querySelector(".up");
const next = document.querySelector(".down");

window.addEventListener("DOMContentLoaded", () => {
  const Randominfor = Math.floor(Math.random() * people.length);
  Showing(Randominfor);
});

function Showing(conter) {
  const person = people[conter];
  img.src = person.images;
  author.textContent = person.Name;
  position.textContent = person.Position;
  text.textContent = person.text;
}

let conter = 0;
next.onclick = function () {
  if (conter == people.length - 1) {
    conter = 0;
  } else {
    conter++;
  }
  Showing(conter);
};

pre.onclick = function () {
  if (conter == 0) {
    conter = people.length - 1;
  } else {
    conter--;
  }
  Showing(conter);
};
