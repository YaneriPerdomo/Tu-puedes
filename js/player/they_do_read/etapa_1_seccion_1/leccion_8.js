import { _1_3, $countDownBody } from "../../auxiliares/windowModal3_1.js"
//Variables
let $dataWrong = document.querySelector("[data-wrong]");
let $wrongSound = document.querySelector(".wrongSound");
let $correctSound = document.querySelector(".correctSound");
let $tableContainer = document.querySelector(".tableContainer");
let $starNumber = document.querySelector(".start");
let $progressBar = document.querySelector(".progress-bar");
let incorrectCounter = 0;
let $tableContainer_2 = document.querySelector(".tableContainer_2");
let $tableContainer_3 = document.querySelector(".tableContainer_3")
let $tresEjercicio = document.querySelector(".tresEjercicio")
let $letterSound = document.querySelector(".letterSound");
let $intentosNumber = document.querySelectorAll(".intentos > .number");
let $twoEjercicio = document.querySelector(".twoEjercicio");
let $paragrahMessenger = document.querySelector(".messengerInformation > p");

let $span = document.querySelectorAll(".tableContainer_2 > button");
let $span_2 = document.querySelectorAll(".tableContainer_3 > button");
//Contadores.
//Ejercicio numero uno 
let correctCounterP = 0;
let ErrorCounterP = 0;

//Ejercicio numero dos.
let findcorrectCounter = 0;
let findErrorCounter = 0;

//ejercicio numero tres;
let findcorrectCounter_2 = 0;
let findErrorCounter_2 = 0;

let randomNumber = 0;
let intentos = 3;
let count = 0;
let countTotal = 0;
let correctCounter = 0;
let acceptedPoints = 0;
let totalTimes = 0;
let _1_3_text = document.querySelector(".text_1_3");
let $spanLetter = document.querySelectorAll(".tableContainer > button");
let $repeatDictation = document.querySelector(".repeatDictation");


//Eventos

//LocalStorage
document.addEventListener("DOMContentLoaded", async (e) => {
    await defineLetter("q", "b", "p", 2)
    if (localStorage.getItem("letter") === null) {
        localStorage.setItem("letter", null);
    }
    if (localStorage.getItem("spanNumber") === null) {
        localStorage.setItem("spanNumber", null);
    }
});

//Es como un hover y se disparara un sonido
document.addEventListener("mousemove", (e) => {
    if (e.target.matches(".tableContainer > button") || e.target.matches(".tableContainer_2 > button")) {
        try {
            $letterSound.play();
        } catch (error) {
            alert("error");
        }
    }
});

function _1_3_again() {
    let count = 3;
    _1_3_text.innerHTML = "¡Lo intentamos de nuevo!"

    countdownElement.innerHTML = "3";
    $countDownBody.removeAttribute("style");
    let countdown = setInterval(() => {
        count--;
        countdownElement.textContent = count;
        if (count === 0) {
            clearInterval(countdown);
            $countDownBody.style.display = "none";
        }
    }, 1000);
}

document.addEventListener("click", (e) => {
    if (e.target.matches(".btnSalir")) {
        e.preventDefault();
    }
    if (e.target.matches(".siguiente")) {
        let $continue = document.querySelector(".siguiente");
        let $last = document.querySelector(".last");
        let $first = document.querySelector(".first");
        $first.style.display = "none";
        $last.classList.add("animationBounceOut");
        $last.removeAttribute("style");
    }
    if (e.target.matches(".tableContainer > button")) {
        if (e.target.textContent == "p") {
            acceptedPoints++
            correctCounterP++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.classList.add("hoverVerde");
            $spanLetter.forEach(letter => {
                letter.disabled = true;
                setTimeout(() => {
                    letter.removeAttribute("disabled")
                }, 2000);
            });
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 1}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 1}%`;
            }
            
            $wrongSound.pause();
            $correctSound.play();
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                nextP();
                $correctSound.pause();
            }, 2000);
        } else {
            $spanLetter.forEach((letter) => {
                letter.disabled = true;
                if (letter.textContent === localStorage.getItem("letter")) {
                    letter.classList.add("hoverVerde");
                    letter.disabled = true;
                    setTimeout(() => {
                        letter.classList.remove("hoverVerde");
                        letter.removeAttribute("disabled")
                    }, 2000);
                }
                setTimeout(() => {
                    letter.removeAttribute("disabled")
                }, 2000);
            });
            e.target.classList.add("hoverRed");
            $dataWrong.setAttribute("data-wrong", "true");
            if ($dataWrong.getAttribute("data-wrong")) {
                $wrongSound.play();
            }
            setTimeout(() => {
                e.target.classList.remove("hoverRed");
                nextP()
            }, 2000);
            setTimeout(() => {
                $dataWrong.setAttribute("data-wrong", "false");
            }, 2000);
            ErrorCounterP = ErrorCounterP + 1;
            
        }
    }

    if (e.target.matches(".tableContainer_2 > button")) {
        if (e.target.textContent == "s" && $tableContainer_2.getAttribute("data-correct-letter") == "arreglo") {
            $wrongSound.pause();
            $correctSound.play();
            acceptedPoints++

            findcorrectCounter++;
            e.target.style.display = "none"
            $intentosNumber[0].textContent = 3;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde")
                    e.disabled = true
                }
            })
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 1}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 1}%`;
            }
            


            setTimeout(() => {
                $span.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter();
            }, 3000);
        } else {
            $intentosNumber[0].textContent = parseInt($intentosNumber[0].textContent) - 1;
            findErrorCounter++;
            $wrongSound.play();
            $span.forEach(el => {
                if (el.textContent !== "undefined") {
                    el.classList.add("hoverRed");
                    el.disabled = true
                }

            })
            setTimeout(() => {
                $span.forEach(e => {
                    if (e.textContent.length !== "undefined") {
                        e.classList.remove("hoverRed");
                        e.removeAttribute("disabled")
                    }
                })

            }, 3000);
            if ($intentosNumber[0].textContent == 0) {
                    setTimeout(() => {
                        defineNextLetter();
                    }, 3000);
            }
        }
        if (e.target.textContent == "m" && $tableContainer_2.getAttribute("data-correct-letter") == "insegura") {
            $wrongSound.pause();
            $correctSound.play();
            findcorrectCounter++;
            acceptedPoints++

            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.innerHTML = "n"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde")
                    e.disabled = true
                }
            });
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 1}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 1}%`;
            }
            
          
            setTimeout(async () => {
                $span.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                await defineNextLetter();
            }, 3000);
        }
        if (e.target.textContent == "b" && $tableContainer_2.getAttribute("data-correct-letter") == "vaca") {
            $wrongSound.pause();
            $correctSound.play();
            $intentosNumber[0].textContent = 3;
            findcorrectCounter++;
            acceptedPoints++
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.style.display = "none"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde")
                    e.disabled = true
                }
            });
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 1}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 1}%`;
            }
            
           
            setTimeout(() => {
                $span.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde")
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter()


            }, 3000);
        }
        if (e.target.textContent == "p" && $tableContainer_2.getAttribute("data-correct-letter") == "hola") {
            $wrongSound.pause();
            $correctSound.play();
            findcorrectCounter++;
            acceptedPoints++
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[0].textContent = 3;
            e.target.style.display = "none"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true
                }
            })
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 1}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 1}%`;
            }
            
            setTimeout(() => {
                $span.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter();

            }, 3000);
        }
        if (e.target.textContent == "1" && $tableContainer_2.getAttribute("data-correct-letter") == "cinco") {
            $wrongSound.pause();
            $correctSound.play();
            acceptedPoints++
            findcorrectCounter++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[0].textContent = 3;
            e.target.style.display = "none"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            })
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 1}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 1}%`;
            }
            
            setTimeout(() => {
                $span.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter();

            }, 3000);
        }
        if (e.target.textContent == "s" && $tableContainer_2.getAttribute("data-correct-letter") == "ferrocarril") {
            $wrongSound.pause();
            acceptedPoints++
            $intentosNumber[0].textContent = 3;
            e.target.style.display = "none"
            $correctSound.play();
            findcorrectCounter++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.style.display = "none"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true
                }
            })
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 1}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 1}%`;
            }
            

            setTimeout(() => {
                $span.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")

                    }
                })
                defineNextLetter();

            }, 3000);
        }
        if (e.target.textContent == "l" && $tableContainer_2.getAttribute("data-correct-letter") == "reloj") {
            $wrongSound.pause();
            $correctSound.play();
            acceptedPoints++
            findcorrectCounter++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[0].textContent = 3;
            e.target.style.display = "none"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            })
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 1}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 1}%`;
            }
            
            setTimeout(() => {
                $span.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter();

            }, 3000);

        }



        if (e.target.textContent == "q" && $tableContainer_2.getAttribute("data-correct-letter") == "zapatillas") {
            $wrongSound.pause();
            $correctSound.play();
            acceptedPoints++
            findcorrectCounter++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[0].textContent = 3;
            e.target.innerHTML = "p"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            })
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 1}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 1}%`;
            }
            
            setTimeout(() => {
                $span.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter();

            }, 3000);

        }
        if (e.target.textContent == "u" && $tableContainer_2.getAttribute("data-correct-letter") == "llave") {
            $wrongSound.pause();
            $correctSound.play();
            acceptedPoints++
            findcorrectCounter++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[0].textContent = 3;
            e.target.innerHTML = "v"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            });
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 1}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 1}%`;
            }
            
           
            setTimeout(() => {
                $span.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter();

            }, 3000);

        }
        if (e.target.textContent == "d" && $tableContainer_2.getAttribute("data-correct-letter") == "sombrero") {
            $wrongSound.pause();
            findcorrectCounter++;
            acceptedPoints++
            $correctSound.play();
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[0].textContent = 3;
            e.target.innerHTML = "b"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            })
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 1}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 1}%`;
            }
            
            setTimeout(() => {
                $span.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter();

            }, 3000);

        }
        if (e.target.textContent == "ɐ" && $tableContainer_2.getAttribute("data-correct-letter") == "escritura") {
            $wrongSound.pause();
            $correctSound.play();
            findcorrectCounter++;
            acceptedPoints++
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[0].textContent = 3;
            e.target.innerHTML = "a"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            });
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 1}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 1}%`;
            }
            
           
            setTimeout(() => {
                $span.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter();

            }, 3000);

        }
        if (e.target.textContent == "d" && $tableContainer_2.getAttribute("data-correct-letter") == "sabores") {
            $wrongSound.pause();
            acceptedPoints++
            $correctSound.play();
            findcorrectCounter++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[0].textContent = 3;
            e.target.innerHTML = "b"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            });
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 1}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 1}%`;
            }
            
           
            setTimeout(() => {
                $span.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter();

            }, 3000);

        }
        if (e.target.textContent == "m" && $tableContainer_2.getAttribute("data-correct-letter") == "balón") {
            $wrongSound.pause();
            $correctSound.play();
            acceptedPoints++
            findcorrectCounter++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[0].textContent = 3;
            e.target.innerHTML = "n"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            });
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 1}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 1}%`;
            }
            
           
            setTimeout(() => {
                $span.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter();

            }, 3000);

        }
        if (e.target.textContent == "d" && $tableContainer_2.getAttribute("data-correct-letter") == "existente") {
            $wrongSound.pause();
            $correctSound.play();
            findcorrectCounter++;
            acceptedPoints++
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[0].textContent = 3;
            e.target.innerHTML = "n"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            });
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 1}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 1}%`;
            }
            
           
            setTimeout(() => {
                $span.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter();

            }, 3000);

        }
        if (e.target.textContent == "v" && $tableContainer_2.getAttribute("data-correct-letter") == "tortuga") {
            $wrongSound.pause();
            acceptedPoints++
            $correctSound.play();
            findcorrectCounter++;

            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[0].textContent = 3;
            e.target.innerHTML = "u"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            });
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 1}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 1}%`;
            }
            
           
            setTimeout(() => {
                $span.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter();

            }, 3000);

        }
        if (e.target.textContent == "a" && $tableContainer_2.getAttribute("data-correct-letter") == "sofá") {
            $wrongSound.pause();
            $correctSound.play();
            findcorrectCounter++;
            acceptedPoints++
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[0].textContent = 3;
            e.target.innerHTML = "á"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            });
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 1}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 1}%`;
            }
            
           
            setTimeout(() => {
                $span.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter();

            }, 3000);

        }
        if (e.target.textContent == "o" && $tableContainer_2.getAttribute("data-correct-letter") == "canción") {
            $wrongSound.pause();
            $correctSound.play();
            findcorrectCounter++;
            acceptedPoints++

            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[0].textContent = 3;
            e.target.innerHTML = "ó"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            });
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 1}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 1}%`;
            }
            
           
            setTimeout(() => {
                $span.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter();

            }, 3000);

        }
        if (e.target.textContent == "u" && $tableContainer_2.getAttribute("data-correct-letter") == "tú") {
            $wrongSound.pause();
            $correctSound.play();
            findcorrectCounter++;
            acceptedPoints++

            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[0].textContent = 3;
            e.target.innerHTML = "ú"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            });
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 1}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 1}%`;
            }
            
           
            setTimeout(() => {
                $span.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter();

            }, 3000);

        }
        if (e.target.textContent == "u" && $tableContainer_2.getAttribute("data-correct-letter") == "menú") {
            $wrongSound.pause();
            $correctSound.play();
            findcorrectCounter++;
            acceptedPoints++

            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[0].textContent = 3;
            e.target.innerHTML = "ú"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            });
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 1}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 1}%`;
            }
            
           
            setTimeout(() => {
                $span.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter();

            }, 3000);

        }
        if (e.target.textContent == "s" && $tableContainer_2.getAttribute("data-correct-letter") == "Venezuela") {
            $wrongSound.pause();
            $correctSound.play();
            findcorrectCounter++;

            acceptedPoints++

            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[0].textContent = 3;
            e.target.innerHTML = "z"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            });
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 1}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 1}%`;
            }
            
           
            setTimeout(() => {
                $span.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter();

            }, 3000);
        }
    }

    if (e.target.matches(".tableContainer_3 > button")) {
        if (e.target.textContent == "q" && $tableContainer_3.getAttribute("data-correct-letter") == "Zapatillas rojas") {
            $wrongSound.pause();
            $correctSound.play();
            acceptedPoints++

            findcorrectCounter_2++;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            e.target.innerHTML = "p"
            $intentosNumber[1].textContent = 3;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $span_2.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde")
                    e.disabled = true
                }
            })
            setTimeout(() => {
                $span_2.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter_3();
            }, 3000);
        } else {
            $intentosNumber[1].textContent = parseInt($intentosNumber[1].textContent) - 1;
            findErrorCounter_2++;
            $wrongSound.play();
            $span_2.forEach(el => {
                if (el.textContent !== "undefined") {
                    el.classList.add("hoverRed");
                    el.disabled = true
                }

            })
            setTimeout(() => {
                $span_2.forEach(e => {
                    if (e.textContent.length !== "undefined") {
                        e.classList.remove("hoverRed");
                        e.removeAttribute("disabled")
                    }
                })

            }, 3000);
            if ($intentosNumber[1].textContent == 0) {
                setTimeout(() => {
                        defineNextLetter_3()
                }, 3000);


            }
        }
        if (e.target.textContent == "b" && $tableContainer_3.getAttribute("data-correct-letter") == "Mi vaca es linda") {
            $wrongSound.pause();
            $correctSound.play();
            findcorrectCounter++;
            acceptedPoints++

            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.innerHTML = "v"
            $span_2.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde")
                    e.disabled = true
                }
            })

            setTimeout(async () => {
                $span_2.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                await defineNextLetter_3();
            }, 3000);
        }
        if (e.target.textContent == "b" && $tableContainer_3.getAttribute("data-correct-letter") == "Pepitos de colores") {
            $wrongSound.pause();
            $correctSound.play();
            acceptedPoints++

            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            $intentosNumber[1].textContent = 3;
            findcorrectCounter++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.innerHTML = "d"
            $span_2.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde")
                    e.disabled = true
                }
            })

            setTimeout(() => {
                $span_2.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde")
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter_3()


            }, 3000);
        }
        if (e.target.textContent == "n" && $tableContainer_3.getAttribute("data-correct-letter") == "Sombrero amarrillo") {
            $wrongSound.pause();
            $correctSound.play();
            acceptedPoints++

            findcorrectCounter++;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[1].textContent = 3;
            e.target.innerHTML = "m"
            $span_2.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true
                }
            })

            setTimeout(() => {
                $span_2.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter_3();

            }, 3000);
        }
        if (e.target.textContent == "i" && $tableContainer_3.getAttribute("data-correct-letter") == "Hay un reloj viejo") {
            $wrongSound.pause();
            $correctSound.play();
            acceptedPoints++

            findcorrectCounter++;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[1].textContent = 3;
            e.target.innerHTML = "y"
            $span_2.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            })

            setTimeout(() => {
                $span_2.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter_3();

            }, 3000);
        }
        if (e.target.textContent == "ɘ" && $tableContainer_3.getAttribute("data-correct-letter") == "Un buen vídeo") {
            $wrongSound.pause();
            $intentosNumber[1].textContent = 3;
            e.target.innerHTML = "e"
            acceptedPoints++

            $correctSound.play();
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            findcorrectCounter++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $span_2.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true
                }
            })

            setTimeout(() => {
                $span_2.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")

                    }
                })
                defineNextLetter_3();

            }, 3000);
        }
        if (e.target.textContent == "u" && $tableContainer_3.getAttribute("data-correct-letter") == "La llave cayó en mi casa") {
            $wrongSound.pause();
            $correctSound.play();
            acceptedPoints++

            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            findcorrectCounter++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[1].textContent = 3;
            e.target.innerHTML = "v"
            $span_2.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            })

            setTimeout(() => {
                $span_2.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter_3();

            }, 3000);

        }

        if (e.target.textContent == "k" && $tableContainer_3.getAttribute("data-correct-letter") == "Corredor encantador") {
            $wrongSound.pause();
            $correctSound.play();
            findcorrectCounter++;
            acceptedPoints++

            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[1].textContent = 3;
            e.target.innerHTML = "c"
            $span_2.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            })

            setTimeout(() => {
                $span_2.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter_3();

            }, 3000);

        }
        if (e.target.textContent == "d" && $tableContainer_3.getAttribute("data-correct-letter") == "Pantalla táctil") {
            $wrongSound.pause();
            $correctSound.play();
            acceptedPoints++

            findcorrectCounter++;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[1].textContent = 3;
            e.target.innerHTML = "c"
            $span_2.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            })

            setTimeout(() => {
                $span_2.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter_3();

            }, 3000);

        }
        if (e.target.textContent == "ɐ" && $tableContainer_3.getAttribute("data-correct-letter") == "Escritura buena") {
            $wrongSound.pause();
            findcorrectCounter++;
            $correctSound.play();
            acceptedPoints++

            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[1].textContent = 3;
            e.target.innerHTML = "a"
            $span_2.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            })

            setTimeout(() => {
                $span_2.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter_3();

            }, 3000);

        }
        if (e.target.textContent == "d" && $tableContainer_3.getAttribute("data-correct-letter") == "Sabores fríos") {
            $wrongSound.pause();
            $correctSound.play();
            acceptedPoints++

            findcorrectCounter++;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[1].textContent = 3;
            e.target.innerHTML = "b"
            $span_2.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            })

            setTimeout(() => {
                $span_2.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter_3();

            }, 3000);

        }
        if (e.target.textContent == "d" && $tableContainer_3.getAttribute("data-correct-letter") == "Existe mi casa") {
            $wrongSound.pause();
            $correctSound.play();
            acceptedPoints++

            findcorrectCounter++;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[1].textContent = 3;
            e.target.style.display = "none"
            $span_2.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            })

            setTimeout(() => {
                $span_2.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter_3();

            }, 3000);

        }
        if (e.target.textContent == "m" && $tableContainer_3.getAttribute("data-correct-letter") == "Mi balón es azul") {
            $wrongSound.pause();
            acceptedPoints++

            $correctSound.play();
            findcorrectCounter++;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[1].textContent = 3;
            e.target.innerHTML = "n"
            $span_2.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            })

            setTimeout(() => {
                $span_2.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter_3();

            }, 3000);

        }
        if (e.target.textContent == "a" && $tableContainer_3.getAttribute("data-correct-letter") == "Compró ese sofá") {
            $wrongSound.pause();
            $correctSound.play();
            findcorrectCounter++;
            acceptedPoints++

            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[1].textContent = 3;
            e.target.innerHTML = "á"
            $span_2.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            })

            setTimeout(() => {
                $span_2.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter_3();

            }, 3000);

        }
        if (e.target.textContent == "o" && $tableContainer_3.getAttribute("data-correct-letter") == "Qué buena canción") {
            $wrongSound.pause();
            $correctSound.play();
            acceptedPoints++

            findcorrectCounter++;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[1].textContent = 3;
            e.target.innerHTML = "ó"
            $span_2.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            })

            setTimeout(() => {
                $span_2.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter_3();

            }, 3000);

        }
        if (e.target.textContent == "e" && $tableContainer_3.getAttribute("data-correct-letter") == "Los murciélagos") {
            $wrongSound.pause();
            $correctSound.play();
            acceptedPoints++

            findcorrectCounter++;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[1].textContent = 3;
            e.target.innerHTML = "é"
            $span_2.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            })

            setTimeout(() => {
                $span_2.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter_3();

            }, 3000);

        }
        if (e.target.textContent == "k" && $tableContainer_3.getAttribute("data-correct-letter") == "Este menú es caro") {
            $wrongSound.pause();
            $correctSound.play();
            findcorrectCounter++;
            acceptedPoints++


            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[1].textContent = 3;
            e.target.innerHTML = "c"
            $span_2.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            })

            setTimeout(() => {
                $span_2.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter_3();

            }, 3000);

        }
        if (e.target.textContent == "s" && $tableContainer_3.getAttribute("data-correct-letter") == "Mi Venezuela es próspera") {
            $wrongSound.pause();
            $correctSound.play();
            findcorrectCounter++;
            acceptedPoints++

            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[1].textContent = 3;
            e.target.innerHTML = "z"
            $span_2.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            })

            setTimeout(() => {
                $span_2.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter_3();

            }, 3000);

        }
        if (e.target.textContent == "v" && $tableContainer_3.getAttribute("data-correct-letter") == "Una tortuga") {
            $wrongSound.pause();
            $correctSound.play();
            findcorrectCounter++;
            acceptedPoints++

            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[1].textContent = 3;
            e.target.innerHTML = "u"
            $span_2.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            })

            setTimeout(() => {
                $span_2.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter_3();

            }, 3000);

        }
        if (e.target.textContent == "m" && $tableContainer_3.getAttribute("data-correct-letter") == "Los conejos") {
            $wrongSound.pause();
            $correctSound.play();
            findcorrectCounter++;
            acceptedPoints++

            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }

            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber[1].textContent = 3;
            e.target.innerHTML = "n"
            $span_2.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            })
            setTimeout(() => {
                $span_2.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.classList.remove("hoverVerde");
                        e.removeAttribute("disabled")
                    }
                })
                defineNextLetter_3();
            }, 3000);
        }
    }
});


//funciones
//Estas son tres funciones que te permiten automatizar el proceso de la leccion

function wordLabels(IncorrectCorrect, correctLetter) {
    totalTimes++
    $span.forEach(clear => {
        clear.innerHTML = "";
        clear.removeAttribute("style")
    })
    let arraySplit = IncorrectCorrect.split("");
    console.log(arraySplit)
    for (let i = 0; i < $span.length; i++) {
        if ($span[i].textContent == "") {
            $span[i].innerHTML = arraySplit[i]
        }
        if ($span[i].textContent == "undefined") {
            $span[i].style.display = "none"
        }
    }
    return $tableContainer_2.setAttribute("data-correct-letter", correctLetter)
}

async function wordsLabels_2(IncorrectCorrect, correctLetter) {
    totalTimes++

    $span_2.forEach(clear => {
        clear.innerHTML = "";
        clear.removeAttribute("style")
    })
    const arraySplit = IncorrectCorrect.split('').reduce((acc, char, index) => {
        acc[index] = char;
        return acc;
    }, {});
    for (let i = 0; i < $span_2.length; i++) {
        if ($span_2[i].textContent == "") {
            $span_2[i].innerHTML = arraySplit[i]
        }
        if ($span_2[i].textContent == "undefined") {
            $span_2[i].style.display = "none"
        }
        if ($span_2[i].textContent == " ") {
            $span_2[i].style.visibility = "hidden"
        }
    }
    return $tableContainer_3.setAttribute("data-correct-letter", correctLetter)
}

function defineLetter(similarLetterOne, similarLetterTwo, winningLetter, number) {
    totalTimes++

    let $span = document.querySelectorAll(".tableContainer > button");
    let contador = 0;
    let numeroR = [];
    for (let i = 0; i < $span.length; i++) {
        numeroR.push(Math.trunc(Math.random() * 72))
    }
    console.log(numeroR)
    for (let i = 0; i < $span.length; i++) {
        contador = contador + 1;
        if (number === contador) {
            $span[i].innerHTML = `${winningLetter}`;
            continue;
        } else if (numeroR[i] % 2 == 0) {
            $span[i].innerHTML = `${similarLetterOne}`;
        } else {
            $span[i].innerHTML = `${similarLetterTwo}`;
        }

    }
}

//Función para activar Google Voice y decirle al usuario que busque la letra p
function voiceExercise(winningLetter) {
    let texto = `Encuentra la letra, ${winningLetter}.`;
    const hablar = (texto) =>
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    return hablar(texto);
}

//Cronómetros que te permiten pasar al siguiente ejercicio y por supuesto completar completamente la lección.


async function countDownP() {
    await localStorage.setItem("letter", `p`);
    await _1_3()
    setTimeout(() => {
        const CountdownNext = document.querySelector(".countDownNext");
        let countForNext = 60;
        let countdown = setInterval(() => {
            countForNext--;
            CountdownNext.textContent = countForNext;
            if (countForNext <= 0) {
                clearInterval(countdown);
                findError()
            }
        }, 1000);
    }, 3000);
}

async function findError() {

    $tableContainer.style.display = "none"
    _1_3()
    let texto = `Encuentra el error oculto.`;
    const hablar = (texto) =>
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
    setTimeout(() => {

        $paragrahMessenger.innerHTML = `Encuentra el error oculto`;
        $paragrahMessenger.classList.add("animationLetter");
    }, 3000);
    $twoEjercicio.removeAttribute("style");
    wordLabels("arresglo", "arreglo");
    const CountdownNext = document.querySelector(".countDownNext");
    CountdownNext.innerHTML = ""
    let countForNext = 50;
    setTimeout(() => {
        let countdown = setInterval(() => {
            countForNext--;
            CountdownNext.textContent = countForNext;
            if (countForNext <= 0) {
                clearInterval(countdown);
                findError_2()
            }
        }, 1000);
    }, 3000);
}

async function findError_2() {
    await localStorage.setItem("letter", `p`);
    $twoEjercicio.style.display = "none";
    _1_3()
    let texto = `Encuentra el error oculto.`;
    const hablar = (texto) =>
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
    setTimeout(() => {

        $paragrahMessenger.innerHTML = `Encuentra el error oculto`;
        $paragrahMessenger.classList.add("animationLetter");
    }, 3000);
    $tresEjercicio.removeAttribute("style");
    wordsLabels_2("Zaqatillas rojas", "Zapatillas rojas")
    const CountdownNext = document.querySelector(".countDownNext");
    CountdownNext.innerHTML = ""
    let countForNext = 60;
    setTimeout(() => {
        let countdown = setInterval(() => {
            countForNext--;
            CountdownNext.textContent = countForNext;
            if (countForNext <= 0) {
                clearInterval(countdown);
                End_Game()
            }
        }, 1000);
    }, 3000);
}


//La Funcion para terminar la leccion.
async function End_Game() {
    $progressBar.innerHTML = "100%";
    $progressBar.style.width = "100%";
    let $containerResults = document.querySelector(".containerResults");
    let $totalStar = document.querySelector(".totalStar");
    let $motivationalMessage = document.querySelector(".motivationalMessage");
    let $percentage = document.querySelector(".percentage");
    let $correctFailedFia = document.querySelector(".correctFailedFia");
    let $correctFailedDar = document.querySelector(".correctFailedDar");
    let $correctFailedQue = document.querySelector(".correctFailedQue");
    let $correctFailedFiz = document.querySelector(".correctFailedFiz");
    $totalStar.innerHTML = $starNumber.textContent;
    console.log(acceptedPoints + " " + totalTimes)
    let formula = Math.round((acceptedPoints / totalTimes) * 100)
    if (formula == 0) {
        $percentage.innerHTML = formula + "%";
        $motivationalMessage.innerHTML = "Ohh no...";
    }else{
        $percentage.innerHTML = formula + "%";
        $motivationalMessage.innerHTML = "¡Oh, Bastante bien!";
    } 
    console.info(incorrectCounter);
    $containerResults.removeAttribute("style");
    
    await fetch("/api/complete_lesson.php", {
        method: "POST",
        body: JSON.stringify({
            lesson_id: 22,
            stars: parseInt($starNumber.textContent),
            progress: parseFloat($percentage.textContent),
        }),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    }).then((res)=>{
        document
            .querySelector(".containerResults  > div")
            .classList.add("animationBounce");
        // setting assertion results
        if (countfia == 0) {
            $correctFailedFia.innerHTML = `¡Enhorabuena! Has acertado ${correctCounterFia} veces y no has cometido ningún error.`;
        } else if (countfia == 1) {
            $correctFailedFia.innerHTML = `¡Buen Trabajo! Has acertado ${correctCounterFia} veces y has fallado solo una vez.`;
        } else {
            $correctFailedFia.innerHTML = `Has acertado ${correctCounterFia} veces y has fallado ${countfia} veces.`;
        }
        if (countdar == 0) {
            $correctFailedDar.innerHTML = `¡Enhorabuena! Has acertado ${correctCounterDar} veces y no has cometido ningún error.`;
        } else if (countdar == 1) {
            $correctFailedDar.innerHTML = `¡Buen Trabajo! Has acertado ${correctCounterDar} veces y has fallado solo una vez.`;
        } else {
            $correctFailedDar.innerHTML = `Has acertado ${correctCounterDar} veces y has fallado ${countdar} veces.`;
        }
        if (countque == 0) {
            $correctFailedQue.innerHTML = `¡Enhorabuena! Has acertado ${correctCounterQue} veces y no has cometido ningún error.`;
        } else if (countque == 1) {
            $correctFailedQue.innerHTML = `¡Buen Trabajo! Has acertado ${correctCounterQue} veces y has fallado solo una vez.`;
        } else {
            $correctFailedQue.innerHTML = `Has acertado ${correctCounterQue} veces y has fallado ${countque} veces.`;
        }
        if (countfiz == 0) {
            $correctFailedFiz.innerHTML = `¡Enhorabuena! Has acertado ${correctCounterFiz} veces y no has cometido ningún error.`;
        } else if (countfiz == 1) {
            $correctFailedFiz.innerHTML = `¡Buen Trabajo! Has acertado ${correctCounterFiz} veces y has fallado solo una vez.`;
        } else {
            $correctFailedFiz.innerHTML = `Has acertado ${correctCounterFiz} veces y has fallado ${countfiz} veces.`;
        }
    })
    .catch((error)=> {
        console.error("Error:", error);
        alert("Ha ocurrido un error al enviar los datos al servidor.");
    });
}

//Estas tres funciones te permiten pasar a la siguiente palabra o cambiar la posición de la letra.
function defineNextLetter() {
    $intentosNumber[0].textContent = 3;
    switch ($tableContainer_2.getAttribute("data-next_2")) {
        case "0":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("imsegura", "insegura");
            $tableContainer_2.setAttribute(
                "data-next_2",
                `${randomNumber}`
            );
            break;
        case "1":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("bvaca", "vaca");
            $tableContainer_2.setAttribute(
                "data-next_2",
                `${randomNumber}`
            );
            break;
        case "2":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("hopla", "hola");
            $tableContainer_2.setAttribute(
                "data-next_2",
                `${randomNumber}`
            );
            break;
        case "3":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("cinco1", "cinco");
            $tableContainer_2.setAttribute(
                "data-next_2",
                `${randomNumber}`
            );
            break;
        case "4":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("fesrrocarril", "ferrocarril");
            $tableContainer_2.setAttribute(
                "data-next_2",
                `${randomNumber}`
            );
            break;
        case "5":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("relloj", "reloj");
            $tableContainer_2.setAttribute(
                "data-next_2",
                `${randomNumber}`
            );
            break;
        case "6":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("existedte", "existente");
            $tableContainer_2.setAttribute(
                "data-next_2",
                `${randomNumber}`
            );
            break;

        case "7":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("zaqatillas", "zapatillas");
            $tableContainer_2.setAttribute(
                "data-next_2",
                `${randomNumber}`
            );
            break;
        case "8":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("llaue", "llave");
            $tableContainer_2.setAttribute(
                "data-next_2",
                `${randomNumber}`
            );
            break;
        case "9":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("somdrero", "sombrero");
            $tableContainer_2.setAttribute(
                "data-next_2",
                `${randomNumber}`
            );
            break;
        case "10":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("escriturɐ", "escritura");
            $tableContainer_2.setAttribute(
                "data-next_2",
                `${randomNumber}`
            );
            break;
        case "11":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("sadores", "sabores");
            $tableContainer_2.setAttribute(
                "data-next_2",
                `${randomNumber}`
            );
            break;
        case "12":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("zaqatillas", "zapatillas");
            $tableContainer_2.setAttribute(
                "data-next_2",
                `${randomNumber}`
            );
            break;
        case "13":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("balóm", "balón");
            $tableContainer_2.setAttribute(
                "data-next_2",
                `${randomNumber}`
            );
            break;
        case "14":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("sofa", "sofá");
            $tableContainer_2.setAttribute(
                "data-next_2",
                `${randomNumber}`
            );
            break;
        case "15":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("Qué buena cancion", "Qué buena canción");
            $tableContainer_2.setAttribute(
                "data-next_2",
                `${randomNumber}`
            );
            break;
        case "16":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("tu", "tú");
            $tableContainer_2.setAttribute(
                "data-next_2",
                `${randomNumber}`
            );
            break;
        case "17":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("menu", "menú");
            $tableContainer_2.setAttribute(
                "data-next_2",
                `${randomNumber}`
            );
            break;
        case "18":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("Venesuela", "Venezuela");
            $tableContainer_2.setAttribute(
                "data-next_2",
                `${randomNumber}`
            );
            break;
        case "19":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("tortvga", "tortuga");
            $tableContainer_2.setAttribute(
                "data-next_2",
                `${randomNumber}`
            );
            break;
        default:
            break;
    }
}

function defineNextLetter_3() {
    $intentosNumber[1].textContent = 3;
    switch ($tableContainer_3.getAttribute("data-next_3")) {
        case "0":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels_2("Zaqatillas rojas", "Zapatillas rojas")
            $tableContainer_3.setAttribute(
                "data-next_3",
                `${randomNumber}`
            );
            break;
        case "1":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels_2("Mi baca es linda", "Mi vaca es linda");
            $tableContainer_3.setAttribute(
                "data-next_3",
                `${randomNumber}`
            );
            break;
        case "2":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels_2("Los comejos", "Los conejos");
            $tableContainer_3.setAttribute(
                "data-next_3",
                `${randomNumber}`
            );
            break;
        case "3":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels_2("Pepitos be colores", "Pepitos de colores");
            $tableContainer_3.setAttribute(
                "data-next_3",
                `${randomNumber}`
            );
            break;
        case "4":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels_2("Sonbrero amarillo", "Sombrero amarrillo");
            $tableContainer_3.setAttribute(
                "data-next_3",
                `${randomNumber}`
            );
            break;
        case "5":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels_2("Hai un reloj viejo", "Hay un reloj viejo");
            $tableContainer_3.setAttribute(
                "data-next_3",
                `${randomNumber}`
            );
            break;
        case "6":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels_2("Un buen vídɘo", "Un buen vídeo");
            $tableContainer_3.setAttribute(
                "data-next_3",
                `${randomNumber}`
            );
            break;

        case "7":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels_2("Corredor enkantador", "Corredor encantador");
            $tableContainer_3.setAttribute(
                "data-next_3",
                `${randomNumber}`
            );
            break;
        case "8":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels_2("La llaue cayó en mi casa", "La llave cayó en mi casa");
            $tableContainer_3.setAttribute(
                "data-next_3",
                `${randomNumber}`
            );
            break;
        case "9":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels_2("Pantalla tádtil", "Pantalla táctil");
            $tableContainer_3.setAttribute(
                "data-next_3",
                `${randomNumber}`
            );
            break;
        case "10":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels_2("Escriturɐ buena", "Escritura buena");
            $tableContainer_3.setAttribute(
                "data-next_3",
                `${randomNumber}`
            );
            break;
        case "11":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels_2("Sadores fríos", "Sabores fríos");
            $tableContainer_3.setAttribute(
                "data-next_3",
                `${randomNumber}`
            );
            break;
        case "12":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels_2("Edxiste mi casa", "Existe mi casa");
            $tableContainer_3.setAttribute(
                "data-next_3",
                `${randomNumber}`
            );
            break;
        case "13":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels_2("Mi balóm es azul", "Mi balón es azul");
            $tableContainer_3.setAttribute(
                "data-next_3",
                `${randomNumber}`
            );
            break;
        case "14":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels_2("Compró ese sofa", "Compró ese sofá");
            $tableContainer_3.setAttribute(
                "data-next_3",
                `${randomNumber}`
            );
            break;
        case "15":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels_2("cancion", "canción");
            $tableContainer_3.setAttribute(
                "data-next_3",
                `${randomNumber}`
            );
            break;
        case "16":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels_2("Los murcielagos", "Los murciélagos");
            $tableContainer_3.setAttribute(
                "data-next_3",
                `${randomNumber}`
            );
            break;
        case "17":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels_2("Este menú es karo", "Este menú es caro");
            $tableContainer_3.setAttribute(
                "data-next_3",
                `${randomNumber}`
            );
            break;
        case "18":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels_2("Mi Venesuela es próspera", "Mi Venezuela es próspera");
            $tableContainer_3.setAttribute(
                "data-next_3",
                `${randomNumber}`
            );
            break;
        case "19":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels_2("Una tortvga", "Una tortuga");
            $tableContainer_3.setAttribute(
                "data-next_3",
                `${randomNumber}`
            );
            break;



        default:

            break;
    }

}

function nextP() {
    switch ($tableContainer.getAttribute("data-next")) {
        case "0":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("q", "b", "p", randomNumber)
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "1":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("q", "b", "p", randomNumber)
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "2":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("q", "b", "p", randomNumber)
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "3":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("q", "b", "p", randomNumber)
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "4":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("q", "b", "p", randomNumber)
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "5":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("q", "b", "p", randomNumber)
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "6":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("q", "b", "p", randomNumber)
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "7":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("q", "b", "p", randomNumber)
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "8":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("q", "b", "p", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "9":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("q", "b", "p", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "10":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("q", "b", "p", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "11":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("q", "b", "p", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "12":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("q", "b", "p", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "13":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("q", "b", "p", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "14":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("q", "b", "p", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "15":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("q", "b", "p", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        default:
            alert("you are crazy");
            break;
    }
}

setTimeout(() => {
    let $main = document.querySelector("main");
    $main.removeChild($main.children[7]);
    setTimeout(async () => {
        $countDownBody.removeAttribute("style");
        voiceExercise("p");
        setTimeout(() => {
            countDownP()
        }, 2000);
        setTimeout(() => {
            let $messengerInformation = document.querySelector(
                ".messengerInformation"
            );
            $messengerInformation.removeAttribute("style");
            $messengerInformation.classList.add("AnimationMessengerInformation");


        }, 4000);
    }, 0);
}, 1500);