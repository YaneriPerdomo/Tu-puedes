 
 import { _1_3, $countDownBody} from "../../auxiliares/windowModal3_1.js";

//Variables
let $dataWrong = document.querySelector("[data-wrong]");
let $wrongSound = document.querySelector(".wrongSound");
let $correctSound = document.querySelector(".correctSound");
let $tableContainer = document.querySelector(".tableContainer");
let $starNumber = document.querySelector(".start");
let $progressBar = document.querySelector(".progress-bar");
let incorrectCounter = 0;
let $tableContainer_2 = document.querySelector(".tableContainer_2");
let $tableContainer_3 = document.querySelector(".tableContainer_3")
let $tresEjercicio = document.querySelector(".tresEjercicio")
let $letterSound = document.querySelector(".letterSound");
let $intentosNumber = document.querySelectorAll(".intentos > .number");
let $intento = document.querySelector(".intentos")
let $twoEjercicio = document.querySelector(".twoEjercicio");
let $paragrahMessenger = document.querySelector(".messengerInformation > p");
let $intentoText = document.querySelector(".intentoText")

let $span = document.querySelectorAll(".tableContainer_2 > button");
let $span_2 = document.querySelectorAll(".tableContainer_3 > button");
//Contadores.
//Ejercicio numero uno 
let correctCounter = 0;
let ErrorCounter = 0;
let acceptedPoints = 0;
let totalTimes = 0;

const CountdownNext = document.querySelector(".countDownNext");


let randomNumber = 0;
let intentos = 3;
let count = 0;
let countTotal = 0;
let _1_3_text = document.querySelector(".text_1_3");
let $spanLetter = document.querySelectorAll(".tableContainer > button");
let $repeatDictation = document.querySelector(".repeatDictation");

//nuevo
let $colButton = document.querySelectorAll(".colButton > button")

let $ceroIntentos = document.querySelector(".ceroIntentos")
let $endLeccion = document.querySelector(".endLeccion");
let $sonidoSiguiente = document.querySelector(".sonidoSiguiente")
document.addEventListener("mousemove", (e) => {
    if (e.target.matches(".colButton > button")) {
        try {
            $letterSound.play();
        } catch (error) {
            alert("error");
        }
    }
});


function correctWords(urlImg, words, correctWord) {
    totalTimes++
    console.log(totalTimes)
    let $img = document.querySelector("figure > img");
    $img.src = `../../../../img/player/${urlImg}.png`;
    for (let i = words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [words[i], words[j]] = [words[j], words[i]];
    }
    for (let i = 0; i < $colButton.length; i++) {
        $colButton[i].innerHTML = words[i]
    }
    return $tableContainer.setAttribute("data-correct-word", `${correctWord}`)
}
let point = ["piscina", "picina", "pisicina"];
correctWords("piscina", [...point], "piscina");



document.addEventListener("click", e => {

    
    if (e.target.matches(".siguiente")) {
        let $last = document.querySelector(".last");
        let $first = document.querySelector(".first");
        $first.style.display = "none";
        $last.classList.add("animationBounceOut");
        $last.removeAttribute("style");
        $sonidoSiguiente.play()
    }

    if(e.target.matches(".btnContinua")){
        $sonidoSiguiente.play()        
    }

    if (e.target.matches(".colButton > button")) {
        if (e.target.textContent == $tableContainer.getAttribute("data-correct-word")) {
            acceptedPoints++;
            $wrongSound.pause();
            correctCounter++;
            $correctSound.play();
            $intentosNumber[0].textContent = 3;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.classList.add("hoverVerde")
            $colButton.forEach(e => {
                if (e.textContent.length > 0) {
                    e.disabled = true
                }
            })
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }

            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                $colButton.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.removeAttribute("disabled");
                        defineNextWords()
                    }
                })
            }, 2000);
        } else {
            $intentosNumber[0].textContent = parseInt($intentosNumber[0].textContent) - 1;
            ErrorCounter++;
            $wrongSound.play();
            e.target.classList.add("hoverRed");
            $colButton.forEach(el => {
                el.disabled = true
            })
            setTimeout(() => {
                e.target.classList.remove("hoverRed");
                $colButton.forEach(e => {
                    e.removeAttribute("disabled")
                })
            }, 2000);
            if ($intentosNumber[0].textContent == 1) {
                $intentoText.innerHTML = "Intento:"
            }
            if ($intentosNumber[0].textContent == 0) {
                $colButton.forEach(e => {
                    e.disabled = true;
                    e.classList.add("hoverRed");
                })
                $intento.classList.add("swing");
                $ceroIntentos.play()
                setTimeout(() => {
                    $colButton.forEach(e => {
                        e.classList.remove("hoverRed");
                        e.removeAttribute("disabled")
                    })
                    $intento.classList.remove("swing")
                    defineNextWords()
                }, 2000);
            }
    
        }
    }
})

function defineNextWords() {
    $intentosNumber[0].textContent = 3;
    $intentoText.innerHTML = "Intento:"
    switch ($tableContainer.getAttribute("data-next")) {
        case "0":
            randomNumber = Math.floor(Math.random() * 11);
            point = ["camiseta", "casimeta", "catisema"];
            correctWords("camiseta", [...point], "camiseta");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "1":
            randomNumber = Math.floor(Math.random() * 11);
            point = ["piscina", "picina", "pisicina"];
            correctWords("piscina", [...point], "piscina");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "2":
            randomNumber = Math.floor(Math.random() * 11);
            point = ["casa", "zala", "sala"];
            correctWords("casa", [...point], "casa");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "3":
            randomNumber = Math.floor(Math.random() * 11);
            point = ["pendiente", "pediente", "pendeinte"];
            correctWords("pendiente", [...point], "pendiente");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "4":
            randomNumber = Math.floor(Math.random() * 11);
            point = ["piena", "pierna", "piema"];
            correctWords("pierna", [...point], "pierna");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "5":
            randomNumber = Math.floor(Math.random() * 11);
            point = ["helicóptero", "helicótero", "helicopetero"];
            correctWords("helicóptero", [...point], "helicóptero");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "6":
            randomNumber = Math.floor(Math.random() * 11);
            point = ["melocotón", "melocóton", "metocoton"];
            correctWords("melocotón", [...point], "melocotón");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;

        case "7":
            randomNumber = Math.floor(Math.random() * 11);
            point = ["manzana", "manaza", "mazana"];
            correctWords("manzana", [...point], "manzana");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "8":
            randomNumber = Math.floor(Math.random() * 11);
            point = ["hucaran", "huarcán", "huracán"];
            correctWords("huracán", [...point], "huracán");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "9":
            randomNumber = Math.floor(Math.random() * 11);
            point = ["muerciegalo", "muerciegalo", "murciégalo"];
            correctWords("murciégalo", [...point], "murciégalo");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "10":
            randomNumber = Math.floor(Math.random() * 11);
            point = ["vaca", "baca", "vala"];
            correctWords("vaca", [...point], "vaca")
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "11":
            randomNumber = Math.floor(Math.random() * 11);
            point = ["adrazo", "abraso", "abrazo"];
            correctWords("abrazo", [...point], "abrazo")
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        default:
            break;
    }
}

//El inicio de todo 
setTimeout(() => {
    let $main = document.querySelector("main");
    $main.removeChild($main.children[10]);
    setTimeout(async () => {
        $countDownBody.removeAttribute("style");
        _1_3();
        let texto = `Señala, de las tres propuestas, cuál es la correcta.`;
        const hablar = (texto) =>
            speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
            hablar(texto);
        setTimeout(() => {
            temporizador()
        }, 3000);
        setTimeout(() => {
            let $messengerInformation = document.querySelector(
                ".messengerInformation"
            );
            $messengerInformation.removeAttribute("style");
            $messengerInformation.classList.add("AnimationMessengerInformation");
        }, 4000);
    }, 0);
}, 1500);
 

async function temporizador() {
    let $segMin = document.querySelector(".seg-min")
    let countForNext = 59;
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
            End_Game();
            $endLeccion.play()
        }
    }, 1000);
}

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
    } else {
        $percentage.innerHTML = formula + "%";
        $motivationalMessage.innerHTML = "¡Oh, Bastante bien!";
    } 
    console.info(incorrectCounter);
    $containerResults.removeAttribute("style");
    await fetch("/api/complete_lesson.php", {
        method: "POST",
        body: JSON.stringify({
            lesson_id: 19,
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
        if (correctCounter == 0) {
            $correctFailed.innerHTML = `Has acertado ${correctCounter} veces y no has cometido ningún error.`;
        } else if (correctCounter == 1) {
            $correctFailed.innerHTML = `Has acertado ${correctCounter} veces y has fallado solo una vez.`;
        } else {
            $correctFailed.innerHTML = `Has acertado ${correctCounter} veces y has fallado ${ErrorCounter} veces.`;
        }
    })
    .catch((error)=> {
        console.error("Error:", error);
        alert("Ha ocurrido un error al enviar los datos al servidor.");
    });
}