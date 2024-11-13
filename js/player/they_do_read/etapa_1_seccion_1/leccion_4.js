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
let $intento = document.querySelector(".intentos")
let $repeatDictation = document.querySelector(".repeatDictation");
const countdownElement = document.querySelector(".countDownBody > div > h2");
let $intentoText = document.querySelector(".intentoText")

//De la programacion
let intentos = 3;
let randomNumber = 0;
let incorrectCounter = 0;
let count = 0;
let countTotal = 0;
let correctCounter = 0;
let _1_3_text = document.querySelector(".text_1_3");
let acceptedPoints = 0;
let totalTimes = 0;


let $ceroIntentos = document.querySelector(".ceroIntentos")
let $endLeccion = document.querySelector(".endLeccion");
let $sonidoSiguiente = document.querySelector(".sonidoSiguiente")
//El inicio de todo 
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
//Función automatizada que permite rellenar las etiquetas con las palabras correspondientes.
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
    return $tableContainer.setAttribute("data-correct-letter", correctLetter)
}
//Funcion principal para cambiar la palabra
function defineNextLetter() {
    $intentoText.innerHTML = "Intentos:"
    $intentosNumber.textContent = 3;
    switch ($tableContainer.getAttribute("data-next")) {
        case "0":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("imsegura", "insegura");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "1":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("bvaca", "vaca");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "2":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("hopla", "hola");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "3":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("cinco1", "cinco");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "4":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("fesrrocarril", "ferrocarril");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "5":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("relloj", "reloj");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "6":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("existedte", "existente");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;

        case "7":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("zaqatillas", "zapatillas");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "8":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("llaue", "llave");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "9":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("somdrero", "sombrero");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "10":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("escriturɐ", "escritura");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "11":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("sadores", "sabores");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "12":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("zaqatillas", "zapatillas");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "13":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("balóm", "balón");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "14":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("sofa", "sofá");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "15":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("cancion", "canción");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "16":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("tu", "tú");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "17":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("menu", "menú");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "18":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("Venesuela", "Venezuela");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "19":
            randomNumber = Math.floor(Math.random() * 18);
            wordLabels("tortvga", "tortuga");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        default:
            break;
    }
}
//Voz para repetir de nuevo el mensaje
function voiceExercise() {
    let texto = `Encuentra el error oculto.`;
    const hablar = (texto) =>
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    return hablar(texto);
}
let $progressBar = document.querySelector(".progress-bar");

//Funcion para termina la leccion
async function End_Game() {
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
            lesson_id: 18,
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
//Temporizadores, en total a los niños les dio creo que dos minutos 
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
            $endLeccion.play()

        }
    }, 1000);
}
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

export function disabled(){
    $span.forEach(el => {
        el.disabled = true
    })
    setTimeout(() => {
        $span.forEach(el => {
            el.removeAttribute("disabled")
        })
    }, 3000);
}

function progressBar(){
    if (parseInt($progressBar.textContent) < 101) {
        $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
        $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
    }
}
//Evento para pasar a la siguiente  palabra o salir de la lección.
document.addEventListener("click", async (e) => {

    if (e.target.matches(".siguiente")) {
        let $last = document.querySelector(".last");
        let $first = document.querySelector(".first");
        $first.style.display = "none";
        $last.classList.add("animationBounceOut");
        $last.removeAttribute("style");
        $sonidoSiguiente.play()

    }

    if (e.target.matches(".tableContainer > button")) {

        if (e.target.textContent == "s" && $tableContainer.getAttribute("data-correct-letter") == "arreglo") {
              progressBar();                      
             acceptedPoints++   ;                      
         
            disabled()
            $wrongSound.pause();
            $correctSound.play();
            correctCounter++;
            e.target.style.display = "none"
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
            incorrectCounter++;
            $intentosNumber.textContent = parseInt($intentosNumber.textContent) - 1;
            $wrongSound.play();
            e.target.classList.add("hoverRed");
            $span.forEach(el => {
                el.disabled = true
            })
            setTimeout(() => {
                e.target.classList.remove("hoverRed");
                $span.forEach(e => {
                    e.removeAttribute("disabled")
                })
            }, 2000);
            if ($intentosNumber.textContent == 1) {
                $intentoText.innerHTML = "Intento:"
            }
            if ($intentosNumber.textContent == 0) {
                $span.forEach(e => {
                    e.disabled = true;
                    e.classList.add("hoverRed");
                })
                $intento.classList.add("swing");
                $ceroIntentos.play()
                setTimeout(() => {
                    $span.forEach(e => {
                        e.classList.remove("hoverRed");
                        e.removeAttribute("disabled");
                        defineNextLetter()
                    })
                    $intento.classList.remove("swing")
                }, 2000);
            }

        }

        if (e.target.textContent == "m" && $tableContainer.getAttribute("data-correct-letter") == "insegura") {
              progressBar();                      
             acceptedPoints++   
         
            $wrongSound.pause();
            $correctSound.play();
            correctCounter++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.innerHTML = "n"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde")
                    e.disabled = true
                }
            })
            disabled()
         
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
        if (e.target.textContent == "b" && $tableContainer.getAttribute("data-correct-letter") == "vaca") {
              progressBar();                      
             acceptedPoints++   
         
            $wrongSound.pause();
            $correctSound.play();
            $intentosNumber.textContent = 3;
            correctCounter++;

            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.style.display = "none"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde")
                    e.disabled = true
                }
            })
             disabled()
         
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
        if (e.target.textContent == "p" && $tableContainer.getAttribute("data-correct-letter") == "hola") {
              progressBar();                      
             acceptedPoints++   
         
            $wrongSound.pause();
            $correctSound.play();
            correctCounter++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber.textContent = 3;
            e.target.style.display = "none"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true
                }
            })
             disabled()
         
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
        if (e.target.textContent == "1" && $tableContainer.getAttribute("data-correct-letter") == "cinco") {
              progressBar();                      
             acceptedPoints++   
         
            $wrongSound.pause();
            $correctSound.play();
            correctCounter++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber.textContent = 3;
            e.target.style.display = "none"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            })
             disabled()
         
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
        if (e.target.textContent == "s" && $tableContainer.getAttribute("data-correct-letter") == "ferrocarril") {
              progressBar();                      
             acceptedPoints++   
         
            $wrongSound.pause();
            $intentosNumber.textContent = 3;
            e.target.style.display = "none"
            $correctSound.play();
            correctCounter++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.style.display = "none"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true
                }
            })
             disabled()
         

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
        if (e.target.textContent == "l" && $tableContainer.getAttribute("data-correct-letter") == "reloj") {
              progressBar();                      
             acceptedPoints++   
         
            $wrongSound.pause();
            $correctSound.play();
            correctCounter++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber.textContent = 3;
            e.target.style.display = "none"
            $span.forEach(e => {
                if (e.textContent.length > 0) {
                    e.classList.add("hoverVerde");
                    e.disabled = true;
                }
            })
             disabled()
         
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

    if (e.target.textContent == "q" && $tableContainer.getAttribute("data-correct-letter") == "zapatillas") {
        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
        }
        $wrongSound.pause();
        $correctSound.play();
        correctCounter++;
        $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
        $intentosNumber.textContent = 3;
        e.target.innerHTML = "p"
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
    if (e.target.textContent == "u" && $tableContainer.getAttribute("data-correct-letter") == "llave") {
        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
        }
        $wrongSound.pause();
        $correctSound.play();
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
    if (e.target.textContent == "d" && $tableContainer.getAttribute("data-correct-letter") == "sombrero") {
        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
        }
        $wrongSound.pause();
        correctCounter++;
        $correctSound.play();
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
    if (e.target.textContent == "ɐ" && $tableContainer.getAttribute("data-correct-letter") == "escritura") {
        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
        }
        $wrongSound.pause();
        $correctSound.play();
        correctCounter++;
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
    if (e.target.textContent == "d" && $tableContainer.getAttribute("data-correct-letter") == "sabores") {
        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
        }
        $wrongSound.pause();
        $correctSound.play();
        correctCounter++;
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
    if (e.target.textContent == "m" && $tableContainer.getAttribute("data-correct-letter") == "balón") {
        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
        }
        $wrongSound.pause();
        $correctSound.play();
        correctCounter++;
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
    if (e.target.textContent == "d" && $tableContainer.getAttribute("data-correct-letter") == "existente") {
        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
        }
        $wrongSound.pause();
        $correctSound.play();
        correctCounter++;
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
    if (e.target.textContent == "v" && $tableContainer.getAttribute("data-correct-letter") == "tortuga") {
        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
        }
        $wrongSound.pause();
        $correctSound.play();
        correctCounter++;

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
    if (e.target.textContent == "a" && $tableContainer.getAttribute("data-correct-letter") == "sofá") {
        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
        }
        $wrongSound.pause();
        $correctSound.play();
        correctCounter++;

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
    if (e.target.textContent == "o" && $tableContainer.getAttribute("data-correct-letter") == "canción") {
        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
        }
        $wrongSound.pause();
        $correctSound.play();
        correctCounter++;

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
    if (e.target.textContent == "u" && $tableContainer.getAttribute("data-correct-letter") == "tú") {
        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
        }
        $wrongSound.pause();
        $correctSound.play();
        correctCounter++;
        $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
        $intentosNumber.textContent = 3;
        e.target.innerHTML = "ú"
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
    if (e.target.textContent == "u" && $tableContainer.getAttribute("data-correct-letter") == "menú") {
        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
        }
        $wrongSound.pause();
        $correctSound.play();
        correctCounter++;

        $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
        $intentosNumber.textContent = 3;
        e.target.innerHTML = "ú"
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
    if (e.target.textContent == "s" && $tableContainer.getAttribute("data-correct-letter") == "Venezuela") {
        if (parseInt($progressBar.textContent) < 101) {
            $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
            $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
        }
        $wrongSound.pause();
        $correctSound.play();
        correctCounter++;

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
})
document.addEventListener("DOMContentLoaded", e => wordLabels("arresglo", "arreglo"));


