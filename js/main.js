const cats = ["cat.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg", "cat5.jpg"];
const catList = document.getElementsByClassName("cat-list")[0];
for (let i = 0; i < cats.length; i++) {
  const button = document.createElement("button");
  button.innerText = cats[i].split(".")[0];
  button.className = "cat-button";
  button.value = i;
  catList.appendChild(button);
}

