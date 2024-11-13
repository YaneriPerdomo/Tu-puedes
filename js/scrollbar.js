function scrollp() {
    document.addEventListener("scroll", (e) => {
        let scroll3 = document.querySelector(".scroll");
        if (scrollY > 20) {
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

scrollp()