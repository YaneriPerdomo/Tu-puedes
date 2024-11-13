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
let countfia = 0;
let countdar = 0;
let countque = 0;
let countfiz = 0;

let totalTimes = 0;
let acceptedPoints = 0;

//Contadores para determinar cuantas veces el niño ha acertado correctamente.
let correctCounterFia = 0;
let correctCounterDar = 0;
let correctCounterQue = 0;
let correctCounterFiz = 0;
let randomNumber = 0;
let $spanLetter = document.querySelectorAll(".tableContainer > button");
let $countDownBody = document.querySelector(".countDownBody");
let $repeatDictation = document.querySelector(".repeatDictation");
let $letterSound = document.querySelector(".letterSound");

//Variables de audios
let $endLeccion = document.querySelector(".endLeccion");
let $sonidoSiguiente = document.querySelector(".sonidoSiguiente")

//FUNCIONES//

//Estas funciones se ejecutan para pasar a la siguiente búsqueda de la letra(ejercicio) correspondiente.
async function countDownFia() {
    $tableLetter.setAttribute("data-letter", "fia")
    const CountdownNext = document.querySelector(".countDownNext");
    let countForNext = 40;
    setTimeout(() => {
        let countdown = setInterval(() => {
            countForNext--;
            CountdownNext.textContent = countForNext;
            if (countForNext <= 0) {
                clearInterval(countdown);
                countDownDar()
            }
        }, 1000);
    }, 4000);
}
countDownFia();
async function countDownDar() {
    $progressBar.innerHTML = "30%";
    $progressBar.style.width = "30%";
    $progressBar.style.background = "#ff7d3f";
    await $tableLetter.setAttribute("data-letter", "dar")
    _1_3();
    voiceExercise("dar");
    defineLetter("ba", "dur", "dar", Math.floor(Math.random() * 12))
    setTimeout(() => {
        const CountdownNext = document.querySelector(".countDownNext");
        let countForNext = 40;
        let countdown = setInterval(() => {
            countForNext--;
            CountdownNext.textContent = countForNext;
            if (countForNext <= 0) {
                clearInterval(countdown);
                CountDownQue()
            }
        }, 1000);
    }, 3000);
}
async function countDownFiz() {
    $progressBar.innerHTML = "70%";
    $progressBar.style.width = "70%";
    $progressBar.style.background = "#ff7d3f";
    $tableLetter.setAttribute("data-letter", "fiz")
    _1_3();
    voiceExercise("fiz");
    defineLetter("gi", "fi", "fiz", Math.floor(Math.random() * 12))
    setTimeout(() => {
        const CountdownNext = document.querySelector(".countDownNext");
        let countForNext = 40;
        let countdown = setInterval(() => {
            countForNext--;
            CountdownNext.textContent = countForNext;
            if (countForNext <= 0) {
                clearInterval(countdown);
                End_Game()
                $endLeccion.play();
            }
        }, 1000);
    }, 3000);
}

//Funcion para terminar la leccion.
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
            lesson_id: 10,
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
async function CountDownQue() {
    $tableLetter.setAttribute("data-letter", "que")
    $progressBar.innerHTML = "50%";
    $progressBar.style.width = "50%";
    $progressBar.style.background = "#ff7d3f";
    _1_3();
    voiceExercise("que");
    defineLetter("je", "pe", "que", Math.floor(Math.random() * 12))
    const CountdownNext = document.querySelector(".countDownNext");
    let countForNext = 30;
    setTimeout(() => {
        let countdown = setInterval(() => {
            countForNext--;
            CountdownNext.textContent = countForNext;
            if (countForNext <= 0) {
                clearInterval(countdown);
                countDownFiz()
            }
        }, 1000);
    }, 3000);
}

//Funcion principal para cambiar la posicion de la letra.
function Define_Next_Letter() {
    switch ($tableLetter.getAttribute("data-letter")) {
        case "fia":
            nextFia();
            break;
        case "dar":
            nextDar()
            break;
        case "que":
            nextQue()
            break;
        case "fiz":
            nextFiz();
            break;
        default:
            break;
    }
}

//Estas dos funciones sirven para automatizar la tarea completa de rellenar/establecer la letra de la etiqueta. Como su nombre lo define.
function defineLetter(similarLetterOne, similarLetterTwo, winningLetter, number) {
    let $span = document.querySelectorAll(".tableContainer > button");
    let contador = 0;
    totalTimes++;
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
function voiceExercise(winningLetter) {
    let texto = `Encuentra la letra, ${winningLetter}.`;
    const hablar = (texto) =>
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    return hablar(texto);
}

//Función que se ejecuta al inicio de la lección de forma automática.
setTimeout(() => {
    let $main = document.querySelector("main");
    $main.removeChild($main.children[10]);
    setTimeout(async () => {
        $countDownBody.removeAttribute("style");
        voiceExercise("fia");
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

//Estas funciones sirven para ejecutar automáticamente la tarea de la siguiente posición de la letra correspondiente.     
function nextDar() {
    randomNumber = Math.floor(Math.random() * 12);
    defineLetter("ba", "dur", "dar", randomNumber)
}
function nextFia() {
    randomNumber = Math.floor(Math.random() * 12);
    defineLetter("flu", "fio", "fia", randomNumber)
}
function nextQue() {
    randomNumber = Math.floor(Math.random() * 12);
    defineLetter("je", "pe", "que", randomNumber)
}
function nextFiz() {
    randomNumber = Math.floor(Math.random() * 12);
    defineLetter("gi", "fi", "fiz", randomNumber)
}

//Eventos//

//Evento click para Repetir la letra nuevamente.
$repeatDictation.addEventListener("click", (e) => {
    switch ($tableLetter.getAttribute("data-letter")) {
        case "fia":
            voiceExercise("fia");
            break;
        case "dar":
            voiceExercise("dar");
            break;
        case "que":
            voiceExercise("que");
            break;
        case "fiz":
            voiceExercise("fiz");
            break;
        default:
            break;
    }
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
            correctCounterFia++;
            acceptedPoints++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.classList.add("hoverVerde");
            $wrongSound.pause();
            $correctSound.play();
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                Define_Next_Letter();
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
                Define_Next_Letter();
            }, 2000);
            incorrectCounter = incorrectCounter + 1;
            switch ($tableLetter.getAttribute("data-letter")) {
                case "fia":
                    countfia++;
                    break;
                case "dar":
                    countdar++;
                    break;
                case "que":
                    countque++;
                    break;
                case "fiz":
                    countfiz++;
                    break;
                default:
                    break;
            }
        }

    }
});

document.addEventListener("DOMContentLoaded", e => nextFia());
