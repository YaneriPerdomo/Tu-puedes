
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
let totalTimes = 0;

//Contadores para determinar cuantas veces el niño ha acertado correctamente.
let correctCounterFia = 0;
let correctCounterDar = 0;
let correctCounterQue = 0;
let correctCounterFiz = 0;
let randomNumber = 0;
let $spanLetter = document.querySelectorAll(".tableContainer > button");
let $countDownBody = document.querySelector(".countDownBody");
let $repeatDictation = document.querySelector(".repeatDictation");


//Función que se ejecuta al inicio de la lección de forma automática.
setTimeout(() => {
    let $main = document.querySelector("main");
    $main.removeChild($main.children[7]);
    setTimeout(async () => {
        $countDownBody.removeAttribute("style");
        voiceExercise("p");
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
//Estas funciones se ejecutan para pasar a la siguiente búsqueda de la letra(ejercicio) correspondiente.
//La Letra P
async function countDownP() {
    await localStorage.setItem("letter", `p`);
    const CountdownNext = document.querySelector(".countDownNext");
    CountdownNext.style.display = "none"
    setTimeout(() => {
        CountdownNext.removeAttribute("style")
    }, 5000);
    let countForNext =  45;
    let countdown = setInterval(() => {
        countForNext--;
        CountdownNext.textContent = countForNext;
        if (countForNext <= 0) {
            clearInterval(countdown);
            countDownV()
        }
    }, 1000);
}
countDownP();
//La Letra v
async function countDownV() {
    $progressBar.innerHTML = "30%";
    $progressBar.style.width = "30%";
    $progressBar.style.background = "#ff7d3f";
    await localStorage.setItem("letter", `v`);
    _1_3();
    voiceExercise("v");
    defineLetter("ʌ", "u", "v", Math.floor(Math.random() * 72));
    const CountdownNext = document.querySelector(".countDownNext");
    CountdownNext.style.display = "none"
    setTimeout(() => {
        CountdownNext.removeAttribute("style")
    }, 3000  );
    let countForNext = 45;
    let countdown = setInterval(() => {
        countForNext--;
        CountdownNext.textContent = countForNext;
        if (countForNext <= 0) {
            clearInterval(countdown);
            CountDownW()
        }
    }, 1000);
}
//La letra j
async function countDownJ() {
    $progressBar.innerHTML = "70%";
    $progressBar.style.width = "70%";
    $progressBar.style.background = "#ff7d3f";
    await localStorage.setItem("letter", `j`);
    _1_3();
    voiceExercise("j");
    defineLetter("t", "ɾ̣", "j", Math.floor(Math.random() * 72))
    const CountdownNext = document.querySelector(".countDownNext");
    CountdownNext.style.display = "none"
    setTimeout(() => {
        CountdownNext.removeAttribute("style")
    }, 3000  );
    let countForNext = 45;
    let countdown = setInterval(() => {
        countForNext--;
        CountdownNext.textContent = countForNext;
        if (countForNext <= 0) {
            clearInterval(countdown);
            End_Game()
        }
    }, 1000);
}

//La letra w 
async function CountDownW() {
    await localStorage.setItem("letter", `w`);
    $progressBar.innerHTML = "50%";
    $progressBar.style.width = "50%";
    $progressBar.style.background = "#ff7d3f";
    _1_3();
    voiceExercise("w");
    defineLetter("ʍ", "m", "w", Math.floor(Math.random() * 72))
    const CountdownNext = document.querySelector(".countDownNext");
    CountdownNext.style.display = "none"
    setTimeout(() => {
        CountdownNext.removeAttribute("style")
    }, 3000  );
    let countForNext = 45;
    let countdown = setInterval(() => {
        countForNext--;
        CountdownNext.textContent = countForNext;
        if (countForNext <= 0) {
            clearInterval(countdown);
            countDownJ()
        }
    }, 1000);
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
            lesson_id: 23,
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

//Funcion principal para cambiar la posicion de la letra.
function Define_Next_Letter() {
    switch (localStorage.getItem("letter")) {
        case "p":
            nextP();
            break;
        case "v":
            nextV()
            break;
        case "w":
            nextW()
            break;
        case "j":
            nextJ();
            break;
        default:
            break;
    }
}

//Estas dos funciones sirven para automatizar la tarea completa de rellenar/establecer la letra de la etiqueta. Como su nombre lo define.
function defineLetter(similarLetterOne, similarLetterTwo, winningLetter, number) {
  
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
        }
        else if (numeroR[i] % 2 == 0) {
            $span[i].innerHTML = `${similarLetterOne}`;
        } else {
            $span[i].innerHTML = `${similarLetterTwo}`;
        }

    }
}

function voiceExercise(winningLetter) {
    let texto = `Encuentra la letra, ${winningLetter}.`;
    const hablar = (texto) =>
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    return hablar(texto);
}

//Estas funciones sirven para ejecutar automáticamente la tarea de la siguiente posición de la letra correspondiente.     

function nextV() {
    switch ($tableLetter.getAttribute("data-next")) {
        case "0":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("ʌ", "u", "v", randomNumber)
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "1":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("ʌ", "u", "v", randomNumber)
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "2":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("ʌ", "u", "v", randomNumber)
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "3":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("ʌ", "u", "v", randomNumber)
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "4":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("ʌ", "u", "v", randomNumber)
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "5":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("ʌ", "u", "v", randomNumber)
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "6":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("ʌ", "u", "v", randomNumber)
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "7":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("ʌ", "u", "v", randomNumber)
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "8":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("ʌ", "u", "v", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "9":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("ʌ", "u", "v", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "10":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("ʌ", "u", "v", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "11":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("ʌ", "u", "v", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "12":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("flu", "fio", "fia", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "13":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("ʌ", "u", "v", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "14":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("ʌ", "u", "v", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "15":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("ʌ", "u", "v", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
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
function nextW() {
    switch ($tableLetter.getAttribute("data-next")) {
        case "0":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("ʍ", "m", "w", randomNumber)
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "1":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("ʍ", "m", "w", randomNumber)
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "2":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("ʍ", "m", "w", randomNumber)
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "3":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("ʍ", "m", "w", randomNumber)
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "4":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("ʍ", "m", "w", randomNumber)
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "5":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("ʍ", "m", "w", randomNumber)
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "6":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("ʍ", "m", "w", randomNumber)
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "7":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("ʍ", "m", "w", randomNumber)
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "8":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("ʍ", "m", "w", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "9":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("ʍ", "m", "w", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "10":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("ʍ", "m", "w", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "11":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("ʍ", "m", "w", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "12":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("ʍ", "m", "w", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "13":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("ʍ", "m", "w", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "14":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("ʍ", "m", "w", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "15":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("ʍ", "m", "w", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
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
function nextJ() {
    switch ($tableLetter.getAttribute("data-next")) {
        case "0":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("t", "ɾ̣", "j", randomNumber)
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "1":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("t", "ɾ̣", "j", randomNumber)
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "2":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("t", "ɾ̣", "j", randomNumber)
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "3":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("t", "ɾ̣", "j", randomNumber)
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "4":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("t", "ɾ̣", "j", randomNumber)
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "5":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("t", "ɾ̣", "j", randomNumber)
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "6":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("t", "ɾ̣", "j", randomNumber)
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "7":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("t", "ɾ̣", "j", randomNumber)
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "8":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("t", "ɾ̣", "j", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "9":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("t", "ɾ̣", "j", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "10":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("t", "ɾ̣", "j", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "11":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("t", "ɾ̣", "j", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "12":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("t", "ɾ̣", "j", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "13":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("t", "ɾ̣", "j", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "14":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("t", "ɾ̣", "j", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "15":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("t", "ɾ̣", "j", randomNumber)
            localStorage.setItem("spanNumber", randomNumber);
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
    await defineLetter("q", "b", "p", 2)
    if (localStorage.getItem("letter") === null) {
        localStorage.setItem("letter", null);
    }
    if (localStorage.getItem("spanNumber") === null) {
        localStorage.setItem("spanNumber", null);
    }
});
//Este es un evento del mouse y se activa el sonido cuando el mouse está sobre el botón.

//Evento para pasar a la siguiente letra . De igual manera hay que verificar si esta correcta o no.
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
        totalTimes++
        if (e.target.textContent == "p") {
            acceptedPoints++
            correctCounterFia++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.classList.add("hoverVerde");
            $spanLetter.forEach(letter => {
                letter.disabled = true;
                setTimeout(() => {
                    letter.removeAttribute("disabled")
                }, 2000);
            })
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
            }, 2000);
            setTimeout(() => {
                $dataWrong.setAttribute("data-wrong", "false");
                Define_Next_Letter();
            }, 2000);
            incorrectCounter = incorrectCounter + 1;
            switch (localStorage.getItem("letter")) {
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
        if (e.target.textContent == "v") {
            acceptedPoints++
            correctCounterDar++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.classList.add("hoverVerde");

            $wrongSound.pause();

            $correctSound.play();
            $spanLetter.forEach(letter => {
                letter.disabled = true;
                setTimeout(() => {
                    letter.removeAttribute("disabled")
                }, 2000);
            })
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                nextV();

                $correctSound.pause();
            }, 2000);
        }
        if (e.target.textContent == "w") {
            acceptedPoints++
            correctCounterQue++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.classList.add("hoverVerde");
            $spanLetter.forEach(letter => {
                letter.disabled = true;
                setTimeout(() => {
                    letter.removeAttribute("disabled")
                }, 2000);
            })
            $wrongSound.pause();
            $correctSound.play();
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                nextW();
                $correctSound.pause();
            }, 2000);
        }
    }
    if (e.target.textContent == "j") {
        acceptedPoints++
        correctCounterFiz++;
        $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
        e.target.classList.add("hoverVerde");
        $wrongSound.pause();
        $correctSound.play();
        setTimeout(() => {
            e.target.classList.remove("hoverVerde");
            nextJ();
            $correctSound.pause();
        }, 2000);
    }

});

//Evento click para Repetir la letra nuevamente.
$repeatDictation.addEventListener("click", (e) => {
    switch (localStorage.getItem("letter")) {
        case "p":
            voiceExercise("p");
            break;
        case "v":
            voiceExercise("v");
            break;
        case "w":
            voiceExercise("w");
            break;
        case "j":
            voiceExercise("j");
            break;
        default:
            break;
    }
});


//En esta ocasión pude implementar la lección número cinco para los niños que saben leer. Att: Yaneri Perdomo

