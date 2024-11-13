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

document.addEventListener("DOMContentLoaded", async e => {

    if (localStorage.getItem("dragContent") === null) {
        await localStorage.setItem("dragContent", null)
    }
    if (localStorage.getItem("dragNumber") === null) {
        await localStorage.setItem("dragNumber", null)
    }

    letterToDrag("igotebj", "bigote");

})

async function letterToDrag(letters, correctWord) {
    totalTimes++
    await $buttonsDrag.forEach(clear => {
        clear.innerHTML = "";
        clear.removeAttribute("style")
        clear.removeAttribute("class")
        clear.setAttribute("draggable", "true")
    });
    await $buttonTable.forEach(clear => {
        clear.innerHTML = "";
        clear.setAttribute("draggable", "false");
    })


    let arraySplit = letters.split("");
    console.log(arraySplit)

    //Cada letra corresponde a su respectiva etiqueta.
    for (let i = 0; i < $buttonsDrag.length; i++) {
        if ($buttonsDrag[i].textContent == "") {
            $buttonsDrag[i].innerHTML = arraySplit[i]
        }
    }

    return $tableContainer.setAttribute("data-correct-word", correctWord)
}





//Arrastra y soltar

//funciones

function dragNumberFalse() {
    return $buttonsDrag[localStorage.getItem("dragNumber")].
        setAttribute("draggable", "false");
    $buttonTable[localStorage.getItem("dragNumber")].classList.remove("buttonVisibility")
    console.log("am ")

}

document.addEventListener("mousemove", (e) => {
    if (e.target.matches(".tableContainer > button") || e.target.matches(".lettersDrag > button")) {
        try {
            $letterSound.play();
        } catch (error) {
            alert("error");
        }
    }
});

async function checkLabels() {
    let contador = 0;
    $buttonTable.forEach(e => {
        if (e.textContent.length !== 0) {
            contador++;
        }
    })
    if (contador == 6) {
        let stringLabels = "";
        await $buttonTable.forEach(e => {
            stringLabels += e.textContent
        })

        //Correct
        if ($tableContainer.getAttribute("data-correct-word") == stringLabels) {
            acceptedPoints++
            $wrongSound.pause();
            $correctSound.play();
            correctCounter++;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 5}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 5}%`;
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
                    await _1_3();
                }, 0);
            }, 3000);
        } else {
            $wrongSound.play();
            $intentosNumber.textContent = parseInt($intentosNumber.textContent) - 1;
            incorrectCounter++;
            if ($intentosNumber.textContent == 0) {
                setTimeout(async () => {
                    await defineNextWord()
                    await _1_3_again();
                }, 3000);
            }
            $buttonTable.forEach(el => {
                el.classList.add("hoverRed");
                el.draggable = false;
            })
            setTimeout(() => {
                $buttonTable.forEach(e => {
                    e.classList.remove("hoverRed");
                    e.draggable = true;
                })
            }, 3000);
        }
    }
}

async function defineNextWord() {
    $intentosNumber.textContent = 3;
    switch ($tableContainer.getAttribute("data-next")) {
        case "0":
            randomNumber = Math.floor(Math.random() * 7);
            await letterToDrag("casotrf", "castor")
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "1":
            randomNumber = Math.floor(Math.random() * 7);
            await letterToDrag("igotebd", "bigote");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "2":
            randomNumber = Math.floor(Math.random() * 7);
            await letterToDrag("bancolm", "blanco");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "3":
            randomNumber = Math.floor(Math.random() * 7);
            await letterToDrag("plnarti", "pintar");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "4":
            randomNumber = Math.floor(Math.random() * 7);
            await letterToDrag("sonbram", "sombra");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "5":
            randomNumber = Math.floor(Math.random() * 7);
            await letterToDrag("ínldfme", "delfín");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "6":
            randomNumber = Math.floor(Math.random() * 7);
            await letterToDrag("brenomd", "nombre");
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;

        case "7":
            randomNumber = Math.floor(Math.random() * 7);
            await letterToDrag("numdob", "mundo");
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


$buttonsDrag[0].addEventListener("drag", async e => {
    await localStorage.setItem("dragContent", `${$buttonsDrag[0].textContent}`);
    await localStorage.setItem("dragNumber", 0);
});


$buttonsDrag[1].addEventListener("drag", async e => {
    await localStorage.setItem("dragContent", `${$buttonsDrag[1].textContent}`);
    await localStorage.setItem("dragNumber", 1);

});

function validateRepeatLetterDrang() {
    for (let i = 0; i < $buttonsDrag.length; i++) {
        if (localStorage.getItem("dragContent") == $buttonsDrag[i].textContent) {
            return false;
        }
    }
    return true

}
//0
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
$buttonsDrag[0].addEventListener("drop", async e => {
    ValidateDropContainerDrag(e.target)

})



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


})



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

//

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

//

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

//

//5

$buttonsDrag[5].addEventListener("dragover", async e => {
    e.preventDefault();
});

$buttonTable[5].addEventListener("drag", async e => {
    await localStorage.setItem("dragContent", `${$buttonTable[5].textContent}`);
    await localStorage.setItem("dragNumber", 5);

});
$buttonTable[5].addEventListener("dragover", async e => {
    e.preventDefault();
});


$buttonsDrag[5].addEventListener("drop", async e => {
    ValidateDropContainerDrag(e.target)
});

//
//
//6
$buttonsDrag[6].addEventListener("dragover", async e => {
    e.preventDefault();
});

$buttonsDrag[6].addEventListener("drop", async e => {
    ValidateDropContainerDrag(e.target)
});

//

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
$buttonsDrag[5].addEventListener("drag", async e => {
    await localStorage.setItem("dragContent", `${$buttonsDrag[5].textContent}`);
    await localStorage.setItem("dragNumber", 5);
});
$buttonsDrag[6].addEventListener("drag", async e => {
    await localStorage.setItem("dragContent", `${$buttonsDrag[6].textContent}`);
    await localStorage.setItem("dragNumber", 6);
});


$buttonTable[0].addEventListener("dragover", async e => {
    e.preventDefault();

})

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


let text_1_3 = document.querySelector(".text_1_3");
const countdownElement = document.querySelector(".countDownBody > div > h2");
const CountdownNext = document.querySelector(".countDownNext");

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

async function _1_3_again() {
    let count = 3;
    speechSynthesis.cancel()
    voiceExercise();
    text_1_3.innerHTML = "¡Lo intentamos de nuevo!";
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
            End_Game()
        }
    }, 1000);
}

async function End_Game() {
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
    $containerResults.removeAttribute("style");
    await fetch("/api/complete_lesson.php", {
        method: "POST",
        body: JSON.stringify({
            lesson_id: 21,
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

function voiceExerciseSlow() {
    let mensaje = new SpeechSynthesisUtterance(`Escucha y construye la palabra correcta. .${$tableContainer.getAttribute("data-correct-word")}`);
    mensaje.rate = 0.7;
    let voces = window.speechSynthesis.getVoices();
    mensaje.voice = voces.find(voz => voz.lang === 'es-ES');
    window.speechSynthesis.speak(mensaje);
}

function voiceExercise() {
    let texto = `Escucha y construye la palabra correcta. .${$tableContainer.getAttribute("data-correct-word")}`;
    const hablar = (texto) =>
        speechSynthesis.resume()
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    return hablar(texto);
}


document.addEventListener("click", e => {
    if (e.target.matches(".siguiente")) {
        let $last = document.querySelector(".last");
        let $first = document.querySelector(".first");
        $first.style.display = "none";
        $last.classList.add("animationBounceOut");
        $last.removeAttribute("style");
    }
    if (e.target.matches(".repeatSlow")) {
        voiceExerciseSlow()
        setTimeout(() => {
            speechSynthesis.cancel()
        }, 5000);
    }
    if (e.target.matches(".repeatNormal")) {
        voiceExercise()
    }
})
setTimeout(() => {
    let $main = document.querySelector("main");
    $main.removeChild($main.children[7]);
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
