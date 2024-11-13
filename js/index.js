"use strict";
function scrollp() {
    document.addEventListener("scroll", (e) => {
        let scroll3 = document.querySelector(".scroll");
        if (scrollY > 300) {
            scroll3.classList.remove("hidden");
        }
        else {
            scroll3.classList.add("hidden");
        }
        const scroll_top_btn = document.querySelector(".scroll_top_btn");
        scroll_top_btn.addEventListener("click", (e) => {
            window.scrollTo({
                behavior: "smooth",
                top: 0,
            });
        });
    });
}
scrollp();
/*función que le permite manipular el desplazamiento en la vista principal (índice)*/
function scrolly() {
    document.addEventListener("scroll", (e) => {
        let header = document.querySelector("body > header");
        let nav_link = document.querySelectorAll(".nav-link");
        let $card_deck = document.querySelectorAll(".card-deck");
        if (scrollY > 1100) {
            $card_deck.forEach(e => {
                e.classList.remove("hidden");
            });
        }
        else {
            header.style.backgroundColor = "white";
            nav_link.forEach(element => {
                element.removeAttribute("style");
            });
        }
    });
}
window.addEventListener("DOMContentLoaded", (e) => {
    scrollp();
    scrolly();
});
