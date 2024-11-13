
//Variables
let $dataWrong = document.querySelector("[data-wrong]");
let $wrongSound = document.querySelector(".wrongSound");
let $correctSound = document.querySelector(".correctSound");
let $tableLetter = document.querySelector(".tableContainer");
$tableLetter.setAttribute("data-next", "4");
let $starNumber = document.querySelector(".start");
let $progressBar = document.querySelector(".progress-bar");
let incorrectCounter = 0;
let $paragrahMessenger = document.querySelector(".messengerInformation > p");
//Contadores para determinar cuantas veces el niño ha acertado incorrectamente.
let countb = 0;
let counti = 0;
let countp = 0;
let countm = 0;
let acceptedPoints = 0;
let totalTimes = 0;

//Contadores para determinar cuantas veces el niño ha acertado correctamente.
let correctCounterd = 0;
let correctCounterl = 0;
let correctCounterq = 0;
let correctCountern = 0;
let randomNumber = 0;
let $buttonLetter = document.querySelectorAll(".tableContainer > button");
let $countDownBody = document.querySelector(".countDownBody");
let $repeatDictation = document.querySelector(".repeatDictation");

//Eventos.

//Evento de localStorage
document.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("letter") === null) {
        localStorage.setItem("letter", null);
    }
    if (localStorage.getItem("buttonNumber") === null) {
        localStorage.setItem("buttonNumber", null);
    }
});

//Evento para pasar a la siguiente o salir de la lección.
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
      
        if (e.target.textContent == "d") {
            acceptedPoints++;
            correctCounterd++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.classList.add("hoverVerde");
            $buttonLetter.forEach(e => {
                e.disabled = true
            })
            $wrongSound.pause();
            $correctSound.play();
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                $buttonLetter.forEach(e => {
                    e.removeAttribute("disabled")
                })
                Next_db();

                $correctSound.pause();
            }, 2000);
        } else {
            $buttonLetter.forEach((letter) => {
                if (letter.textContent === localStorage.getItem("letter")) {
                    letter.classList.add("hoverVerde");
                    setTimeout(() => {
                        letter.classList.remove("hoverVerde");
                    }, 2000);
                }
            });
            $buttonLetter.forEach(e => {
                e.disabled = true;
            })
            e.target.classList.add("hoverRed");
            $dataWrong.setAttribute("data-wrong", "true");
            if ($dataWrong.getAttribute("data-wrong")) {
                $wrongSound.play();
            }
            setTimeout(() => {
                e.target.classList.remove("hoverRed");
                $buttonLetter.forEach(e => {
                    e.removeAttribute("disabled");
                })
            }, 2000);
            setTimeout(() => {
                $dataWrong.setAttribute("data-wrong", "false");
                Define_Next_Letter();
            }, 2000);
            incorrectCounter = incorrectCounter + 1;
            switch (localStorage.getItem("letter")) {
                case "d":
                    countb++;
                    break;
                case "l":
                    counti++;
                    break;
                case "q":
                    countp++;
                    break;
                case "n":
                    countm++;
                    break;
                default:
                    break;
            }
        }

        if (e.target.textContent == "l") {
            acceptedPoints++;
            correctCounterl++;
            $wrongSound.pause();
            $correctSound.play();
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.classList.add("hoverVerde");
            $buttonLetter.forEach(e => {
                e.disabled = true
            })
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                Next_il();
                $buttonLetter.forEach(e => {
                    e.removeAttribute("disabled")
                })
            }, 2000);
        }

        if (e.target.textContent == "q") {
            acceptedPoints++;
            correctCounterq++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.classList.add("hoverVerde");
            $buttonLetter.forEach(e => {
                e.disabled = true
            })
            $wrongSound.pause();
            $correctSound.play();
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                $buttonLetter.forEach(e => {
                    e.removeAttribute("disabled")
                })
                Next_qp();
            }, 2000);
        }
        if (e.target.textContent == "n") {
            acceptedPoints++;
            correctCountern++;
            e.target.classList.add("hoverVerde");
            $wrongSound.pause();
            $buttonLetter.forEach(e => {
                e.disabled = true;
            })
            $correctSound.play();
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                $buttonLetter.forEach(e => {
                    e.removeAttribute("disabled")
                })
                Next_mn();
            }, 2000);
        }
    }
});

// No se que hace este evento. No me acuerdo xd
let $letterSound = document.querySelector(".letterSound");
document.addEventListener("mousemove", (e) => {
    if (e.target.matches(".tableContainer > button")) {
        try {
            $letterSound.play();
        } catch (error) {
            alert("error");
        }
    }
});
//Evento de Repetir el dictado o más bien repetir la letra de la lección
$repeatDictation.addEventListener("click", (e) => {
    switch (localStorage.getItem("letter")) {
        case "d":
            voiceExercise("d");
            break;
        case "l":
            voiceExercise("l");
            break;
        case "q":
            voiceExercise("q");
            break;
        case "n":
            voiceExercise("n");
            break;
        default:
            break;
    }
});

//Funciones.

//Estas funciones se utilizan para cambiar la posición de la letra mencionada por localStorage.
function Next_db() {
    switch ($tableLetter.getAttribute("data-next")) {
        case "0":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("buttonNumber", randomNumber);
            defineLetter("b", "d", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "1":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("buttonNumber", randomNumber);
            defineLetter("b", "d", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "2":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("buttonNumber", randomNumber);
            defineLetter("b", "d", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "3":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("buttonNumber", randomNumber);
            defineLetter("b", "d", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "4":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("buttonNumber", randomNumber);
            defineLetter("b", "d", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "5":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("buttonNumber", randomNumber);
            defineLetter("b", "d", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "6":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("buttonNumber", randomNumber);
            defineLetter("b", "d", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "7":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("buttonNumber", randomNumber);
            defineLetter("b", "d", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "8":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("b", "d", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "9":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("b", "d", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "10":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("b", "d", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "11":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("b", "d", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "12":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("b", "d", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "13":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("b", "d", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "14":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("b", "d", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "15":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("b", "d", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        default:
            alert("you are crazy");
            break;
    }
}

function Next_il() {
    switch ($tableLetter.getAttribute("data-next")) {
        case "0":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("i", "l", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "1":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("i", "l", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "2":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("i", "l", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "3":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("i", "l", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "4":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("i", "l", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "5":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("i", "l", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "6":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("i", "l", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "7":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("i", "l", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "8":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("i", "l", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "9":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("i", "l", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "10":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("i", "l", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "11":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("i", "l", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "12":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("i", "l", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "13":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("i", "l", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "14":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("i", "l", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "15":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("i", "l", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        default:
            break;
    }
}

function Next_qp() {
    switch ($tableLetter.getAttribute("data-next")) {
        case "0":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("p", "q", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "1":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("p", "q", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "2":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("p", "q", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "3":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("p", "q", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "4":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("p", "q", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "5":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("p", "q", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "6":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("p", "q", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "7":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("p", "q", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "8":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("p", "q", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "9":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("p", "q", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "10":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("p", "q", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "11":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("p", "q", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "12":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("p", "q", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "13":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("p", "q", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "14":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("p", "q", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "15":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("p", "q", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        default:
            break;
    }
}

function Next_mn() {
    switch ($tableLetter.getAttribute("data-next")) {
        case "0":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("m", "n", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "1":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("m", "n", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "2":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("m", "n", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "3":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("m", "n", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "4":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("m", "n", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "5":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("m", "n", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "6":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("m", "n", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "7":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("m", "n", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "8":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("m", "n", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "9":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("m", "n", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "10":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("m", "n", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "11":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("m", "n", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "12":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("m", "n", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "13":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("m", "n", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "14":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("m", "n", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "15":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("m", "n", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        default:
            break;
    }
}

//Funcion principal para cambiarla.
function Define_Next_Letter() {
    switch (localStorage.getItem("letter")) {
        case "d":
            Next_db();
            break;
        case "l":
            Next_il();
            break;
        case "q":
            Next_qp();
            break;
        case "n":
            Next_mn();
            break;
        default:
            break;
    }
}
//Estas dos funciones sirven para automatizar la tarea completa de rellenar/establecer/escuchar la letra de la etiqueta. Como su nombre lo define.
function defineLetter(similarLetter, winningLetter, number) {
    totalTimes++;
    let $button = document.querySelectorAll(".tableContainer > button");
    let contador = 0;
    for (let i = 0; i < $button.length; i++) {
        contador = contador + 1;
        if (number == contador) {
            $button[i].innerHTML = `${winningLetter}`;
            continue;
        }
        $button[i].innerHTML = `${similarLetter}`;
    }
}

function voiceExercise(winningLetter) {
    let texto = `Encuentra la letra, ${winningLetter}.`;
    const hablar = (texto) =>
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    return hablar(texto);
}

//Estas funciones determinan el tiempo de espera para pasar a la siguiente búsqueda de dicha letra.
async function countDownB() {
    await localStorage.setItem("letter", `d`);
    const CountdownNext = document.querySelector(".countDownNext");
    CountdownNext.style.display = "none"
    setTimeout(() => {
        CountdownNext.removeAttribute("style")
    }, 5000);
    let countForNext = 40;
    let countdown = setInterval(() => {
        countForNext--;
        CountdownNext.textContent = countForNext;
        if (countForNext <= 0) {
            clearInterval(countdown);
            countDownL();
        }
    }, 1000);
}
countDownB();
async function countDownL() {
    $progressBar.innerHTML = "30%";
    $progressBar.style.width = "30%";
    $progressBar.style.background = "#ff7d3f";
    await localStorage.setItem("letter", `l`);
    _1_3();
    voiceExercise("l");
    defineLetter("i", "l", Math.floor(Math.random() * 72));
    const CountdownNext = document.querySelector(".countDownNext");
    CountdownNext.style.display = "none"
    setTimeout(() => {
        CountdownNext.removeAttribute("style")
    }, 3000);
    let countForNext = 45;
    let countdown = setInterval(() => {
        countForNext--;
        CountdownNext.textContent = countForNext;
        if (countForNext <= 0) {
            clearInterval(countdown);
            Count_Down_Q();
        }
    }, 1000);
}
async function Count_Down_Q() {
    await localStorage.setItem("letter", `q`);
    $progressBar.innerHTML = "50%";
    $progressBar.style.width = "50%";
    $progressBar.style.background = "#ff7d3f";
    _1_3();
    voiceExercise("q");
    defineLetter("p", "q", Math.floor(Math.random() * 72));
    const CountdownNext = document.querySelector(".countDownNext");
    CountdownNext.style.display = "none"
    setTimeout(() => {
        CountdownNext.removeAttribute("style")
    }, 3000);
    let countForNext = 44;
    let countdown = setInterval(() => {
        countForNext--;
        CountdownNext.textContent = countForNext;
        if (countForNext <= 0) {
            clearInterval(countdown);
            Count_Down_N();
        }
    }, 1000);
}
async function Count_Down_N() {
    await localStorage.setItem("letter", `n`);
    $progressBar.innerHTML = "70%";
    $progressBar.style.width = "70%";
    $progressBar.style.background = "#ff7d3f";
    _1_3();
    voiceExercise("n");
    defineLetter("m", "n", Math.floor(Math.random() * 72));
    const CountdownNext = document.querySelector(".countDownNext");
    CountdownNext.style.display = "none"
    setTimeout(() => {
        CountdownNext.removeAttribute("style")
    }, 3000);
     let countForNext = 40;
    let countdown = setInterval(() => {
        countForNext--;
        CountdownNext.textContent = countForNext;
        if (countForNext <= 0) {
            clearInterval(countdown);
            End_Game();
        }
    }, 1000);
}

//Funcion para terminar la leccion.
async function End_Game() {
    $progressBar.innerHTML = "100%";
    $progressBar.style.width = "100%";
    let $containerResults = document.querySelector(".containerResults");
    let $totalStar = document.querySelector(".totalStar");
    let $motivationalMessage = document.querySelector(".motivationalMessage");
    let $percentage = document.querySelector(".percentage");
    let $correctFailedB = document.querySelector(".correctFailedB");
    let $correctFailedL = document.querySelector(".correctFailedL");
    let $correctFailedQ = document.querySelector(".correctFailedQ");
    let $correctFailedN = document.querySelector(".correctFailedN");
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
            lesson_id: 15,
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
        if (countb == 0) {
            $correctFailedB.innerHTML = `¡Enhorabuena! Has acertado ${correctCounterd} veces y no has cometido ningún error.`;
        } else if (countb == 1) {
            $correctFailedB.innerHTML = `¡Buen Trabajo! Has acertado ${correctCounterd} veces y has fallado solo una vez.`;
        } else {
            $correctFailedB.innerHTML = `Has acertado ${correctCounterd} veces y has fallado ${countb} veces.`;
        }
        if (counti == 0) {
            $correctFailedL.innerHTML = `¡Enhorabuena! Has acertado ${correctCounterl} veces y no has cometido ningún error.`;
        } else if (counti == 1) {
            $correctFailedL.innerHTML = `¡Buen Trabajo! Has acertado ${correctCounterl} veces y has fallado solo una vez.`;
        } else {
            $correctFailedL.innerHTML = `Has acertado ${correctCounterl} veces y has fallado ${counti} veces.`;
        }
        if (countp == 0) {
            $correctFailedQ.innerHTML = `¡Enhorabuena! Has acertado ${correctCounterq} veces y no has cometido ningún error.`;
        } else if (countp == 1) {
            $correctFailedQ.innerHTML = `¡Buen Trabajo! Has acertado ${correctCounterq} veces y has fallado solo una vez.`;
        } else {
            $correctFailedQ.innerHTML = `Has acertado ${correctCounterq} veces y has fallado ${countp} veces.`;
        }
        if (countm == 0) {
            $correctFailedN.innerHTML = `¡Enhorabuena! Has acertado ${correctCountern} veces y no has cometido ningún error.`;
        } else if (countm == 1) {
            $correctFailedN.innerHTML = `¡Buen Trabajo! Has acertado ${correctCountern} veces y has fallado solo una vez.`;
        } else {
            $correctFailedN.innerHTML = `Has acertado ${correctCountern} veces y has fallado ${countm} veces.`;
        }
    })
    .catch((error)=> {
        console.error("Error:", error);
        alert("Ha ocurrido un error al enviar los datos al servidor.");
    });
}

//Función que se ejecuta al inicio de la lección de forma automática.
setTimeout(() => {
    let $main = document.querySelector("main");
    $main.removeChild($main.children[7]);
    setTimeout(async () => {
        $countDownBody.removeAttribute("style");
        voiceExercise("d");
        _1_3();
        setTimeout(() => {
            let $messengerInformation = document.querySelector(
                ".messengerInformation"
            );
            $messengerInformation.removeAttribute("style");
            $messengerInformation.classList.add("AnimationMessengerInformation");

            setTimeout(async () => {
                await $messengerInformation.classList.remove(
                    "AnimationMessengerInformation"
                );
                await setTimeout(() => {
                    $repeatDictation.removeAttribute("style");
                    $repeatDictation.classList.add("animationLetter");
                    $paragrahMessenger.innerHTML = `Repetir la letra nuevamente.`;
                    $paragrahMessenger.classList.add("animationLetter");
                }, 3000);
            }, 8000);
        }, 4000);
    }, 0);
}, 1500);

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
