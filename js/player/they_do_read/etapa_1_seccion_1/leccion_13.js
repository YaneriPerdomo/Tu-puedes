let $buttonsDrag = document.querySelectorAll(".lettersDrag > button");
let $buttonTable = document.querySelectorAll(".tableContainer > button");
let $tableContainer = document.querySelector(".tableContainer");

let $progressBar = document.querySelector(".progress-bar");
let $countDownBody = document.querySelector(".countDownBody");
let $letterSound = document.querySelector(".letterSound");
let $wrongSound = document.querySelector(".wrongSound");
let $correctSound = document.querySelector(".correctSound");
let $intentosNumber = document.querySelector(".intentos > .number");
let $starNumber = document.querySelector(".start");
let $repeatDictation = document.querySelector(".repeatDictation");
let intentos = 3;
let randomNumber = 0;
let incorrectCounter = 0;
let count = 0;
let countTotal = 0;
let correctCounter = 0;
let acceptedPoints = 0;
let totalTimes = 0;
let $colButton = document.querySelectorAll(".colButton > button")

let $intentoText = document.querySelector(".intentoText");
let $intento = document.querySelector(".intentos")
let $ceroIntentos = document.querySelector(".ceroIntentos")
let $endLeccion = document.querySelector(".endLeccion");
let $sonidoSiguiente = document.querySelector(".sonidoSiguiente")
document.addEventListener("DOMContentLoaded", async e => {
    if (localStorage.getItem("dragContent") === null) {
        await localStorage.setItem("dragContent", null)
    }
    if (localStorage.getItem("dragNumber") === null) {
        await localStorage.setItem("dragNumber", null)
    }
})

async function textToDrag(letters, correctWord, sliceF, number) {
    let slice = sliceF.split("")
    totalTimes++

    await $buttonsDrag.forEach(clear => {
        clear.innerHTML = "";
        clear.removeAttribute("style")
        clear.removeAttribute("class")
        clear.setAttribute("draggable", "true");
    });
    let contador = 0;
    let twoNumber = number + 1;
    let thre = (number + 1) + 1;
    for (let i = 0; i < $buttonTable.length; i++) {
        contador++;
        if (contador == number) {
            $buttonTable[i].innerHTML = slice[0];
            $buttonTable[i].setAttribute("draggable", "false");
            continue
        }
        if (contador == twoNumber) {
            $buttonTable[i].innerHTML = slice[1];
            $buttonTable[i].setAttribute("draggable", "false");
            continue
        }
        if (contador == thre) {
            $buttonTable[i].innerHTML = slice[2];
            $buttonTable[i].setAttribute("draggable", "false");
            continue
        }
        $buttonTable[i].innerHTML = "";
        $buttonTable[i].setAttribute("draggable", "false");
    }

    let arraySplit = letters.split("");

    //Cada letra corresponde a su respectiva etiqueta.
    for (let i = 0; i < $buttonsDrag.length; i++) {
        if ($buttonsDrag[i].textContent == "") {
            $buttonsDrag[i].innerHTML = arraySplit[i]
        }
    }

    return $tableContainer.setAttribute("data-correct-word", correctWord)
}

textToDrag("pakdo", "partido", "rti", 3);


document.addEventListener("mousemove", (e) => {
    if (e.target.matches(".tableContainer > button") || e.target.matches(".lettersDrag > button")) {
        $letterSound.play();
    }
});

document.addEventListener("click", e => {
    if (e.target.matches(".siguiente")) {
        let $last = document.querySelector(".last");
        let $first = document.querySelector(".first");
        $first.style.display = "none";
        $last.classList.add("animationBounceOut");
        $last.removeAttribute("style");
        $sonidoSiguiente.play()
    }
})
//Arratrar y soltar

//Funciones

function dragNumberFalse() {
    return $buttonsDrag[localStorage.getItem("dragNumber")].
        setAttribute("draggable", "false");
    $buttonTable[localStorage.getItem("dragNumber")].classList.remove("buttonVisibility")
}

async function checkLabels() {
    let contador = 0;
    $buttonTable.forEach(e => {
        if (e.textContent.length !== 0) {
            contador++;
        }
    })
    if (contador == 7) {
        let stringLabels = "";
        await $buttonTable.forEach(e => {
            stringLabels += e.textContent
        })
        //Correct
        if ($tableContainer.getAttribute("data-correct-word") == stringLabels) {
            $wrongSound.pause();
            $correctSound.play();
            acceptedPoints++
            correctCounter++;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            $intentosNumber.textContent = 3;
            $buttonTable.forEach(el => {
                el.classList.add("hoverVerde");
                el.draggable = false;
            })
            setTimeout(() => {
                $buttonTable.forEach(e => {
                    e.classList.remove("hoverVerde");
                    e.draggable = true;
                })
                setTimeout(async () => {
                    await defineNextWord()
                }, 0);
            }, 3000);
        } else {
            $wrongSound.play();
            $intentosNumber.textContent = parseInt($intentosNumber.textContent) - 1;
            incorrectCounter++;

            if ($intentosNumber.textContent == 1) {
                $intentoText.innerHTML = "Intento:"
            }
            if ($intentosNumber.textContent == 0) {
                $buttonTable.forEach(el => {
                    el.classList.add("hoverRed");
                    el.draggable = false;
                });

                $intento.classList.add("swing");
                $ceroIntentos.play();

                setTimeout(() => {
                    $buttonTable.forEach(e => {
                        e.classList.remove("hoverRed");
                    })
                    defineNextWord();
                    $intento.classList.remove("swing")
                }, 2000);

            }
        }
    }
}


async function defineNextWord() {
    $intentoText.innerHTML = "Intentos:"
    $intentosNumber.textContent = 3;
    switch ($tableContainer.getAttribute("data-next")) {
        case "0":
            randomNumber = Math.floor(Math.random() * 7);
            await textToDrag("pakdo", "partido", "rti", 3);
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "1":
            randomNumber = Math.floor(Math.random() * 7);
            await textToDrag("diolu", "estudio", "est", 1);
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "2":
            randomNumber = Math.floor(Math.random() * 7);
            await textToDrag("penoa", "persona", "ers", 2);
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "3":
            randomNumber = Math.floor(Math.random() * 7);
            await textToDrag("grnra", "grandes", "des", 5);
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "4":
            randomNumber = Math.floor(Math.random() * 7);
            await textToDrag("rastd", "revista", "evi", 2);
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "5":
            randomNumber = Math.floor(Math.random() * 7);
            await textToDrag("trofg", "triunfo", "iun", 3);
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "6":
            randomNumber = Math.floor(Math.random() * 7);
            await textToDrag("stadn", "amistad", "ami", 1);
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "7":
            randomNumber = Math.floor(Math.random() * 7);
            await textToDrag("ardip", "dibujar", "buj", 3);
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        default:
            break;
    }
}

function lettersDragValidarTable() {
    $buttonTable.forEach(element => {
        if (element.textContent == localStorage.getItem("dragContent")) {
            element.classList.remove("buttonVisibility");
            element.innerHTML = "";
        }
    })
}
function lettersDragValidar() {
    $buttonsDrag.forEach(element => {
        if (element.textContent == localStorage.getItem("dragContent")) {
            element.classList.add("buttonVisibility");
            element.innerHTML = "";
        }
    })
}
function validateRepeatLetterDrang() {
    for (let i = 0; i < $buttonsDrag.length; i++) {
        if (localStorage.getItem("dragContent") == $buttonsDrag[i].textContent) {
            return false;
        }
    }
    return true
}
function ValidateDropContainerDrag(eTarget) {
    if (eTarget.textContent.length == 0 && validateRepeatLetterDrang() === true) {
        eTarget.textContent = localStorage.getItem("dragContent");
        eTarget.setAttribute("draggable", "true");
        eTarget.classList.remove("buttonVisibility")
        $buttonTable[localStorage.getItem("dragNumber")].classList.remove("buttonVisibility")
        $buttonTable[localStorage.getItem("dragNumber")].innerHTML = ""
        $buttonTable[localStorage.getItem("dragNumber")].setAttribute("draggable", "false")
    }
}
function validateRepeatLetter() {
    for (let i = 0; i < $buttonTable.length; i++) {
        if (localStorage.getItem("dragContent") == $buttonTable[i].textContent) {
            console.info($buttonTable[i].textContent)
            return false;
        }
    }
    return true
}
function ValidateDropContainerButton(eTarget) {
    if (eTarget.textContent.length === 0 && validateRepeatLetter() === true) {
        eTarget.textContent = localStorage.getItem("dragContent");
        eTarget.setAttribute("draggable", "true")
        eTarget.classList.remove("buttonVisibility")
        lettersDragValidar();
        dragNumberFalse();
        checkLabels();
    }
}
//Eventos para que funcione la ejecucion principal

//Para que los botones se activan al arrastrarlos.
$buttonsDrag[0].addEventListener("drag", async e => {
    await localStorage.setItem("dragContent", `${$buttonsDrag[0].textContent}`);
    await localStorage.setItem("dragNumber", 0);
});
$buttonsDrag[1].addEventListener("drag", async e => {
    await localStorage.setItem("dragContent", `${$buttonsDrag[1].textContent}`);
    await localStorage.setItem("dragNumber", 1);
});
$buttonsDrag[2].addEventListener("drag", async e => {
    await localStorage.setItem("dragContent", `${$buttonsDrag[2].textContent}`);
    localStorage.setItem("dragNumber", 2);
});
$buttonsDrag[3].addEventListener("drag", async e => {
    await localStorage.setItem("dragContent", `${$buttonsDrag[3].textContent}`);
    await localStorage.setItem("dragNumber", 3)
});
$buttonsDrag[4].addEventListener("drag", async e => {
    await localStorage.setItem("dragContent", `${$buttonsDrag[4].textContent}`);
    await localStorage.setItem("dragNumber", 4)
});


// 0
$buttonsDrag[0].addEventListener("dragover", async e => {
    e.preventDefault();
});
$buttonTable[0].addEventListener("drag", async e => {
    await localStorage.setItem("dragContent", `${$buttonTable[0].textContent}`);
    await localStorage.setItem("dragNumber", 0);
});
$buttonTable[0].addEventListener("dragover", async e => {
    e.preventDefault();
});
$buttonsDrag[0].addEventListener("drop", async e => {
    ValidateDropContainerDrag(e.target)
});

//1
$buttonsDrag[1].addEventListener("dragover", async e => {
    e.preventDefault();
});
$buttonTable[1].addEventListener("drag", async e => {
    await localStorage.setItem("dragContent", `${$buttonTable[1].textContent}`);
    await localStorage.setItem("dragNumber", 1);
});
$buttonTable[1].addEventListener("dragover", async e => {
    e.preventDefault();
});
$buttonsDrag[1].addEventListener("drop", async e => {
    ValidateDropContainerDrag(e.target)
});

//2 
$buttonsDrag[2].addEventListener("dragover", async e => {
    e.preventDefault();
});
$buttonTable[2].addEventListener("drag", async e => {
    await localStorage.setItem("dragContent", `${$buttonTable[2].textContent}`);
    await localStorage.setItem("dragNumber", 2);
});
$buttonTable[2].addEventListener("dragover", async e => {
    e.preventDefault();
});
$buttonsDrag[2].addEventListener("drop", async e => {
    ValidateDropContainerDrag(e.target)
});


//3
$buttonsDrag[3].addEventListener("dragover", async e => {
    e.preventDefault();
});
$buttonTable[3].addEventListener("drag", async e => {
    await localStorage.setItem("dragContent", `${$buttonTable[3].textContent}`);
    await localStorage.setItem("dragNumber", 3);
});
$buttonTable[3].addEventListener("dragover", async e => {
    e.preventDefault();
});
$buttonsDrag[3].addEventListener("drop", async e => {
    ValidateDropContainerDrag(e.target)
});

//4
$buttonsDrag[4].addEventListener("dragover", async e => {
    e.preventDefault();
});
$buttonTable[4].addEventListener("drag", async e => {
    await localStorage.setItem("dragContent", `${$buttonTable[4].textContent}`);
    await localStorage.setItem("dragNumber", 4);
});
$buttonTable[4].addEventListener("dragover", async e => {
    e.preventDefault();
});
$buttonsDrag[4].addEventListener("drop", async e => {
    ValidateDropContainerDrag(e.target)
});

//5
$buttonTable[5].addEventListener("drag", async e => {
    await localStorage.setItem("dragContent", `${$buttonTable[5].textContent}`);
    await localStorage.setItem("dragNumber", 5);
});
$buttonTable[5].addEventListener("dragover", async e => {
    e.preventDefault();
});
//6
$buttonTable[6].addEventListener("drag", async e => {
    await localStorage.setItem("dragContent", `${$buttonTable[6].textContent}`);
    await localStorage.setItem("dragNumber", 6);
});
$buttonTable[6].addEventListener("dragover", async e => {
    e.preventDefault();
});



//
$buttonTable[0].addEventListener("dragover", async e => {
    e.preventDefault();
})

$buttonTable[1].addEventListener("dragover", async e => {
    e.preventDefault();
})
$buttonTable[2].addEventListener("dragover", async e => {
    e.preventDefault();
})
$buttonTable[3].addEventListener("dragover", async e => {
    e.preventDefault();
})
$buttonTable[4].addEventListener("dragover", async e => {
    e.preventDefault();
})
$buttonTable[5].addEventListener("dragover", async e => {
    e.preventDefault();
})
$buttonTable[6].addEventListener("dragover", async e => {
    e.preventDefault();
})



//

$buttonTable[0].addEventListener("drop", async e => {
    ValidateDropContainerButton(e.target)
})
$buttonTable[1].addEventListener("drop", async e => {
    ValidateDropContainerButton(e.target)
})
$buttonTable[2].addEventListener("drop", async e => {
    ValidateDropContainerButton(e.target)
})
$buttonTable[3].addEventListener("drop", async e => {
    ValidateDropContainerButton(e.target)
})
$buttonTable[4].addEventListener("drop", async e => {
    ValidateDropContainerButton(e.target)
})
$buttonTable[5].addEventListener("drop", async e => {
    ValidateDropContainerButton(e.target)
})
$buttonTable[6].addEventListener("drop", async e => {
    ValidateDropContainerButton(e.target)
})

let text_1_3 = document.querySelector(".text_1_3");
const countdownElement = document.querySelector(".countDownBody > div > h2");
const CountdownNext = document.querySelector(".countDownNext");


//Inicio de todo

setTimeout(() => {
    let $main = document.querySelector("main");
    $main.removeChild($main.children[10]);
    setTimeout(async () => {
        $countDownBody.removeAttribute("style");
        _1_3();
        setTimeout(() => {
            temporizador()
        }, 2000);
        setTimeout(() => {
            let $messengerInformation = document.querySelector(".messengerInformation");
            $messengerInformation.removeAttribute("style");
            $messengerInformation.classList.add("AnimationMessengerInformation");
        }, 4000);
    }, 0);
}, 1500);


function voiceExercise() {
    let texto = `Construye la palabra correcta`;
    const hablar = (texto) =>
        speechSynthesis.resume()
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    return hablar(texto);
}

async function _1_3() {
    let count = 3;
    speechSynthesis.cancel()
    voiceExercise();
    text_1_3.innerHTML = "¡Muy bien, comencemos!";
    CountdownNext.style.display = "none"
    countdownElement.innerHTML = "3";
    $countDownBody.removeAttribute("style");
    let countdown = setInterval(() => {
        count--;
        countdownElement.textContent = count;
        if (count === 0) {
            clearInterval(countdown);
            $countDownBody.style.display = "none";
            CountdownNext.textContent = parseInt(CountdownNext) - 7;
            setTimeout(() => {
                CountdownNext.removeAttribute("style")
            }, 900);
        }
    }, 1000);
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
    }else{
        $percentage.innerHTML = formula + "%";
        $motivationalMessage.innerHTML = "¡Oh, Bastante bien!";
    } 
    console.info(incorrectCounter);
    $containerResults.removeAttribute("style");
    
    await fetch("/api/complete_lesson.php", {
        method: "POST",
        body: JSON.stringify({
            lesson_id: 27,
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
        if (incorrectCounter == 0) {
            $correctFailed.innerHTML = `Has acertado ${correctCounter} veces y no has cometido ningún error.`;
        } else if (incorrectCounter == 1) {
            $correctFailed.innerHTML = `Has acertado ${correctCounter} veces y has fallado solo una vez.`;
        } else {
            $correctFailed.innerHTML = `Has acertado ${correctCounter} veces y has fallado ${incorrectCounter} veces.`;
        }
    })
    .catch((error)=> {
        console.error("Error:", error);
        alert("Ha ocurrido un error al enviar los datos al servidor.");
    });
}