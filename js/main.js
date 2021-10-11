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
    this.viewControl = document.getElementsByClassName("admin-button")[0];
    this.catInfo = document.getElementsByClassName("update-cat-info")[0];
    this.catInfo.style.display = "none";
    this.viewControl.onclick = () => {
      if (this.catInfo.style.display === "none") {
        this.catInfo.style.display = "block";
        this.render();
      } else this.catInfo.style.display = "none";
    };
  },

  render: function () {
    const cat = octopus.getCurrentCat();
    const catName = document.getElementById("cat-name-i");
    const catUrl = document.getElementById("cat-url-i");
    const catClicks = document.getElementById("cat-clicks-i");
    const updateInfo = document.getElementById("cat-update-info");
    catName.value = cat.name;
    catUrl.value = cat.path;
    catClicks.value = cat.counter;
    updateInfo.onclick = () => {
      if (cat.name != catName.value) console.log("update name");
      if (cat.path != catUrl.value) console.log("update path");
      if (cat.counter != catClicks.value) console.log("update value");
    };
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
    updateCatInfo.render();
  },

  incrementCatCounter: () => {
    catModel.currentCat.counter++;
    catView.render();
    updateCatInfo.render();
  },
};

octopus.init();
