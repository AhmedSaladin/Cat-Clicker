const catImg = document.getElementsByClassName("cat")[0];
const clickedNumber = document.getElementsByClassName("click-number")[0];
let clicked = 0;

catImg.addEventListener("click", () => {
  clicked++;
  clickedNumber.innerHTML = `You have clicked the cat: ${clicked} times`;
});
