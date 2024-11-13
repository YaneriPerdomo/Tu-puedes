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
let countt = 0;
let countw = 0;
let countf = 0;
let countm = 0;
let acceptedPoints = 0;
let totalTimes = 0;

//Contadores para determinar cuantas veces el niño ha acertado correctamente.
let correctCountert = 0;
let correctCounterw = 0;
let correctCounterf = 0;
let correctCountern = 0;
let randomNumber = 0;
let $buttonLetter = document.querySelectorAll(".tableContainer > button");
let $countDownBody = document.querySelector(".countDownBody");
let $repeatDictation = document.querySelector(".repeatDictation");

//FUNCIONES//
//Estas funciones se utilizan para cambiar la posición de la letra mencionada por localStorage.
function Next_tj() {
    switch ($tableLetter.getAttribute("data-next")) {
        case "0":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("spanNumber", randomNumber);
            defineLetter("j", "t", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "1":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("buttonNumber", randomNumber);
            defineLetter("j", "t", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "2":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("buttonNumber", randomNumber);
            defineLetter("j", "t", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "3":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("buttonNumber", randomNumber);
            defineLetter("j", "t", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "4":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("buttonNumber", randomNumber);
            defineLetter("j", "t", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "5":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("buttonNumber", randomNumber);
            defineLetter("j", "t", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "6":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("buttonNumber", randomNumber);
            defineLetter("j", "t", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "7":
            randomNumber = Math.floor(Math.random() * 72);
            localStorage.setItem("buttonNumber", randomNumber);
            defineLetter("j", "t", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "8":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("j", "t", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "9":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("j", "t", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "10":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("j", "t", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "11":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("j", "t", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "12":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("j", "t", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "13":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("j", "t", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "14":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("j", "t", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "15":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("j", "t", randomNumber);
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
function Next_wu() {
    switch ($tableLetter.getAttribute("data-next")) {
        case "0":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("u", "w", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "1":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("u", "w", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "2":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("u", "w", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "3":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("u", "w", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "4":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("u", "w", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "5":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("u", "w", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "6":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("u", "w", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "7":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("u", "w", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "8":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("u", "w", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "9":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("u", "w", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "10":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("u", "w", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "11":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("u", "w", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "12":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("u", "w", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "13":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("u", "w", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "14":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("u", "w", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "15":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("u", "w", randomNumber);
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
function Next_fk() {
    switch ($tableLetter.getAttribute("data-next")) {
        case "0":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("k", "f", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "1":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("k", "f", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "2":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("k", "f", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "3":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("k", "f", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "4":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("k", "f", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "5":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("k", "f", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "6":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("k", "f", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "7":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("k", "f", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "8":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("k", "f", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "9":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("k", "f", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "10":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("k", "f", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "11":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("k", "f", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "12":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("k", "f", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "13":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("k", "f", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "14":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("k", "f", randomNumber);
            localStorage.setItem("buttonNumber", randomNumber);
            $tableLetter.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 15)}`
            );
            break;
        case "15":
            randomNumber = Math.floor(Math.random() * 72);
            defineLetter("k", "f", randomNumber);
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
//Funcion principal para cambiar la posicion de la letra.
function Define_Next_Letter() {
    switch (localStorage.getItem("letter")) {
        case "t":
            Next_tj();
            break;
        case "w":
            Next_wu();
            break;
        case "f":
            Next_fk();
            break;
        case "m":
            Next_mn();
            break;
        default:
            break;
    }
}

//Estas dos funciones sirven para automatizar la tarea completa de rellenar/establecer la letra de la etiqueta. Como su nombre lo define.
function defineLetter(similarLetter, winningLetter, number) {
    totalTimes++
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

//Función que se ejecuta al inicio de la lección de forma automática.
async function countDownT() {
    await localStorage.setItem("letter", `t`);
    const CountdownNext = document.querySelector(".countDownNext");
    CountdownNext.style.display = "none"
    setTimeout(() => {
        CountdownNext.removeAttribute("style")
    }, 5000);
    let countForNext = 35;
    let countdown = setInterval(() => {
        countForNext--;
        CountdownNext.textContent = countForNext;
        if (countForNext <= 0) {
            clearInterval(countdown);
            countDownW();
        }
    }, 1000);
}
countDownT();
async function countDownW() {
    $progressBar.innerHTML = "30%";
    $progressBar.style.width = "30%";
    $progressBar.style.background = "#ff7d3f";
    await localStorage.setItem("letter", `w`);
    _1_3();
    voiceExercise("w");
    defineLetter("u", "w", Math.floor(Math.random() * 72));
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
            Count_Down_F();
        }
    }, 1000);
}
async function Count_Down_F() {
    await localStorage.setItem("letter", `f`);
    $progressBar.innerHTML = "50%";
    $progressBar.style.width = "50%";
    $progressBar.style.background = "#ff7d3f";
    _1_3();
    voiceExercise("f");
    defineLetter("k", "f", Math.floor(Math.random() * 72));
    const CountdownNext = document.querySelector(".countDownNext");
    CountdownNext.style.display = "none"
    setTimeout(() => {
        CountdownNext.removeAttribute("style")
    }, 3000);
    let countForNext = 50;
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
    let countForNext = 60;
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
    let $correctFailedT = document.querySelector(".correctFailedT");
    let $correctFailedW = document.querySelector(".correctFailedW");
    let $correctFailedF = document.querySelector(".correctFailedF");
    let $correctFailedN = document.querySelector(".correctFailedN");
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
            lesson_id: 16,
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
        if (countt == 0) {
            $correctFailedT.innerHTML = `¡Enhorabuena! Has acertado ${correctCountert} veces y no has cometido ningún error.`;
        } else if (countt == 1) {
            $correctFailedT.innerHTML = `¡Buen Trabajo! Has acertado ${correctCountert} veces y has fallado solo una vez.`;
        } else {
            $correctFailedT.innerHTML = `Has acertado ${correctCountert} veces y has fallado ${countt} veces.`;
        }
        if (countw == 0) {
            $correctFailedW.innerHTML = `¡Enhorabuena! Has acertado ${correctCounterw} veces y no has cometido ningún error.`;
        } else if (countw == 1) {
            $correctFailedW.innerHTML = `¡Buen Trabajo! Has acertado ${correctCounterw} veces y has fallado solo una vez.`;
        } else {
            $correctFailedW.innerHTML = `Has acertado ${correctCounterw} veces y has fallado ${countw} veces.`;
        }
        if (countf == 0) {
            $correctFailedF.innerHTML = `¡Enhorabuena! Has acertado ${correctCounterf} veces y no has cometido ningún error.`;
        } else if (countf == 1) {
            $correctFailedF.innerHTML = `¡Buen Trabajo! Has acertado ${correctCounterf} veces y has fallado solo una vez.`;
        } else {
            $correctFailedF.innerHTML = `Has acertado ${correctCounterf} veces y has fallado ${countf} veces.`;
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
//Función que se ejecuta al inicio de la lección de forma automática.
setTimeout(() => {
    let $main = document.querySelector("main");
    $main.removeChild($main.children[7]);
    setTimeout(async () => {
        $countDownBody.removeAttribute("style");
        voiceExercise("t");
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

//Evento para cambiar la posicion de igual manera se estara verificando la cuestion en si.
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
        
        if (e.target.textContent == "t") {
            acceptedPoints++
            correctCountert++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.classList.add("hoverVerde");
            $wrongSound.pause();
            $correctSound.play();
            $buttonLetter.forEach(e => {
                e.disabled = true
            })
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");

                Next_tj();
                $buttonLetter.forEach(e => {
                    e.removeAttribute("disabled");
                })
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
            e.target.classList.add("hoverRed");
            $buttonLetter.forEach(e => {
                e.disabled = true;
            })
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
                case "t":
                    countt++;
                    break;
                case "w":
                    countw++;
                    break;
                case "k":
                    countf++;
                    break;
                case "n":
                    countm++;
                    break;
                default:
                    break;
            }
        }

        if (e.target.textContent == "w") {
            acceptedPoints++
            correctCounterw++;
            $wrongSound.pause();
            $correctSound.play();
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.classList.add("hoverVerde");
            $buttonLetter.forEach(e => {
                e.disabled = true;
            })
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                $buttonLetter.forEach(e => {
                    e.removeAttribute("disabled");
                })
                Next_wu();
            }, 2000);
        }

        if (e.target.textContent == "f") {
            acceptedPoints++
            correctCounterf++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.classList.add("hoverVerde");
            $wrongSound.pause();
            $correctSound.play();
            $buttonLetter.forEach(e => {
                e.disabled = true;
            })
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                Next_fk();
                $buttonLetter.forEach(e => {
                    e.removeAttribute("disabled");
                })
            }, 2000);
        }
        if (e.target.textContent == "n") {
            acceptedPoints++
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
                    e.removeAttribute("disabled");
                })
                Next_mn();
            }, 2000);
        }
    }
});

//Evento para activar el sonido del button cuando
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

//Evento de Repetir el mensaje.
$repeatDictation.addEventListener("click", (e) => {
    switch (localStorage.getItem("letter")) {
        case "t":
            voiceExercise("t");
            break;
        case "w":
            voiceExercise("w");
            break;
        case "f":
            voiceExercise("f");
            break;
        case "n":
            voiceExercise("n");
            break;
        default:
            break;
    }
});

