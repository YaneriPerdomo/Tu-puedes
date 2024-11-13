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

let correctCounter = 0;
let ErrorCounter = 0;

//Contadores para determinar cuantas veces el niño ha acertado correctamente.
let correnctLabel = 0
let randomNumber = 0;
let acceptedPoints = 0;
let totalTimes = 0;
let $spanLetter = document.querySelectorAll(".tableContainer > button");
let $countDownBody = document.querySelector(".countDownBody");
let $repeatDictation = document.querySelector(".repeatDictation");
let $letterSound = document.querySelector(".letterSound");

//Variables de audios
let $endLeccion = document.querySelector(".endLeccion");
let $sonidoSiguiente = document.querySelector(".sonidoSiguiente")

//FUNCIONES//

//Estas funciones se ejecutan para pasar a la siguiente búsqueda de la letra(ejercicio) correspondiente.

const CountdownNext = document.querySelector(".countDownNext");
async function temporizador() {
    let $segMin = document.querySelector(".seg-min")
    let countForNext = 60;
    setTimeout(() => {
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
    }, 4000);
}
temporizador()
function temporizadorSegundaParte() {
    let $segMin = document.querySelector(".seg-min")
    let countForNext = 60;
    let countdown = setInterval(() => {
        countForNext--;
        CountdownNext.textContent = `${countForNext}`;
        if (countForNext <= 0) {
            clearInterval(countdown);
            End_Game();
            $endLeccion.play()
        }
    }, 1000);
}


//Funcion para terminar la leccion.

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
            lesson_id: 4,
            stars: parseInt($starNumber.textContent),
            progress: parseFloat($percentage.textContent),
        }),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    }).then((res)=>{
        document.querySelector(".containerResults  > div").classList.add("animationBounce");
        
        // setting assertion results
        if (ErrorCounter == 0) {
            $correctFailed.innerHTML = `Has acertado ${acceptedPoints} veces y no has cometido ningún error.`;
        } else if (ErrorCounter == 1) {
            $correctFailed.innerHTML = `Has acertado ${acceptedPoints} veces y has fallado solo una vez.`;
        } else {
            $correctFailed.innerHTML = `Has acertado ${acceptedPoints} veces y has fallado ${ErrorCounter} veces.`;
        }
    })
    .catch((error)=> {
        console.error("Error:", error);
        alert("Ha ocurrido un error al enviar los datos al servidor.");
    });
}


//Estas dos funciones sirven para automatizar la tarea completa de rellenar/establecer la letra de la etiqueta. Como su nombre lo define.
function defineLetter(similarLetterOne, similarLetterTwo, winningLetter, number) {
    totalTimes++;
    let $span = document.querySelectorAll(".tableContainer > button");
    let contador = 0;
    let numeroR = [];
    $tableLetter.setAttribute("data-letter", winningLetter)
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

//Función que se ejecuta al inicio de la lección de forma automática.
setTimeout(() => {
    let $main = document.querySelector("main");
    $main.removeChild($main.children[10]);
    setTimeout(async () => {
        $countDownBody.removeAttribute("style");
        messengerForUser()
        _1_3();
        setTimeout(() => {
            let $messengerInformation = document.querySelector(
                ".messengerInformation"
            );
            $messengerInformation.removeAttribute("style");
            $messengerInformation.classList.add("AnimationMessengerInformation");
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
//Esta funcion sirve para ejecutar automáticamente la tarea de la siguiente posición del elemento correspondiente.     
function nextAleatorio() {
    switch ($tableLetter.getAttribute("data-next")) {
        case "0":
            randomNumber = Math.floor(Math.random() * 12);
            defineLetter("a", "1", "b", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 11)}`
            );
            break;
        case "1":
            randomNumber = Math.floor(Math.random() * 12);
            defineLetter("e", "p", ">", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 11)}`
            );
            break;
        case "2":
            randomNumber = Math.floor(Math.random() * 12);
            defineLetter("k", "e", "2", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 11)}`
            );
            break;
        case "3":
            randomNumber = Math.floor(Math.random() * 12);
            defineLetter("g", "3", "l", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 11)}`
            );
            break;
        case "4":
            randomNumber = Math.floor(Math.random() * 12);
            defineLetter("2", "h", "3", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 11)}`
            );
            break;
        case "5":
            randomNumber = Math.floor(Math.random() * 12);
            defineLetter("ti", "di", "mu", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 11)}`
            );
            break;
        case "6":
            randomNumber = Math.floor(Math.random() * 12);
            defineLetter("n", "m", "ñ", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 11)}`
            );
            break;
        case "7":
            randomNumber = Math.floor(Math.random() * 12);
            defineLetter("l", "j", "ll", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 11)}`
            );
            break;
        case "8":
            randomNumber = Math.floor(Math.random() * 12);
            defineLetter("d", "p", "v", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 11)}`
            );
            break;
        case "9":
            randomNumber = Math.floor(Math.random() * 12);
            defineLetter("10", "1", "11", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 11)}`
            );
            break;
        case "10":
            randomNumber = Math.floor(Math.random() * 12);
            defineLetter("<", "?", "¿", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 11)}`
            );
            break;
        case "11":
            randomNumber = Math.floor(Math.random() * 12);
            defineLetter("g", "er", "p", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 11)}`
            );
            break;
        default:
            break;
    }
}
function messengerForUser() {
    let texto = `Encuentra el elemento oculto que es diferente a los demás.`;
    const hablar = (texto) =>
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    return hablar(texto);
}
//Eventos//
//Evento click para Repetir la letra nuevamente.
$repeatDictation.addEventListener("click", (e) => {
    messengerForUser()
});
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
//Evento de localStorage
document.addEventListener("DOMContentLoaded", (e) => {
    if ($tableLetter.getAttribute("data-letter") === null) {
        localStorage.setItem("letter", null);
    }
    if (localStorage.getItem("spanNumber") === null) {
        localStorage.setItem("spanNumber", null);
    }
});
//Evento para ver si la letra seleccionada por el usuario esta correcta o no. 
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
        $sonidoSiguiente.play()
    }

    if (e.target.matches(".cuidado")) {
        let texto = ` ¡Cuidado!. ¿Vas a abandonar tu lección y perderás todo el progreso?. ¿Estás seguro de que quieres abandonar? `;
        const hablar = (texto) =>
            speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
        return hablar(texto);
    }

    if (e.target.matches(".tableContainer > button")) {
        if (e.target.textContent == $tableLetter.getAttribute("data-letter")) {
            correctCounter++;
            acceptedPoints++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.classList.add("hoverVerde");
            $wrongSound.pause();
            $correctSound.play();
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                nextAleatorio();
                $correctSound.pause();
            }, 2000);
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }
            $spanLetter.forEach(letter => {
                letter.disabled = true
            })
            setTimeout(() => {
                $spanLetter.forEach(letter => {
                    letter.removeAttribute("disabled")
                })
            }, 2000);
        } else {
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
                nextAleatorio();
            }, 2000);
            ErrorCounter++;
        }
    }
});

document.addEventListener("DOMContentLoaded", e => nextAleatorio());
