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

//Contadores para determinar cuantas veces el niño ha acertado correctamente.
let correctCounterd = 0;
let correctCounterl = 0;
let correctCounterq = 0;
let correctCountern = 0;
let acceptedPoints = 0;
let totalTimes = 0;
let randomNumber = 0;
let $buttonLetter = document.querySelectorAll(".tableContainer > button");
let $countDownBody = document.querySelector(".countDownBody");
let $repeatDictation = document.querySelector(".repeatDictation");

//Variables de audios
let $endLeccion = document.querySelector(".endLeccion");
let $sonidoSiguiente = document.querySelector(".sonidoSiguiente")
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
        $sonidoSiguiente.play()
    }

    if (e.target.matches(".cuidado")) {
        let texto = ` ¡Cuidado! ¿Vas a abandonar tu lección y perderás todo el progreso? ¿Estás seguro de que quieres abandonar? `;
        const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
        return hablar(texto);
    }

    if (e.target.matches(".tableContainer > button")) {
        if (e.target.textContent == $tableLetter.getAttribute("data-letter")) {
            acceptedPoints++;
            switch ($tableLetter.getAttribute("data-letter")) {
                case "d":
                    correctCounterd++;
                    break;
                case "l":
                    correctCounterl++;
                    break;
                case "q":
                    correctCounterq++;
                    break;
                case "n":
                    correctCountern++;
                    break;
                default:
                    break;
            }
            
            // increase stars numbers
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            
            // mark as correct key
            e.target.classList.add("hoverVerde");
            
            // lock buttons
            $buttonLetter.forEach(e => {
                e.disabled = true
            });
            
            // quit mistake sound
            $wrongSound.pause();
            
            // play assertion sound
            $correctSound.play();
            
            // if the progress bar is not full, increase it by 2%
            if (parseInt($progressBar.textContent) <= 100) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }

            // timeout to pass next challenge in 2 seconds
            setTimeout(() => {
                // remove green market
                e.target.classList.remove("hoverVerde");
                
                // unlock buttons
                $buttonLetter.forEach(e => {
                    e.removeAttribute("disabled")
                });

                // mix letters
                Define_Next_Letter();
                
                // stops sound
                $correctSound.pause();
            }, 2000);
        } else {
            $buttonLetter.forEach((letter) => {
                if (letter.textContent === $tableLetter.getAttribute("data-letter")) {
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
            switch ($tableLetter.getAttribute("data-letter")) {
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
    switch ($tableLetter.getAttribute("data-letter")) {
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
    randomNumber = Math.floor(Math.random() * 11);
    defineLetter("b", "d", randomNumber);
}

function Next_il() {
    randomNumber = Math.floor(Math.random() * 11);
    defineLetter("i", "l", randomNumber);
}

function Next_qp() {
    randomNumber = Math.floor(Math.random() * 11);
    defineLetter("p", "q", randomNumber);
}

function Next_mn() {
    randomNumber = Math.floor(Math.random() * 11);
    defineLetter("m", "n", randomNumber);
}

//Funcion principal para cambiarla.
function Define_Next_Letter() {
    switch ($tableLetter.getAttribute("data-letter")) {
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
        contador++;
        if (number == contador) {
            $button[i].innerHTML = `${winningLetter}`;
            continue;
        }
        $button[i].innerHTML = `${similarLetter}`;
    }

    let use = false
    for(let i = 0; i < $button.length; i++){
        if($button[i].textContent == $tableLetter.getAttribute("data-letter")){
            use = true
            break;
        }else{
            use = false
        }
    }

    if(use === false){
        $button[0].innerHTML = $tableLetter.getAttribute("data-letter");
    }

    return true;
}

function voiceExercise(winningLetter) {
    let texto = `Encuentra la letra, ${winningLetter}.`;
    const hablar = (texto) =>
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    return hablar(texto);
}

//Estas funciones determinan el tiempo de espera para pasar a la siguiente búsqueda de dicha letra.
async function countDownB() {
    await $tableLetter.setAttribute("data-letter", "d")
    const CountdownNext = document.querySelector(".countDownNext");
    setTimeout(() => {
        let countForNext = 40;
        let countdown = setInterval(() => {
            countForNext--;
            CountdownNext.textContent = countForNext;
            if (countForNext <= 0) {
                clearInterval(countdown);
                countDownL();
            }
        }, 1000);
    }, 3000);
}
countDownB();
async function countDownL() {
    $progressBar.innerHTML = "30%";
    $progressBar.style.width = "30%";
    $progressBar.style.background = "#ff7d3f";
    await $tableLetter.setAttribute("data-letter", "l")
    _1_3();
    voiceExercise("l");
    defineLetter("i", "l", Math.floor(Math.random() * 11));
    const CountdownNext = document.querySelector(".countDownNext");
    setTimeout(() => {
        let countForNext = 35;
        let countdown = setInterval(() => {
            countForNext--;
            CountdownNext.textContent = countForNext;
            if (countForNext <= 0) {
                clearInterval(countdown);
                Count_Down_Q();
            }
        }, 1000);
    }, 3000);
}
async function Count_Down_Q() {
    await $tableLetter.setAttribute("data-letter", "q")
    $progressBar.innerHTML = "50%";
    $progressBar.style.width = "50%";
    $progressBar.style.background = "#ff7d3f";
    _1_3();
    voiceExercise("q");
    defineLetter("p", "q", Math.floor(Math.random() * 11));
    const CountdownNext = document.querySelector(".countDownNext");
    let countForNext = 40;
    setTimeout(() => {
        let countdown = setInterval(() => {
            countForNext--;
            CountdownNext.textContent = countForNext;
            if (countForNext <= 0) {
                clearInterval(countdown);
                Count_Down_N();
            }
        }, 1000);
    }, 3000);
}
async function Count_Down_N() {
    await $tableLetter.setAttribute("data-letter", "n")
    $progressBar.innerHTML = "70%";
    $progressBar.style.width = "70%";
    $progressBar.style.background = "#ff7d3f";
    _1_3();
    voiceExercise("n");
    defineLetter("m", "n", Math.floor(Math.random() * 11));
    const CountdownNext = document.querySelector(".countDownNext");
    setTimeout(() => {
        let countForNext = 40;
        let countdown = setInterval(() => {
            countForNext--;
            CountdownNext.textContent = countForNext;
            if (countForNext === 0) {
                clearInterval(countdown);
                End_Game().then(()=>$endLeccion.play());
            }
        }, 1000);
    }, 3000);
}

//Funcion para terminar la leccion.
async function End_Game() {
    // set progress bar
    $progressBar.innerHTML = "100%";
    $progressBar.style.width = "100%";

    // getting container results
    let $containerResults = document.querySelector(".containerResults");
    
    // getting stars
    let $totalStar = document.querySelector(".totalStar");
    
    // getting motivational message
    let $motivationalMessage = document.querySelector(".motivationalMessage");
    
    // getting percentage component
    let $percentage = document.querySelector(".percentage");
    
    // getting assertions results
    let $correctFailedB = document.querySelector(".correctFailedB");
    let $correctFailedL = document.querySelector(".correctFailedL");
    let $correctFailedQ = document.querySelector(".correctFailedQ");
    let $correctFailedN = document.querySelector(".correctFailedN");
    
    // setting starts numbers
    $totalStar.innerHTML = $starNumber.textContent;
    
    let formula = Math.round((acceptedPoints / totalTimes) * 100)
    
    // 
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
            lesson_id: 1,
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
        // if there was no errors with b
        if (countb == 0) {
            $correctFailedB.innerHTML = `¡Enhorabuena! Has acertado ${correctCounterd} veces y no has cometido ningún error.`;
        // if there was one error with b
        } else if (countb == 1) {
            $correctFailedB.innerHTML = `¡Buen Trabajo! Has acertado ${correctCounterd} veces y has fallado solo una vez.`;
        // if there was more than one error
        } else {
            $correctFailedB.innerHTML = `Has acertado ${correctCounterd} veces y has fallado ${countb} veces.`;
        }
    
        // if there was no errors with l
        if (counti == 0) {
            $correctFailedL.innerHTML = `¡Enhorabuena! Has acertado ${correctCounterl} veces y no has cometido ningún error.`;
        // if there was one error with l
        } else if (counti == 1) {
            $correctFailedL.innerHTML = `¡Buen Trabajo! Has acertado ${correctCounterl} veces y has fallado solo una vez.`;
        // if there was more than one error
        } else {
            $correctFailedL.innerHTML = `Has acertado ${correctCounterl} veces y has fallado ${counti} veces.`;
        }
    
        // if there was no errors with q
        if (countp == 0) {
            $correctFailedQ.innerHTML = `¡Enhorabuena! Has acertado ${correctCounterq} veces y no has cometido ningún error.`;
        // if there was one error with q
        } else if (countp == 1) {
            $correctFailedQ.innerHTML = `¡Buen Trabajo! Has acertado ${correctCounterq} veces y has fallado solo una vez.`;
        // if there was more than one error
        } else {
            $correctFailedQ.innerHTML = `Has acertado ${correctCounterq} veces y has fallado ${countp} veces.`;
        }
    
        // if there was no errors with n
        if (countm == 0) {
            $correctFailedN.innerHTML = `¡Enhorabuena! Has acertado ${correctCountern} veces y no has cometido ningún error.`;
        // if there was one error with n
        } else if (countm == 1) {
            $correctFailedN.innerHTML = `¡Buen Trabajo! Has acertado ${correctCountern} veces y has fallado solo una vez.`;
        // if there was more than one error
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
    $main.removeChild($main.children[10]);
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
            }, 2000);
        },2000);
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
