//Variables
//Del dom
let $countDownBody = document.querySelector(".countDownBody");
let $span = document.querySelectorAll(".tableContainer > button");
let $tableContainer = document.querySelector("[data-correct-letter]");
let $letterSound = document.querySelector(".letterSound");
let $wrongSound = document.querySelector(".wrongSound");
let $correctSound = document.querySelector(".correctSound");
let $intentosNumber = document.querySelector(".intentos > .number");
let $starNumber = document.querySelector(".start");
let $progressBar = document.querySelector(".progress-bar");
let $repeatDictation = document.querySelector(".repeatDictation");
//De la programacion 
let intentos = 3;
let randomNumber = 0;
let incorrectCounter = 0;
let count = 0;
let countTotal = 0;
let correctCounter = 0;
let _1_3_text = document.querySelector(".text_1_3");
const countdownElement = document.querySelector(".countDownBody > div > h2");

let acceptedPoints = 0;
let totalTimes = 0;
//Se estara ejecutando primero
setTimeout(() => {
    let $main = document.querySelector("main");
    $main.removeChild($main.children[10]);
    setTimeout(async () => {
        $countDownBody.removeAttribute("style");
        _1_3();
        voiceExercise();
        setTimeout(() => {
            temporizador()
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
//Funciones
//Función automatizada que permite rellenar las etiquetas con las palabras correspondientes.
async function wordsLabels(IncorrectCorrect, correctLetter) {
    totalTimes++;
    $span.forEach(clear => {
        clear.innerHTML = "";
        clear.removeAttribute("style")
    })
    const arraySplit = IncorrectCorrect.split('').reduce((acc, char, index) => {
        acc[index] = char;
        return acc;
    }, {});
    for (let i = 0; i < $span.length; i++) {
        if ($span[i].textContent == "") {
            $span[i].innerHTML = arraySplit[i]
        }
        if ($span[i].textContent == "undefined") {
            $span[i].style.display = "none"
        }
        if ($span[i].textContent == " ") {
            $span[i].style.visibility = "hidden"
        }
    }
    return $tableContainer.setAttribute("data-correct-letter", correctLetter)
}

//Funciones
//Esta función se ejecutará cuando finalice la lección.  
async function End_Game() {
    let $progressBar = document.querySelector(".progress-bar");
    $progressBar.innerHTML = "100%";
    $progressBar.style.width = "100%";
    let $containerResults = document.querySelector(".containerResults");
    let $totalStar = document.querySelector(".totalStar");
    let $motivationalMessage = document.querySelector(".motivationalMessage");
    let $percentage = document.querySelector(".percentage");
    let $correctFailed = document.querySelector(".correctFailed");
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
            lesson_id: 20,
            stars: parseInt($starNumber.textContent),
            progress: parseFloat($percentage.textContent),
        }),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    }).then((res) => {
        document
            .querySelector(".containerResults  > div")
            .classList.add("animationBounce");
        // setting assertion results
        if (incorrectCounter == 0) {
            $correctFailed.innerHTML = `Has acertado ${correctCounter} veces y no has cometido ningún error.`;
        } else if (incorrectCounter == 1) {
            $correctFailed.innerHTML = `Has acertado ${correctCounter} veces y has fallado solo una vez.`;
        } else {
            $correctFailed.innerHTML = `Has acertado ${correctCounter} veces y has fallado ${incorrectCounter} veces.`;
        }
    })
    .catch((error)=> {
        console.error("Error:", error);
        alert("Ha ocurrido un error al enviar los datos al servidor.");
    });
}
//Funcion principal para cambiar las palabras.
function defineNextLetter() {
    $intentosNumber.textContent = 3;
    switch ($tableContainer.getAttribute("data-next")) {
        case "0":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels("Zaqatillas rojas", "Zapatillas rojas")
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "1":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels("Mi baca es linda", "Mi vaca es linda");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "2":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels("Los comejos", "Los conejos");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "3":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels("Pepitos be colores", "Pepitos de colores");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "4":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels("Sonbrero amarillo", "Sombrero amarrillo");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "5":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels("Hai un reloj viejo", "Hay un reloj viejo");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "6":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels("Un buen vídɘo", "Un buen vídeo");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;

        case "7":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels("Corredor enkantador", "Corredor encantador");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "8":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels("La llaue cayó en mi casa", "La llave cayó en mi casa");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "9":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels("Pantalla tádtil", "Pantalla táctil");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "10":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels("Escriturɐ buena", "Escritura buena");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "11":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels("Sadores fríos", "Sabores fríos");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "12":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels("Edxiste mi casa", "Existe mi casa");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "13":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels("Mi balóm es azul", "Mi balón es azul");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "14":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels("Compró ese sofa", "Compró ese sofá");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "15":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels("cancion", "canción");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "16":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels("Los murcielagos", "Los murciélagos");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "17":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels("Este menú es karo", "Este menú es caro");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "18":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels("Mi Venesuela es próspera", "Mi Venezuela es próspera");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "19":
            randomNumber = Math.floor(Math.random() * 18);
            wordsLabels("Una tortvga", "Una tortuga");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;



        default:

            break;
    }

}
//Temporizadores, en total a los niños les dio dos minutos 
async function temporizador() {
    const CountdownNext = document.querySelector(".countDownNext");
    let $segMin = document.querySelector(".seg-min")
    let countForNext = 60;
    let countdown = setInterval(() => {
        countForNext--;
        if (countForNext < 10) {
            CountdownNext.textContent = `1:0${countForNext}`;
        }
        if (countForNext > 10) {
            CountdownNext.textContent = `1:${countForNext}`;
        }
        if (countForNext <= 0) {
            clearInterval(countdown);
            temporizadorSegundaParte()
        }
    }, 1000);
}
function temporizadorSegundaParte() {
    const CountdownNext = document.querySelector(".countDownNext");
    let $segMin = document.querySelector(".seg-min")
    let countForNext = 60;
    let countdown = setInterval(() => {
        countForNext--;
        CountdownNext.textContent = `${countForNext}`;
        if (countForNext <= 0) {
            clearInterval(countdown);
            End_Game()
        }
    }, 1000);
}
//Funciones de ventana modal para contar de 3 a 1
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
function _1_3() {
    let count = 3;
    _1_3_text.innerHTML = "¡Muy bien, comencemos!"

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
//Voz para repetir de nuevo el mensaje.
function voiceExercise() {
    let texto = `Encuentra el error oculto.`;
    const hablar = (texto) =>
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    return hablar(texto);
}
//Eventos
document.addEventListener("DOMContentLoaded", e => wordsLabels("Zaqatillas rojas", "Zapatillas rojas"));
//Este es un evento del mouse y se activa el sonido cuando el mouse está sobre el botón.
document.addEventListener("mousemove", (e) => {
    if (e.target.matches(".tableContainer > button")) {
        try {
            $letterSound.play();
        } catch (error) {
            alert("error");
        }
    }
});
//Evento para pasar a la siguiente  palabras o salir de la lección.
document.addEventListener("click", async (e) => {

    if (e.target.matches(".siguiente")) {
        let $last = document.querySelector(".last");
        let $first = document.querySelector(".first");
        $first.style.display = "none";
        $last.classList.add("animationBounceOut");
        $last.removeAttribute("style");
    }

    if (e.target.matches(".tableContainer > button")) {
        if (e.target.textContent == "q" && $tableContainer.getAttribute("data-correct-letter") == "Zapatillas rojas") {
            $wrongSound.pause();
            acceptedPoints++;
            $correctSound.play();
            correctCounter++;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            e.target.innerHTML = "p"
            $intentosNumber.textContent = 3;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde")
                    e.disabled = true
                }
            })
          

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
            $intentosNumber.textContent = parseInt($intentosNumber.textContent) - 1;
            incorrectCounter++;
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
            if ($intentosNumber.textContent == 0) {
                setTimeout(() => {
                    setTimeout(() => {
                        defineNextLetter()
                    }, 2000);
                }, 1000);


            }
        }
        if (e.target.textContent == "b" && $tableContainer.getAttribute("data-correct-letter") == "Mi vaca es linda") {
           $wrongSound.pause();
            acceptedPoints++;
            $correctSound.play();
            correctCounter++;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.innerHTML = "v"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde")
                    e.disabled = true
                }
            })
          
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
        if (e.target.textContent == "b" && $tableContainer.getAttribute("data-correct-letter") == "Pepitos de colores") {
           $wrongSound.pause();
            acceptedPoints++;
            $correctSound.play();
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            $intentosNumber.textContent = 3;
            correctCounter++;

            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.innerHTML = "d"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde")
                    e.disabled = true
                }
            })
          
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
        if (e.target.textContent == "n" && $tableContainer.getAttribute("data-correct-letter") == "Sombrero amarrillo") {
           $wrongSound.pause();
            acceptedPoints++;
            $correctSound.play();
            correctCounter++;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber.textContent = 3;
            e.target.innerHTML = "m"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true
                }
            })
          
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
        if (e.target.textContent == "i" && $tableContainer.getAttribute("data-correct-letter") == "Hay un reloj viejo") {
           $wrongSound.pause();
            acceptedPoints++;
            $correctSound.play();
            correctCounter++;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber.textContent = 3;
            e.target.innerHTML = "y"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            })
          
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
        if (e.target.textContent == "ɘ" && $tableContainer.getAttribute("data-correct-letter") == "Un buen vídeo") {
           $wrongSound.pause();
            acceptedPoints++;
            $intentosNumber.textContent = 3;
            e.target.innerHTML = "e"
            $correctSound.play();
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            correctCounter++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true
                }
            })
          

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
        if (e.target.textContent == "u" && $tableContainer.getAttribute("data-correct-letter") == "La llave cayó en mi casa") {
           $wrongSound.pause();
            acceptedPoints++;
            $correctSound.play();
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
            }
            correctCounter++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber.textContent = 3;
            e.target.innerHTML = "v"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            })
          
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

    if (e.target.textContent == "k" && $tableContainer.getAttribute("data-correct-letter") == "Corredor encantador") {
       $wrongSound.pause();
            acceptedPoints++;
        $correctSound.play();
        correctCounter++;
        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
        }
        $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
        $intentosNumber.textContent = 3;
        e.target.innerHTML = "c"
        $span.forEach(e => {
            if (e.textContent.length > 0) {
                e.classList.add("hoverVerde");
                e.disabled = true;
            }
        })
        setTimeout(() => {
            _1_3()
        }, 1000);
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
    if (e.target.textContent == "d" && $tableContainer.getAttribute("data-correct-letter") == "Pantalla táctil") {
       $wrongSound.pause();
            acceptedPoints++;
        $correctSound.play();
        correctCounter++;
        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
        }
        $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
        $intentosNumber.textContent = 3;
        e.target.innerHTML = "c"
        $span.forEach(e => {
            if (e.textContent.length > 0) {
                e.classList.add("hoverVerde");
                e.disabled = true;
            }
        })
        setTimeout(() => {
            _1_3()
        }, 1000);
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
    if (e.target.textContent == "ɐ" && $tableContainer.getAttribute("data-correct-letter") == "Escritura buena") {
       $wrongSound.pause();
            acceptedPoints++;
        correctCounter++;
        $correctSound.play();
        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
        }
        $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
        $intentosNumber.textContent = 3;
        e.target.innerHTML = "a"
        $span.forEach(e => {
            if (e.textContent.length > 0) {
                e.classList.add("hoverVerde");
                e.disabled = true;
            }
        })
        setTimeout(() => {
            _1_3()
        }, 1000);
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
    if (e.target.textContent == "d" && $tableContainer.getAttribute("data-correct-letter") == "Sabores fríos") {
       $wrongSound.pause();
            acceptedPoints++;
        $correctSound.play();
        correctCounter++;
        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
        }
        $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
        $intentosNumber.textContent = 3;
        e.target.innerHTML = "b"
        $span.forEach(e => {
            if (e.textContent.length > 0) {
                e.classList.add("hoverVerde");
                e.disabled = true;
            }
        })
        setTimeout(() => {
            _1_3()
        }, 1000);
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
    if (e.target.textContent == "d" && $tableContainer.getAttribute("data-correct-letter") == "Existe mi casa") {
       $wrongSound.pause();
            acceptedPoints++;
        $correctSound.play();
        correctCounter++;
        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
        }
        $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
        $intentosNumber.textContent = 3;
        e.target.style.display = "none"
        $span.forEach(e => {
            if (e.textContent.length > 0) {
                e.classList.add("hoverVerde");
                e.disabled = true;
            }
        })
        setTimeout(() => {
            _1_3()
        }, 1000);
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
    if (e.target.textContent == "m" && $tableContainer.getAttribute("data-correct-letter") == "Mi balón es azul") {
       $wrongSound.pause();
            acceptedPoints++;
        $correctSound.play();
        correctCounter++;
        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
        }
        $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
        $intentosNumber.textContent = 3;
        e.target.innerHTML = "n"
        $span.forEach(e => {
            if (e.textContent.length > 0) {
                e.classList.add("hoverVerde");
                e.disabled = true;
            }
        })
        setTimeout(() => {
            _1_3()
        }, 1000);
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
    if (e.target.textContent == "a" && $tableContainer.getAttribute("data-correct-letter") == "Compró ese sofá") {
       $wrongSound.pause();
            acceptedPoints++;
        $correctSound.play();
        correctCounter++;
        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
        }
        $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
        $intentosNumber.textContent = 3;
        e.target.innerHTML = "á"
        $span.forEach(e => {
            if (e.textContent.length > 0) {
                e.classList.add("hoverVerde");
                e.disabled = true;
            }
        })
        setTimeout(() => {
            _1_3()
        }, 1000);
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
    if (e.target.textContent == "o" && $tableContainer.getAttribute("data-correct-letter") == "Qué buena canción") {
       $wrongSound.pause();
            acceptedPoints++;
        $correctSound.play();
        correctCounter++;
        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
        }
        $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
        $intentosNumber.textContent = 3;
        e.target.innerHTML = "ó"
        $span.forEach(e => {
            if (e.textContent.length > 0) {
                e.classList.add("hoverVerde");
                e.disabled = true;
            }
        })
        setTimeout(() => {
            _1_3()
        }, 1000);
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
    if (e.target.textContent == "e" && $tableContainer.getAttribute("data-correct-letter") == "Los murciélagos") {
       $wrongSound.pause();
            acceptedPoints++;
        $correctSound.play();
        correctCounter++;
        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
        }
        $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
        $intentosNumber.textContent = 3;
        e.target.innerHTML = "é"
        $span.forEach(e => {
            if (e.textContent.length > 0) {
                e.classList.add("hoverVerde");
                e.disabled = true;
            }
        })
        setTimeout(() => {
            _1_3()
        }, 1000);
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
    if (e.target.textContent == "k" && $tableContainer.getAttribute("data-correct-letter") == "Este menú es caro") {
       $wrongSound.pause();
            acceptedPoints++;
        $correctSound.play();
        correctCounter++;

        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
        }
        $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
        $intentosNumber.textContent = 3;
        e.target.innerHTML = "c"
        $span.forEach(e => {
            if (e.textContent.length > 0) {
                e.classList.add("hoverVerde");
                e.disabled = true;
            }
        })
        setTimeout(() => {
            _1_3()
        }, 1000);
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
    if (e.target.textContent == "s" && $tableContainer.getAttribute("data-correct-letter") == "Mi Venezuela es próspera") {
       $wrongSound.pause();
            acceptedPoints++;
        $correctSound.play();
        correctCounter++;
        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
        }
        $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
        $intentosNumber.textContent = 3;
        e.target.innerHTML = "z"
        $span.forEach(e => {
            if (e.textContent.length > 0) {
                e.classList.add("hoverVerde");
                e.disabled = true;
            }
        })
        setTimeout(() => {
            _1_3()
        }, 1000);
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
    if (e.target.textContent == "v" && $tableContainer.getAttribute("data-correct-letter") == "Una tortuga") {
       $wrongSound.pause();
            acceptedPoints++;
        $correctSound.play();
        correctCounter++;
        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
        }
        $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
        $intentosNumber.textContent = 3;
        e.target.innerHTML = "u"
        $span.forEach(e => {
            if (e.textContent.length > 0) {
                e.classList.add("hoverVerde");
                e.disabled = true;
            }
        })
        setTimeout(() => {
            _1_3()
        }, 1000);
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
    if (e.target.textContent == "m" && $tableContainer.getAttribute("data-correct-letter") == "Los conejos") {
       $wrongSound.pause();
            acceptedPoints++;
        $correctSound.play();
        correctCounter++;
        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
        }

        $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
        $intentosNumber.textContent = 3;
        e.target.innerHTML = "n"
        $span.forEach(e => {
            if (e.textContent.length > 0) {
                e.classList.add("hoverVerde");
                e.disabled = true;
            }
        })
        setTimeout(() => {
            _1_3()
        }, 1000);
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
})

