//Variables
let $dataWrong = document.querySelector("[data-wrong]");
let $wrongSound = document.querySelector(".wrongSound");
let $correctSound = document.querySelector(".correctSound");
let $tableContainer = document.querySelector(".tableContainer");
let $starNumber = document.querySelector(".start");
let $progressBar = document.querySelector(".progress-bar");
let incorrectCounter = 0;
let $letterSound = document.querySelector(".letterSound");
let $intentoText = document.querySelector(".intentoText");
let $paragrahMessenger = document.querySelector(".messengerInformation > p");
//Contadores para determinar cuantas veces el niño ha acertado incorrectamente.
let countfia = 0;
let countdar = 0;
let countque = 0;
let countfiz = 0;
let acceptedPoints = 0;
let totalTimes = 0;
let incorrectSound = 0;

//Contadores para determinar cuantas veces el niño ha acertado correctamente.
let ErrorCounter = 0;
let randomNumber = 0;
let $spanLetter = document.querySelectorAll(".tableContainer > button");
let $countDownBody = document.querySelector(".countDownBody");
let $repeatVerso = document.querySelector(".repeatVerso");
let $soundWineer = document.querySelector(".soundWineer")

let $intentosNumber = document.querySelectorAll(".intentos > .number");
let $intento = document.querySelector(".intentos");
let $ceroIntentos = document.querySelector(".ceroIntentos");
let $SoundAllwrong = document.querySelector(".SoundAllwrong")

//Variables de audios
let $endLeccion = document.querySelector(".endLeccion");
let $sonidoSiguiente = document.querySelector(".sonidoSiguiente");

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
    $main.removeChild($main.children[12]);
    setTimeout(async () => {
        $countDownBody.removeAttribute("style");
        _1_3();
        messengerForUser();
        setTimeout(() => {
            temporizador();
        }, 2500);
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
                    $repeatVerso.classList.add("animationLetter");
                }, 3000);
            }, 2000);
        }, 2000);
    }, 0);
}, 1500);

const CountdownNext = document.querySelector(".countDownNext");

async function temporizador() {
    let $segMin = document.querySelector(".seg-min");
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
            temporizadorSegundaParte();
        }
    }, 1000);
}
function temporizadorSegundaParte() {
    let $segMin = document.querySelector(".seg-min");
    let countForNext = 60;
    let countdown = setInterval(() => {
        countForNext--;
        CountdownNext.textContent = `${countForNext}`;
        if (countForNext <= 0) {
            clearInterval(countdown);
            End_Game();
            $endLeccion.play();
        }
    }, 1000);
}

let $oneButtons = document.querySelectorAll("#one > button");
let $twoButtons = document.querySelectorAll("#two > button");


function defineNext() {
    switch ($tableContainer.getAttribute("data-next")) {
        case "0":
            let one0 = ["ta", "ti", "te","tu"];
            let two0 = ["ta", "te", "ti","to"];
            equalLetters([...one0], [...two0]);
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 10)}`
            );
            break;
        case "1":
            let one1 = ["sol", "sapo", "5","zebra"];
            let two1 = ["5", "sol", "sapo","zebra"];
            equalLetters([...one1], [...two1]);
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 10)}`
            );
            break;
        case "2":
            let one2 = ["oso", "usa", "uva","uno"];
            let two2 = ["uva", "oso", "usa","uno"];
            equalLetters([...one2], [...two2]);
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 10)}`
            );
            break;
        case "3":
            let one3 = ["pote", "pato", "bote", "que"];
            let two3 = ["pato", "pote", "bote","que"];
            equalLetters([...one3], [...two3]);
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 10)}`
            );
            break;
        case "4":
            let one4 = ["sa", "za", "su","5"];
            let two4 = ["su", "zu", "za","5"];
            equalLetters([...one4], [...two4]);
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 10)}`
            );
            break;
        case "5":
            let one5 = ["casa", "kilo", "(","cama"];
            let two5 = ["(", "casa", "kilo","cama"];
            equalLetters([...one5], [...two5]);
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 10)}`
            );
            break;
        case "6":
            let one6 = ["(", "Ç", "C"];
            let two6 = ["C", "Ç", "("];
            equalLetters([...one6], [...two6]);
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 10)}`
            );
            break;
        case "7":
            let one7 = ["p", "q", "b"];
            let two7 = ["b", "q", "p"];
            equalLetters([...one7], [...two7]);
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 10)}`
            );
            break;
        case "8":
            let one8 = ["isla", "hora", "hilo","bote"];
            let two8 = ["isla", "hilo", "hora","bota"];
            equalLetters([...one8], [...two8]);
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 10)}`
            );
            break;
        case "9":
            let one9 = ["8", "1", "3"];
            let two9 = ["8", "3", "1"];
            equalLetters([...one9], [...two9]);
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 10)}`
            );
            break;
        case "10":
            let one10 = ["ala", "foca", "rata"];
            let two10 = ["ala", "rata", "foca"];
            equalLetters([...one10], [...two10]);
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 10)}`
            );
            break;
        default:
            break;
    }
}
function equalLetters(oneButtons, twoButtons) {
    console.info(totalTimes)
    for (let i = 0; i < $oneButtons.length; i++) {
        $oneButtons[i].innerHTML = oneButtons[i];
        $oneButtons[i].removeAttribute("class");
        $oneButtons[i].setAttribute("data-check", "false");
        $twoButtons[i].innerHTML = twoButtons[i];
        $twoButtons[i].removeAttribute("class");
        $twoButtons[i].setAttribute("data-check", "false");
        $twoButtons[i].disabled = true
    }
}

//Esta funcion sirve para determinar el backend mas que todo puesto de que se guardaran las cantidades de estrellas y el porcentaje
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
    let formula = Math.round((acceptedPoints / totalTimes) * 100)
    if (formula == 0) {
        $percentage.innerHTML = formula + "%";
        $motivationalMessage.innerHTML = "Ohh no...";
    }else{
        $percentage.innerHTML = formula + "%";
        $motivationalMessage.innerHTML = "¡Oh, Bastante bien!";
    }
    $containerResults.removeAttribute("style");
    
    await fetch("/api/complete_lesson.php", {
        method: "POST",
        body: JSON.stringify({
            lesson_id: 9,
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


let one = ["tasa", "uva", "viva","una"];
let two = ["viva", "uva", "tasa","una"];
equalLetters([...one], [...two]);
//Funcion que genera la voz de google
function messengerForUser(cuidado) {
    if (cuidado) {
        let texto = `¡Cuidado!. ¿Vas a abandonar tu lección y perderás todo el progreso?. ¿Estás seguro de que quieres abandonar? `;
        const hablar = (texto) =>
            speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
        hablar(texto);
    } else {
        let texto = `Encuentra los elementos iguales. De izquierda a derecha.`;
        const hablar = (texto) =>
            speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
        hablar(texto);
    }
}

let lessonCount = 0;
let correctSound = 0;
document.addEventListener("click", (e) => {
    if (e.target.matches(".cuidado")) {
        messengerForUser(true);
    }

    //Ver las cantidades de estrellas y el porcentaje; pasar a la informacion final
    if (e.target.matches(".siguiente")) {
        let $last = document.querySelector(".last");
        let $first = document.querySelector(".first");
        $first.style.display = "none";
        $last.classList.add("animationBounceOut");
        $last.removeAttribute("style");
        $sonidoSiguiente.play();
    }

    //Repetir lo que el usuario tiene que hacer
    if (e.target.matches(".repeatVerso")) {
        messengerForUser(false);
    }

    if (e.target.matches("#one > button")) {
        e.target.classList.add("wait");
        e.target.setAttribute("data-check", "wait");
        $oneButtons.forEach((e) => {
            e.disabled = true;
            if (
                e.getAttribute("data-check") !== "wait" &&
                e.classList.contains("hoverVerde") == false &&
                e.classList.contains("hoverRed") == false
            ) {
                e.style.filter = "grayscale(100%)";
            }
        });
        $twoButtons.forEach((e) => {
            e.removeAttribute("disabled");
        });
    }
    if (e.target.matches("#two > button")) {
     
        $oneButtons.forEach((el) => {
            if (el.getAttribute("data-check") == "wait") {
                totalTimes++;
                if (el.textContent == e.target.textContent) {
                    console.log("muy bien");
                    lessonCount++;
                    correctSound++;
                    acceptedPoints++;
                    $wrongSound.pause();
                    $correctSound.play();
                    $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)
                        }`;
                    e.target.classList.add("hoverVerde");
                    el.classList.add("hoverVerde");
                    if (parseInt($progressBar.textContent) < 101) {
                        $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2
                            }%`;
                        $progressBar.style.width = `${parseInt($progressBar.textContent) + 2
                            }%`;
                    }
                    $oneButtons.forEach((e) => {
                        e.disabled = true;
                    });
                    $twoButtons.forEach((e) => {
                        e.disabled = true;
                    });
                    setTimeout(() => {
                        $oneButtons.forEach((e) => {
                            e.removeAttribute("disabled");
                        });
                        $twoButtons.forEach((e) => {
                            e.removeAttribute("disabled");
                        });
                    }, 2000);
                } else {
                    ErrorCounter++;
                    lessonCount++;
                    incorrectSound++;
                    console.info("muy mal");
                    $wrongSound.play();
                    $correctSound.pause();
                    e.target.classList.add("hoverRed");
                    el.classList.add("hoverRed");
                    $oneButtons.forEach((e) => {
                        e.disabled = true;
                    });
                    $twoButtons.forEach((e) => {
                        e.disabled = true;
                    });
                    setTimeout(() => {
                        $oneButtons.forEach((e) => {
                            e.removeAttribute("disabled");
                        });
                        $twoButtons.forEach((e) => {
                            e.removeAttribute("disabled");
                        });
                    }, 2000);
                }
                el.setAttribute("data-check", "true");
            }
        });
        e.target.setAttribute("data-check", "true");
        $oneButtons.forEach((e) => {
            e.removeAttribute("disabled");
            e.removeAttribute("style");
        });

        $twoButtons.forEach((e) => {
            e.disabled = true;
        });
        console.info(lessonCount)
        if (lessonCount == 4) {
            $oneButtons.forEach((e) => {
                e.disabled = true;
            });
            $twoButtons.forEach((e) => {
                e.disabled = true;
            });
            setTimeout(() => {
                $oneButtons.forEach((e) => {
                    e.removeAttribute("disabled");
                });
                $twoButtons.forEach((e) => {
                    e.removeAttribute("disabled");
                });
                defineNext()
                lessonCount = 0;
            }, 2000);
        }
    }
});

//Este es un evento del mouse y se activa el sonido cuando el mouse está sobre el botón.
document.addEventListener("mousemove", (e) => {
    if (e.target.matches(".colButton > button")) {
        $letterSound.play();
    }
});
