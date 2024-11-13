        let $iconTag = document.querySelectorAll("[data-talk]"); //Etiqueta de icono para generar la API de Google para hablar.
        let $ButtonsExampleOne = document.querySelectorAll("[data-example='one']");
        let $ButtonsExampleTwo = document.querySelectorAll("[data-example='two']");
        let $box = document.querySelector(".box");
        let $ButtonsExampleThree = document.querySelectorAll("[data-example='three']");
        let $correctSound = document.querySelector(".correctSound");
        let $wrongSoung = document.querySelector(".wrong")
        let $mainSound =document.querySelector(".mainSound")
        document.addEventListener("click", e => {
            if (e.target.matches(".wordButtons > button")) {
                if (e.target.textContent == "3") {
                    $ButtonsExampleOne.forEach(el => {
                        el.disabled = true
                    })
                    e.target.classList.add("hoverVerde");
                    $correctSound.play();
                    $box.classList.add("hoverVerde")
                    setTimeout(() => {
                        $ButtonsExampleOne.forEach(el => {
                            el.removeAttribute(disabled)
                        })
                        $box.classList.remove("hoverVerde")
                        e.target.classList.remove("hoverVerde")
                    }, 2000);
                } else {
                    $ButtonsExampleOne.forEach(el => {
                        el.disabled = true
                    })
                    e.target.classList.add("hoverRed");
                    $wrongSoung.play()
                    $box.classList.add("hoverRed")
                    setTimeout(() => {
                        $box.classList.remove("hoverRed")
                        $ButtonsExampleOne.forEach(el => {
                            el.removeAttribute("disabled");
                        })
                        e.target.classList.remove("hoverRed")
                    }, 2000);
                }
            }


            if (e.target.matches(".wordButtons > button > img")) {
                if (e.target.getAttribute("alt") == "Leon") {
                    $ButtonsExampleTwo.forEach(el => {
                        el.disabled = true
                    })
                    e.target.classList.add("hoverVerde");
                    $correctSound.play()
                    setTimeout(() => {
                        e.target.classList.remove("hoverVerde")
                        $ButtonsExampleTwo.forEach(el => {
                            el.removeAttribute("disabled");
                        })
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

            
            document.addEventListener("mousemove", (e) => {
                if (e.target.matches(".wordButtons > button")) {
                    $mainSound.play();
                }
            });

            if (e.target.matches("[data-talk]")) {
                speechSynthesis.cancel()
                let texto = `${e.target.getAttribute("data-talk")}`;
                const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
                hablar(texto);
            }
        })

