const catImg1 = document.getElementsByClassName("cat")[0];
const catImg2 = document.getElementsByClassName("cat")[1];
const clickedCat1Number = document.getElementsByClassName("click-number")[0];
const clickedCat2Number = document.getElementsByClassName("click-number")[1];
let clicked1 = 0;
let clicked2 = 0;

catImg1.addEventListener("click", () => {
  clicked1++;
  clickedCat1Number.innerHTML = `You have clicked Lily: ${clicked1} times`;
});
catImg2.addEventListener("click", () => {
  clicked2++;
  clickedCat2Number.innerHTML = `You have clicked the Nordy: ${clicked2} times`;
});
