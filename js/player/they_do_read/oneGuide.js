let $iconTag = document.querySelectorAll("[data-talk]"); //Etiqueta de icono para generar la API de Google para hablar.
let $ButtonsExampleOne = document.querySelectorAll("[data-example='one']");
let $ButtonsExampleTwo = document.querySelectorAll("[data-example='two']");
let $ButtonsExampleThree = document.querySelectorAll("[data-example='three']");
let $correctSound = document.querySelector(".correctSound");
let $wrongSoung = document.querySelector(".wrong")
let $mainSound =document.querySelector(".mainSound")


document.addEventListener("click", e => {
    if (e.target.matches(".containerButton > button")) {
        if (e.target.getAttribute("data-example") == "one") {
            if (e.target.textContent == "b") {
                $ButtonsExampleOne.forEach(el => {
                    el.disabled = true
                })
                e.target.classList.add("hoverVerde");
                $correctSound.play()
                setTimeout(() => {
                    $ButtonsExampleOne.forEach(el => {
                        el.removeAttribute("disabled");
                    })
                    e.target.classList.remove("hoverVerde")
                }, 2000);
            } else {
                $ButtonsExampleOne.forEach(el => {
                    el.disabled = true
                })
                e.target.classList.add("hoverRed");
                $wrongSoung.play()
                setTimeout(() => {
                    $ButtonsExampleOne.forEach(el => {
                        el.removeAttribute("disabled");
                    })
                    e.target.classList.remove("hoverRed")
                }, 2000);
            }
        } else if (e.target.getAttribute("data-example") == "two") {
            if (e.target.textContent == "m" ) {
                e.target.innerHTML = "n"
                $ButtonsExampleTwo.forEach(el => {
                    el.disabled = true;
                    el.classList.add("hoverVerde")
                })
                e.target.classList.add("hoverVerde");
                $correctSound.play()
                setTimeout(() => {
                  
                }, 2000);
            } else {
                $ButtonsExampleTwo.forEach(el => {
                    el.disabled = true
                })
                e.target.classList.add("hoverRed");
                $wrongSoung.play()
                setTimeout(() => {
                    $ButtonsExampleTwo.forEach(el => {
                        el.removeAttribute("disabled");
                    })
                    e.target.classList.remove("hoverRed")
                }, 2000);
            }
        }
    }


    document.addEventListener("mousemove", (e) => {
        if (e.target.matches(".wordButtons > button") || e.target.matches(".containerButton > button")) {
            $mainSound.play();
        }
    });

    if (e.target.matches(".wordButtons > button")) {
        if (e.target.textContent == "piscina") {
            $ButtonsExampleThree.forEach(el => {
                el.disabled = true
            })
            e.target.classList.add("hoverVerde");
            $correctSound.play()
            setTimeout(() => {
                $ButtonsExampleThree.forEach(el => {
                    el.removeAttribute("disabled");
                })
                e.target.classList.remove("hoverVerde")
            }, 2000);
        } else {
            $ButtonsExampleThree.forEach(el => {
                el.disabled = true
            })
            e.target.classList.add("hoverRed");
            $wrongSoung.play()
            setTimeout(() => {
                $ButtonsExampleThree.forEach(el => {
                    el.removeAttribute("disabled");
                })
                e.target.classList.remove("hoverRed")
            }, 2000);
        }
    }

    if (e.target.matches("[data-talk]")) {
        speechSynthesis.cancel()
        let texto = `${e.target.getAttribute("data-talk")}`;
        const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
        hablar(texto);
    }
})

