const cats = [
  { name: "Lily", path: "cat.jpg", counter: 0 },
  { name: "Max", path: "cat2.jpg", counter: 0 },
  { name: "Loby", path: "cat3.jpg", counter: 0 },
  { name: "Mandy", path: "cat4.jpg", counter: 0 },
  { name: "Jack", path: "cat5.jpg", counter: 0 },
];
const catList = document.getElementsByClassName("cat-list")[0];
const catContainer = document.getElementsByClassName("cat-container")[0];

for (let i = 0; i < cats.length; i++) {
  const button = document.createElement("button");
  button.innerText = cats[i].name;
  button.className = "cat-button";
  button.value = i;
  button.onclick = function () {
    const catPic = document.getElementsByClassName("cat-pic")[0];
    catPic.src = `img/${cats[this.value].path}`;
  };
  catList.appendChild(button);
}

const img = document.createElement("img");
const p = document.createElement("p");
p.textContent = `Please don't click on ${cats[0].name}`;
p.className = "cat-name";
p.style = "margin-bottom:10px";
img.src = `img/${cats[0].path}`;
img.alt = cats[0].name;
img.className = "cat-pic";
img.onclick = () => {
  cats[0].counter++;
  p.textContent = `You clicked on ${cats[0].name}: ${cats[0].counter} times`;
};
catContainer.appendChild(p);
catContainer.appendChild(img);
