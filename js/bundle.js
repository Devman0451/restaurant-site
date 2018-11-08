const hamburger = document.querySelector('.hamburger');
const closeMenuButton = document.querySelector('.close-icon');
const rightMenu = document.querySelector('.landing-right-menu');
const leftMenu = document.querySelector('.landing-left-menu');

function changeMenu(left, right, burger, close) {
    leftMenu.style.display = left;
    rightMenu.style.display = right;
    hamburger.style.display = burger;
    closeMenuButton.style.display = close;
}

function responsiveMenuCheck() {
    if (window.innerWidth >= 700){
      changeMenu("block", "block", "none", "none");
    } else {
      changeMenu("none", "none", "block", "none")
    }
}

window.addEventListener('resize', responsiveMenuCheck);
hamburger.addEventListener('click', () => {
    changeMenu("block", "block", "none", "block")
});
closeMenuButton.addEventListener('click', () => {
    changeMenu("none", "none", "block", "none")
});