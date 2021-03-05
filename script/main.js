const navShow = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('close');
    });



}
navShow();

window.onload = function() {
    document.querySelector(".kapsayici").style.display = ("block");
    document.querySelector(".loader").style.display = ("none");
}