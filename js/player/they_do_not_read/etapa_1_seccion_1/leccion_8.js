
//Variables
let $dataWrong = document.querySelector("[data-wrong]");
let $wrongSound = document.querySelector(".wrongSound");
let $correctSound = document.querySelector(".correctSound");
let $tableLetter = document.querySelector(".tableContainer");
$tableLetter.setAttribute("data-next", "4");
let $starNumber = document.querySelector(".start");
let $progressBar = document.querySelector(".progress-bar");
let incorrectCounter = 0;
let $letterSound = document.querySelector(".letterSound");
let $paragrahMessenger = document.querySelector(".messengerInformation > p");
//Contadores para determinar cuantas veces el niño ha acertado incorrectamente.
let countfia = 0;
let countdar = 0;
let countque = 0;
let countfiz = 0;
let acceptedPoints = 0;
let totalTimes = 0

let correctCounter = 0;
let $theLetterContainer = document.querySelector(".theLetter")

let $tableContainer = document.querySelectorAll(".tableContainer");
let $containerIntentos = document.querySelector(".containerIntentos")

let $intentosNumber = document.querySelectorAll(".intentos > .number");
let $intento = document.querySelector(".intentos")
let $intentoText = document.querySelector(".intentoText")


//Contadores.
let ErrorCounter = 0;

let $ceroIntentos = document.querySelector(".ceroIntentos")
//Contadores para determinar cuantas veces el niño ha acertado correctamente.
let correctCounterP = 0;
let incorrectCounterP = 0;
let correctCounterTwo = 0;
let incorrectCounterTwo = 0;

let randomNumber = 0;
let $spanLetter = document.querySelectorAll(".tableContainer > button");
let $countDownBody = document.querySelector(".countDownBody");
let $repeatDictation = document.querySelector(".repeatDictation");

//Variables de audios
let $endLeccion = document.querySelector(".endLeccion");
let $sonidoSiguiente = document.querySelector(".sonidoSiguiente")

let $theLetter = document.querySelector(".theLetter > span")

let $correctFailedP = document.querySelector(".correctFailedP");
let $correctFailedEjercicioVisual = document.querySelector(".correctFailedEjercicioVisual")


let $messengerInformation = document.querySelector(
    ".messengerInformation"
);

//Función que se ejecuta al inicio de la lección de forma automática.
setTimeout(() => {
    let $main = document.querySelector("main");
    $main.removeChild($main.children[10]);
    setTimeout(async () => {
        $countDownBody.removeAttribute("style");
        _1_3();
        setTimeout(() => {
            $messengerInformation.removeAttribute("style");
            $messengerInformation.classList.add("AnimationMessengerInformation");
            $repeatDictation.removeAttribute("style");
            $repeatDictation.classList.add("animationLetter");
            $paragrahMessenger.innerHTML = `Encuentra la letra.`;
        }, 2000);
    }, 0);
}, 1500);


async function CountDownW() {
    $tableLetter.setAttribute("data-letter", "P");
    $progressBar.innerHTML = "0%";
    $progressBar.style.width = "0%";
    $progressBar.style.background = "#ff7d3f";
    voiceExercise("P");
    defineLetter("2", "R", "P", Math.floor(Math.random() * 12))
    const CountdownNext = document.querySelector(".countDownNext");
    CountdownNext.style.display = "none";
    setTimeout(() => {
        CountdownNext.removeAttribute("style")
    }, 5000);
    let countForNext = 60;
    let countdown = setInterval(() => {
        countForNext--;
        CountdownNext.textContent = countForNext;
        if (countForNext <= 0) {
            clearInterval(countdown);
            $tableContainer[1].removeAttribute("style");
            $containerIntentos.removeAttribute("style");
            $tableContainer[0].style.display = "none";
            _1_3();
            $messengerInformation.style.display = "none"
            CountdownNext.style.display = "none";
            $paragrahMessenger.innerHTML = `Escribe la clave secreta que viste.`;
            voiceExercise()
            setTimeout(() => {
                ejercicioVisual()
                $messengerInformation.removeAttribute("style")
                $repeatDictation.removeAttribute("style");
                $repeatDictation.classList.add("animationLetter");
            }, 3000);
        }
    }, 1000);
}
CountDownW()
let $colButton_1 = document.querySelectorAll(".colButton_1 > button")

//Función principal que te permite automatizar el proceso de la lección, de hecho, como su nombre lo dice.
function hiddenKeyLetter(one, two, three) {
    let $botton = document.querySelectorAll(".colButton_1 > button");
    let numeroR = [];
    $colButton_1.forEach(e => {
        e.innerHTML = "?"
    })
    let arrayLetter = Math.floor(Math.random() * 2);
    let letterGanadora = [one, two, three]
    $tableContainer[1].setAttribute("data-letter", letterGanadora[arrayLetter]);
    console.log("animation")
    $theLetter.classList.remove("animationLetter")
    $theLetter.classList.add("animationLetter")
    $theLetter.innerHTML = letterGanadora[arrayLetter];
    setTimeout(() => {
        for (let i = 0; i < $botton.length; i++) {
            numeroR.push(Math.trunc(Math.random() * 16))
        }
        for (let i = 0; i < $botton.length; i++) {
            if (numeroR[i] % 2 == 0) {
                $botton[i].innerHTML = `${one}`;
            } else {
                $botton[i].innerHTML = `${two}`;
            }
        }
        for (let i = 0; i < $botton.length; i++) {
            if ($botton[i].getAttribute("data-primo") == "true") {
                $botton[i].innerHTML = three
            }
        }
        let b = false;
        for (let i = 0; i < $botton.length; i++) {
            if ($botton[i].textContent == $tableContainer[1].getAttribute("data-letter")) {
                b = true
                break;
            }
        }
        if (b) {
            $botton[0].innerHTML = $tableContainer[1].getAttribute("data-letter");
        }
        $theLetter.innerHTML = "?"
    }, 3000);
}

async function ejercicioVisual() {
    $tableLetter.setAttribute("data-letter", "w")
    $progressBar.innerHTML = "50%";
    $progressBar.style.width = "50%";
    $progressBar.style.background = "#ff7d3f";
    let CountdownNext = document.querySelector(".countDownNext");
    hiddenKeyLetter("b", "s", "j");
    CountdownNext.removeAttribute("style")
    let countForNext = 60;
    let countdown = setInterval(() => {
        countForNext--;
        CountdownNext.textContent = countForNext;
        if (countForNext <= 0) {
            clearInterval(countdown);
            End_Game()
            $endLeccion.play()
        }
    }, 1000);
}

const CountdownNext = document.querySelector(".countDownNext");

//La Funcion para terminar la leccion.
async function End_Game() {
    $progressBar.innerHTML = "100%";
    $progressBar.style.width = "100%";
    let $containerResults = document.querySelector(".containerResults");
    let $totalStar = document.querySelector(".totalStar");
    let $motivationalMessage = document.querySelector(".motivationalMessage");
    let $percentage = document.querySelector(".percentage");
    $totalStar.innerHTML = $starNumber.textContent;
    let formula = Math.round((acceptedPoints / totalTimes) * 100)
    console.log(formula)
    if (formula == 0) {
        $percentage.innerHTML = formula + "%";
        $motivationalMessage.innerHTML = "Ohh no...";
    } else {
        $percentage.innerHTML = formula + "%";
        $motivationalMessage.innerHTML = "¡Oh, Bastante bien!";
    }
    console.info(incorrectCounter);
    $containerResults.removeAttribute("style");
    
    await fetch("/api/complete_lesson.php", {
        method: "POST",
        body: JSON.stringify({
            lesson_id: 8,
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
        if (correctCounterP == 0) {
            $correctFailedP.innerHTML = `¡Enhorabuena! Has acertado ${correctCounterP} veces y no has cometido ningún error.`;
        } else if (correctCounterP == 1) {
            $correctFailedP.innerHTML = `¡Buen Trabajo! Has acertado ${correctCounterP} veces y has fallado solo una vez.`;
        } else {
            $correctFailedP.innerHTML = `Has acertado ${correctCounterP} veces y has fallado ${incorrectCounterP} veces.`;
        }
        if (correctCounterTwo == 0) {
            $correctFailedEjercicioVisual.innerHTML = `¡Enhorabuena! Has acertado ${correctCounterTwo} veces y no has cometido ningún error.`;
        } else if (correctCounterTwo == 1) {
            $correctFailedEjercicioVisual.innerHTML = `¡Buen Trabajo! Has acertado ${correctCounterTwo} veces y has fallado solo una vez.`;
        } else {
            $correctFailedEjercicioVisual.innerHTML = `Has acertado ${correctCounterTwo} veces y has fallado ${incorrectCounterTwo} veces.`;
        }
    })
    .catch((error)=> {
        console.error("Error:", error);
        alert("Ha ocurrido un error al enviar los datos al servidor.");
    });
}


//Estas dos funciones sirven para automatizar la tarea completa de rellenar/establecer la letra de la etiqueta. Como su nombre lo define.
function defineLetter(similarLetterOne, similarLetterTwo, winningLetter, number) {

    $tableLetter.setAttribute("data-letter", winningLetter)
    let $span = document.querySelectorAll(".tableContainer > button");
    let contador = 0;
    let numeroR = [];
    for (let i = 0; i < $span.length; i++) {
        numeroR.push(Math.trunc(Math.random() * 12))
    }
    console.log(numeroR)
    for (let i = 0; i < $span.length; i++) {
        contador = contador + 1;
        if (number === contador) {
            $span[i].innerHTML = `${winningLetter}`;
            continue;
        }
        else if (numeroR[i] % 2 == 0) {
            $span[i].innerHTML = `${similarLetterOne}`;
        } else {
            $span[i].innerHTML = `${similarLetterTwo}`;
        }
    }
    let use = false
    for (let i = 0; i < $span.length; i++) {
        if ($span[i].textContent == $tableLetter.getAttribute("data-letter")) {
            use = true
            break;
        } else {
            use = false
        }
    }
    if (use === false) {
        $span[0].innerHTML = $tableLetter.getAttribute("data-letter");
    }
    return true;
}
let $repeatDictationSpan = document.querySelector(".repeatDictation + p");

function voiceExercise(winningLetter = "") {
     let $repeatDictationSpan = document.querySelector(".repeatDictation + p");
    let texto = `${$repeatDictationSpan.textContent} ${winningLetter}`
    const hablar = (texto) =>
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    return hablar(texto);
}

async function nextW() {
    randomNumber = Math.floor(Math.random() * 12);
    await defineLetter("2", "R", "P", randomNumber)
}
function defineNextLetter() {
    switch ($tableContainer[1].getAttribute("data-next")) {
        case "0":
            hiddenKeyLetter("n", "ñ", "u");
            $tableContainer[1].setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "1":
            hiddenKeyLetter("n", "w", "m");
            $tableContainer[1].setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "2":
            hiddenKeyLetter("e", "o", "p");
            $tableContainer[1].setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "3":
            hiddenKeyLetter("e", "q", "k");
            $tableContainer[1].setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "4":
            hiddenKeyLetter("ƃ", "b", "g");
            $tableContainer[1].setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "5":
            hiddenKeyLetter("mi", "wa", "pa");
            $tableContainer[1].setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "6":
            hiddenKeyLetter("g.", "e", "ga");
            $tableContainer[1].setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "7":
            hiddenKeyLetter("r", "s", "g");
            $tableContainer[1].setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "8":
            hiddenKeyLetter("u", "h", "n");
            $tableContainer[1].setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "9":
            hiddenKeyLetter(">", ">>", "<");
            $tableContainer[1].setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "10":
            hiddenKeyLetter("var", "let", "cost");
            $tableContainer[1].setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "11":
            hiddenKeyLetter("ja", "ra", "ɾa");
            $tableContainer[1].setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "12":
            hiddenKeyLetter("ha", "haz", "has");
            $tableContainer[1].setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "13":
            hiddenKeyLetter("ki", "ik", "k");
            $tableContainer[1].setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "14":
            hiddenKeyLetter("x", "exp", "xe");
            $tableContainer[1].setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "15":
            hiddenKeyLetter("si", "zz", "is");
            $tableContainer[1].setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "16":
            hiddenKeyLetter("se", "na", "ma");
            $tableContainer[1].setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        default:
            break;
    }
}
//Función de ventana modal para contar de 3 a 1
function _1_3() {
    let count = 3;
    const countdownElement = document.querySelector(".countDownBody > div > h2");
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
//Eventos
//Evento de localStorage
document.addEventListener("DOMContentLoaded", async (e) => {
    defineLetter("ʍ", "m", "w", Math.floor(Math.random() * 12))
});
//Este es un evento del mouse y se activa el sonido cuando el mouse está sobre el botón.

//Evento para pasar a la siguiente letra . De igual manera hay que verificar si esta correcta o no.
document.addEventListener("click", (e) => {
    if (e.target.matches(".btnSalir")) {
        e.preventDefault();
    }
    if (e.target.matches(".siguiente")) {
        let $last = document.querySelector(".last");
        let $first = document.querySelector(".first");
        $first.style.display = "none";
        $last.classList.add("animationBounceOut");
        $last.removeAttribute("style");
        $sonidoSiguiente.play()

    }

    if (e.target.matches(".cuidado")) {
        let texto = ` ¡Cuidado!. ¿Vas a abandonar tu lección y perderás todo el progreso?. ¿Estás seguro de que quieres abandonar? `;
        const hablar = (texto) =>
            speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
        return hablar(texto);
    }
    if (e.target.matches(".tableContainer > button")) {
        totalTimes++;
        if (e.target.textContent == $tableLetter.getAttribute("data-letter")) {
            acceptedPoints++
            correctCounterP++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.classList.add("hoverVerde");
            $spanLetter.forEach(letter => {
                letter.disabled = true;
                setTimeout(() => {
                    letter.removeAttribute("disabled")
                }, 2000);
            })
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }
            $wrongSound.pause();
            $correctSound.play();
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                nextW();
                $correctSound.pause();
            }, 2000);
        } else {
            incorrectCounterP++;
            $spanLetter.forEach((letter) => {
                letter.disabled = true;
                if (letter.textContent === $tableLetter.getAttribute("data-letter")) {
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
            }, 2000);
            setTimeout(() => {
                $dataWrong.setAttribute("data-wrong", "false");
                nextW();
            }, 2000);

        }
    }

    if (e.target.matches(".colButton_1 > button")) {
        totalTimes++;
        if (e.target.textContent == $tableContainer[1].getAttribute("data-letter")) {
            $wrongSound.pause();
            correctCounterTwo++;
            acceptedPoints++
            $correctSound.play();
            $intentoText.innerHTML = "Intentos:"
            $intentosNumber[0].textContent = 3;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.classList.add("hoverVerde")
            $colButton_1.forEach(e => {
                if (e.textContent.length > 0) {
                    e.disabled = true
                }
            })
            $theLetter.innerHTML = e.target.textContent
            $theLetterContainer.classList.add("hoverVerde")
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }
            setTimeout(() => {
                $theLetterContainer.classList.remove("hoverVerde")
                e.target.classList.remove("hoverVerde");
                $colButton_1.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.removeAttribute("disabled");
                    }
                })
                defineNextLetter()
            }, 2000);
        } else {
            $intentosNumber[0].textContent = parseInt($intentosNumber[0].textContent) - 1;
            ErrorCounter++;
            $wrongSound.play();
            $colButton_1.forEach(el => {
                el.disabled = true
            })
            setTimeout(() => {
                e.target.classList.remove("hoverRed");
                $colButton_1.forEach(e => {
                    e.removeAttribute("disabled")
                })
            }, 2000);
            e.target.classList.add("hoverRed")
            if ($intentosNumber[0].textContent == 1) {
                $intentoText.innerHTML = "Intento:"
            }
            if ($intentosNumber[0].textContent == 0) {
                incorrectCounterTwo++;
                $colButton_1.forEach(e => {
                    e.disabled = true;
                    e.classList.add("hoverRed");
                })
                $intento.classList.add("swing");
                $ceroIntentos.play()
                setTimeout(() => {
                    $colButton_1.forEach(e => {
                        e.classList.remove("hoverRed");
                        e.removeAttribute("disabled");
                        defineNextLetter();
                        $intentosNumber[0].innerHTML = 3
                    })
                    $theLetter.classList.remove("hoverRed")
                    $intento.classList.remove("swing")
                }, 2000);
            }
        }
    }
});

//Evento click para Repetir la letra nuevamente.
$repeatDictation.addEventListener("click", (e) => {
    if($repeatDictationSpan.textContent == "Encuentra la letra."){
        voiceExercise("p");
    }else{
        voiceExercise()
    }
});
