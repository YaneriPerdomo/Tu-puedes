import { _1_3, $countDownBody } from "../../auxiliares/windowModal3_1.js";

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

setTimeout(() => {
    let $main = document.querySelector("main");
    $main.removeChild($main.children[10]);
    setTimeout(async () => {
        $countDownBody.removeAttribute("style");
        _1_3();
        let texto = `Indica, cuál es la letra incorrecta`;
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
            lesson_id: 25,
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
async function temporizador() {
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
            End_Game();
            $endLeccion.play()
        }
    }, 1000);
}

function IncorrectWords(urlImg, words, incorrectWord) {
    
    let $img = document.querySelector("figure > img");
    $img.src = `../../../../img/player/${urlImg}.png`;
    for (let i = words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [words[i], words[j]] = [words[j], words[i]];
    }
    for (let i = 0; i < $colButton.length; i++) {
        $colButton[i].innerHTML = words[i]
    }
    localStorage.setItem("wordIncorrect", incorrectWord)
    return $tableContainer.setAttribute("data-correct-word", `${incorrectWord}`)
}
let points = ["piscina", "picina"];
IncorrectWords("piscina", [...points], "picina");


document.addEventListener("DOMContentLoaded", e => {
    if (localStorage.getItem("wordIncorrect") === null) {
        localStorage.setItem("wordIncorrect", null);
    }
})

document.addEventListener("click", e => {


    if (e.target.matches(".siguiente")) {
        let $last = document.querySelector(".last");
        let $first = document.querySelector(".first");
        $first.style.display = "none";
        $last.classList.add("animationBounceOut");
        $last.removeAttribute("style");
        $sonidoSiguiente.play()
    }

    if (e.target.matches(".colButton > button")) {
        totalTimes++ 
        if (e.target.textContent == "picina") {
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            acceptedPoints++            
            e.target.classList.add("hoverVerde");
            correctCounter++;
            $wrongSound.pause();
            $correctSound.play();
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }

            $colButton.forEach(e => {
                e.disabled = true
            })
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                $colButton.forEach(e => {
                    e.removeAttribute("disabled");
                    defineNextWords()
                })
                $correctSound.pause();
            }, 2000);
        } else {
            ErrorCounter++;
            e.target.classList.add("hoverRed");
            $wrongSound.play();
            $colButton.forEach((letter) => {
                if (letter.textContent === localStorage.getItem("wordIncorrect")) {
                    letter.classList.add("hoverVerde");
                    setTimeout(() => {
                        e.target.classList.remove("hoverRed");
                        letter.classList.remove("hoverVerde");
                        defineNextWords();
                    }, 2000);
                }
            })
        }
        if (e.target.textContent == "totuga") {
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            acceptedPoints++            
            e.target.classList.add("hoverVerde");
            $wrongSound.pause();
            correctCounter++;
            $correctSound.play();
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }
            $colButton.forEach(e => {
                e.disabled = true
            })
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                $colButton.forEach(e => {
                    e.removeAttribute("disabled");
                    defineNextWords()
                })
                $correctSound.pause();
            }, 2000);
        }
        if (e.target.textContent == "activida") {
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            acceptedPoints++            
            e.target.classList.add("hoverVerde");
            $wrongSound.pause();
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }
            correctCounter++;
            $correctSound.play();
            $colButton.forEach(e => {
                e.disabled = true
            })
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                $colButton.forEach(e => {
                    e.removeAttribute("disabled");
                    defineNextWords()
                })
                $correctSound.pause();
            }, 2000);
        }
        if (e.target.textContent == "danana") {
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            acceptedPoints++            
            e.target.classList.add("hoverVerde");
            $wrongSound.pause();
            correctCounter++;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }
            $correctSound.play();
            $colButton.forEach(e => {
                e.disabled = true
            })
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                $colButton.forEach(e => {
                    e.removeAttribute("disabled");
                    defineNextWords()
                })
                $correctSound.pause();
            }, 2000);
        }
        if (e.target.textContent == "belo") {
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            acceptedPoints++            
            e.target.classList.add("hoverVerde");
            correctCounter++;
            $wrongSound.pause();
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }
            $correctSound.play();
            $colButton.forEach(e => {
                e.disabled = true
            })
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                $colButton.forEach(e => {
                    e.removeAttribute("disabled");
                    defineNextWords()
                })
                $correctSound.pause();
            }, 2000);
        }
        if (e.target.textContent == "naraja") {
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            acceptedPoints++            
            e.target.classList.add("hoverVerde");
            $wrongSound.pause();
            correctCounter++;
            $correctSound.play();
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }
            $colButton.forEach(e => {
                e.disabled = true
            })
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                $colButton.forEach(e => {
                    e.removeAttribute("disabled");
                    defineNextWords()
                })
                $correctSound.pause();
            }, 2000);
        }
        if (e.target.textContent == "nude") {
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            acceptedPoints++            
            e.target.classList.add("hoverVerde");
            $wrongSound.pause();
            correctCounter++;
            $correctSound.play();
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }
            $colButton.forEach(e => {
                e.disabled = true
            })
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                $colButton.forEach(e => {
                    e.removeAttribute("disabled");
                    defineNextWords()
                })
                $correctSound.pause();
            }, 2000);
        }
        if (e.target.textContent == "tihda") {
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            acceptedPoints++            
            e.target.classList.add("hoverVerde");
            $wrongSound.pause();
            $correctSound.play();
            correctCounter++;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }
            $colButton.forEach(e => {
                e.disabled = true
            })
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                $colButton.forEach(e => {
                    e.removeAttribute("disabled");
                    defineNextWords()
                })
                $correctSound.pause();
            }, 2000);
        }
        if (e.target.textContent == "ormiga") {
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            acceptedPoints++            
            e.target.classList.add("hoverVerde");
            $wrongSound.pause();
            $correctSound.play();
            correctCounter++;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }
            $colButton.forEach(e => {
                e.disabled = true
            })
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                $colButton.forEach(e => {
                    e.removeAttribute("disabled");
                    defineNextWords()
                })
                $correctSound.pause();
            }, 2000);
        }
        if (e.target.textContent == "lɐpiz") {
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            acceptedPoints++            
            e.target.classList.add("hoverVerde");
            $wrongSound.pause();
            $correctSound.play();
            correctCounter++;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }
            $colButton.forEach(e => {
                e.disabled = true
            })
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                $colButton.forEach(e => {
                    e.removeAttribute("disabled");
                    defineNextWords()
                })
                $correctSound.pause();
            }, 2000);
        }
        if (e.target.textContent == "cocodilo") {
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            acceptedPoints++            
            e.target.classList.add("hoverVerde");
            $wrongSound.pause();
            $correctSound.play();
            correctCounter++;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }
            $colButton.forEach(e => {
                e.disabled = true
            })
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                $colButton.forEach(e => {
                    e.removeAttribute("disabled");
                    defineNextWords()
                })
                $correctSound.pause();
            }, 2000);
        }
        if (e.target.textContent == "chet") {
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            acceptedPoints++            
            e.target.classList.add("hoverVerde");
            $wrongSound.pause();
            $correctSound.play();
            correctCounter++;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }
            $colButton.forEach(e => {
                e.disabled = true
            })
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                $colButton.forEach(e => {
                    e.removeAttribute("disabled");
                    defineNextWords()
                })
                $correctSound.pause();
            }, 2000);
        }
        if (e.target.textContent == "saleco") {
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            acceptedPoints++            
            e.target.classList.add("hoverVerde");
            $wrongSound.pause();
            $correctSound.play();
            correctCounter++;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }
            $colButton.forEach(e => {
                e.disabled = true
            })
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                $colButton.forEach(e => {
                    e.removeAttribute("disabled");
                    defineNextWords()
                })
                $correctSound.pause();
            }, 2000);
        }
        if (e.target.textContent == "cinturóm") {
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            acceptedPoints++           
            e.target.classList.add("hoverVerde");
            $wrongSound.pause();
            $correctSound.play();
            correctCounter++;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }
            $colButton.forEach(e => {
                e.disabled = true
            })
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                $colButton.forEach(e => {
                    e.removeAttribute("disabled");
                    defineNextWords()
                })
                $correctSound.pause();
            }, 2000);
        }
        if (e.target.textContent == "rinocironte") {
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            acceptedPoints++            
            e.target.classList.add("hoverVerde");
            $wrongSound.pause();
            correctCounter++;
            $correctSound.play();
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }
            $colButton.forEach(e => {
                e.disabled = true
            })
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                $colButton.forEach(e => {
                    e.removeAttribute("disabled");
                    defineNextWords()
                })
                $correctSound.pause();
            }, 2000);
        }
        if (e.target.textContent == "uava") {
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            acceptedPoints++            
            e.target.classList.add("hoverVerde");
            $wrongSound.pause();
            $correctSound.play();
            correctCounter++;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }
            $colButton.forEach(e => {
                e.disabled = true
            })
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                $colButton.forEach(e => {
                    e.removeAttribute("disabled");
                    defineNextWords()
                })
                $correctSound.pause();
            }, 2000);
        }
        if (e.target.textContent == "propueta") {
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            acceptedPoints++            
            e.target.classList.add("hoverVerde");
            $wrongSound.pause();
            $correctSound.play();
            correctCounter++;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }
            $colButton.forEach(e => {
                e.disabled = true
            })
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                $colButton.forEach(e => {
                    e.removeAttribute("disabled");
                    defineNextWords()
                })
                $correctSound.pause();
            }, 2000);
        }
        if (e.target.textContent == "kasa") {
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            acceptedPoints++            
            e.target.classList.add("hoverVerde");
            $wrongSound.pause();
            correctCounter++;
            $correctSound.play();
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }
            $colButton.forEach(e => {
                e.disabled = true
            })
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                $colButton.forEach(e => {
                    e.removeAttribute("disabled");
                    defineNextWords()
                })
                $correctSound.pause();
            }, 2000);
        }
        if (e.target.textContent == "camieta") {
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            acceptedPoints++;            
            e.target.classList.add("hoverVerde");
            $wrongSound.pause();
            correctCounter++;
            $correctSound.play();
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }
            $colButton.forEach(e => {
                e.disabled = true
            })
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                $colButton.forEach(e => {
                    e.removeAttribute("disabled");
                    defineNextWords()
                })
                $correctSound.pause();
            }, 2000);
        }
    }
})

function defineNextWords() {
    switch ($tableContainer.getAttribute("data-next")) {
        case "0":
            randomNumber = Math.floor(Math.random() * 15);
            points = ["piscina", "picina"];
            IncorrectWords("piscina", [...points], "picina");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "1":
            randomNumber = Math.floor(Math.random() * 15);

            points = ["tortuga", "totuga"];
            IncorrectWords("tortuga", [...points], "totuga");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "2":
            randomNumber = Math.floor(Math.random() * 15);

            points = ["actividad", "activida"];
            IncorrectWords("actividad", [...points], "activida");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "3":
            randomNumber = Math.floor(Math.random() * 15);
            points = ["danana", "banana"];
            IncorrectWords("banana", [...points], "danana");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "4":
            randomNumber = Math.floor(Math.random() * 15);
            points = ["pelo", "belo"];
            IncorrectWords("pelo", [...points], "belo");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "5":
            randomNumber = Math.floor(Math.random() * 15);
            points = ["naranja", "naraja"];
            IncorrectWords("naranja", [...points], "naraja");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "6":
            randomNumber = Math.floor(Math.random() * 15);
            points = ["nube", "nude"];
            IncorrectWords("nube", [...points], "nude");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;

        case "7":
            randomNumber = Math.floor(Math.random() * 15);
            points = ["tiza", "tihda"];
            IncorrectWords("tiza", [...points], "tihda");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "8":
            randomNumber = Math.floor(Math.random() * 15);
            points = ["hormiga", "ormiga"];
            IncorrectWords("hormiga", [...points], "ormiga");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "9":
            randomNumber = Math.floor(Math.random() * 15);
            points = ["lɐpiz", "lapiz"];
            IncorrectWords("lapiz", [...points], "lɐpiz");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "10":
            randomNumber = Math.floor(Math.random() * 15);
            points = ["lɐpiz", "lapiz"];
            IncorrectWords("lapiz", [...points], "lɐpiz");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "11":
            randomNumber = Math.floor(Math.random() * 15);
            points = ["cocodrilo", "cocodilo"];
            IncorrectWords("cocodrilo", [...points], "cocodilo");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "12":
            randomNumber = Math.floor(Math.random() * 15);
            points = ["chet", "chef"];
            IncorrectWords("chef", [...points], "chet");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "13":
            randomNumber = Math.floor(Math.random() * 15);
            points = ["chaleco", "saleco"];
            IncorrectWords("chaleco", [...points], "saleco");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
        case "14":
            randomNumber = Math.floor(Math.random() * 15);
            points = ["cinturón", "cinturóm"];
            IncorrectWords("cinturón", [...points], "cinturóm");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "15":
            randomNumber = Math.floor(Math.random() * 15);
            points = ["rinoceronte", "rinocironte"];
            IncorrectWords("rinoceronte", [...points], "rinocironte");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "16":
            randomNumber = Math.floor(Math.random() * 15);
            points = ["camiseta", "camieta"];
            IncorrectWords("camiseta", [...points], "camieta");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "17":
            randomNumber = Math.floor(Math.random() * 15);
            points = ["casa", "kasa"];
            IncorrectWords("casa", [...points], "kasa");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "18":
            randomNumber = Math.floor(Math.random() * 15);
            points = ["vaca", "uava"];
            IncorrectWords("vaca", [...points], "uava");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "19":
            randomNumber = Math.floor(Math.random() * 15);
            points = ["propuesta", "propueta"];
            IncorrectWords("propuesta", [...points], "propueta");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        default:
            break;
    }
}
