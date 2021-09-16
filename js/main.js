const catModel = {
  currentCat: null,
  cats: [
    { name: "Lily", path: "cat.jpg", counter: 0 },
    { name: "Max", path: "cat2.jpg", counter: 0 },
    { name: "Loby", path: "cat3.jpg", counter: 0 },
    { name: "Mandy", path: "cat4.jpg", counter: 0 },
    { name: "Jack", path: "cat5.jpg", counter: 0 },
  ],
};

const catView = {
  init: function () {
    this.catImg = document.getElementsByClassName("cat-pic")[0];
    this.catName = document.getElementsByClassName("cat-name")[0];
    this.catImg.onclick = () => {
      octopus.incrementCatCounter();
    };
    this.render();
  },

  render: function () {
    const currentCat = octopus.getCurrentCat();
    if (currentCat.counter !== 0)
      this.catName.textContent = `You clicked on ${currentCat.name}: ${currentCat.counter} times`;
    else this.catName.textContent = `Please don't click on ${currentCat.name}`;
    this.catImg.src = `img/${currentCat.path}`;
    this.catImg.alt = currentCat.name;
  },
};

const catListView = {
  init: function () {
    this.catList = document.getElementsByClassName("cat-list")[0];
    this.render();
  },

  render: function () {
    const cats = octopus.getCats();
    const setCurrentCat = octopus.setCurrentCat;
    for (let i = 0; i < cats.length; i++) {
      const cat = cats[i];
      const button = document.createElement("button");
      button.innerText = cat.name;
      button.className = "cat-button";
      button.onclick = function () {
        setCurrentCat(cat);
        catView.render();
      };
      this.catList.appendChild(button);
    }
  },
};

const octopus = {
  init: function () {
    catModel.currentCat = catModel.cats[0];
    catListView.init();
    catView.init();
  },

  getCurrentCat: () => {
    return catModel.currentCat;
  },

  getCats: () => {
    return catModel.cats;
  },

  setCurrentCat: (cat) => {
    catModel.currentCat = cat;
  },

  incrementCatCounter: () => {
    catModel.currentCat.counter++;
    catView.render();
  },
};

octopus.init();
