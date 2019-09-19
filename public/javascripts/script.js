document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
  },
  false
);

// navbar menu

const tabmenu = () => {
  "use strict";
  const navIcon = document.querySelector("#nav-icon");

  navIcon.addEventListener("click", () => {
    document.body.classList.toggle("background--blur");
    navIcon.classList.toggle("open");
    const menu = document.querySelector(".menu--off ");
    menu.classList.toggle("menu--on");
  });
};
tabmenu();


const items = document.querySelectorAll(".accordion a");
const filterItem = document.querySelectorAll(".filter-accordion p");

function toggleAccordion() {
  console.log("clicked");
  this.classList.toggle("active");
  this.nextElementSibling.classList.toggle("active");
}

items.forEach(item => item.addEventListener("click", toggleAccordion));
filterItem.forEach(item => item.addEventListener("click", toggleAccordion));

const swipe = () => {

  window.addEventListener("load", (event) => {
    var touchStartX;
    var touchStartY;
    var touchMoveX;
    var touchMoveY;


    window.addEventListener("touchstart", function (event) {
      event.preventDefault();

      touchStartX = event.touches[0].pageX;
      touchStartY = event.touches[0].pageY;
    }, false);


    window.addEventListener("touchmove", function (event) {
      event.preventDefault();

      touchMoveX = event.changedTouches[0].pageX;
      touchMoveY = event.changedTouches[0].pageY;
    }, false);


    window.addEventListener("touchend", (event) => {

      if (touchStartY > touchMoveY) {
        if (touchStartY > (touchMoveY + 50)) {
          //swipe down
          location.href = "/map"

        }
      } else if (touchStartY < touchMoveY) {
        if ((touchStartY + 50) < touchMoveY) {
          //swipe up
          location.href = "/list"
        }
      }
    }, false);
  }, false);
};

const dish = document.querySelector(".dish");
dish.classList.ontouchstart = swipe;