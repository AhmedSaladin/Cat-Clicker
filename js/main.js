const catModel = {
  currentCat: null,
  cats: [
    { name: "Lily", path: "img/cat.jpg", counter: 0 },
    { name: "Max", path: "img/cat2.jpg", counter: 0 },
    { name: "Loby", path: "img/cat3.jpg", counter: 0 },
    { name: "Mandy", path: "img/cat4.jpg", counter: 0 },
    { name: "Jack", path: "img/cat5.jpg", counter: 0 },
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
    this.catImg.src = `${currentCat.path}`;
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

const updateCatInfo = {
  init: function () {
    this.render();
  },
  render: function () {
    const cat = octopus.getCurrentCat();
    const catName = (document.getElementById("cat-name-i").value = cat.name);
    const catUrl = (document.getElementById("cat-url-i").value = cat.path);
    const catClicks = (document.getElementById("cat-clicks-i").value =
      cat.counter);
    const updateInfo = document.getElementById("cat-update-info");
  },
};

const octopus = {
  init: function () {
    catModel.currentCat = catModel.cats[0];
    catListView.init();
    catView.init();
    updateCatInfo.init();
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
    updateCatInfo.init();
  },
};

octopus.init();
