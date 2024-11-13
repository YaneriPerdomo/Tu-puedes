import { _1_3, $countDownBody } from "../../auxiliares/windowModal3_1.js";

//Variables
let $wrongSound = document.querySelector(".wrongSound");
let $correctSound = document.querySelector(".correctSound");
let $tableContainer = document.querySelector(".tableContainer");
let $starNumber = document.querySelector(".start");
let $progressBar = document.querySelector(".progress-bar");
let $letterSound = document.querySelector(".letterSound");
//Contadores.
let correctCounter = 0;
let ErrorCounter = 0;
let acceptedPoints = 0;
let totalTimes = 0;

const CountdownNext = document.querySelector(".countDownNext");
let $colButton = document.querySelectorAll(".colButton > button")
let $theLetter = document.querySelector(".theLetter > span")
let $theLetterContainer = document.querySelector(".theLetter")
//Audios
let $endLeccion = document.querySelector(".endLeccion");
let $sonidoSiguiente = document.querySelector(".sonidoSiguiente")
//FUNCIONES

//Funcion que genera la voz de google
function messengerForUser(cuidado) {
    if (cuidado) {
        let texto = `¡Cuidado!. ¿Vas a abandonar tu lección y perderás todo el progreso?. ¿Estás seguro de que quieres abandonar? `;
        const hablar = (texto) =>
            speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
        hablar(texto);
    } else {
        let texto = `Seleccione el dibujo que comienza con la letra indicada en el recuadro.`;
        const hablar = (texto) =>
            speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
        hablar(texto);
    }
}

//Función para pasar al siguiente ejercicio mientras no se agoten los segundos
function defineNextLetter() {

    switch ($tableContainer.getAttribute("data-next")) {
        case "0":
            let arreyWords0 = ["banana", "hormiga", "lapiz"]
            wordSelection([...arreyWords0])
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 6)}`
            );
            break;
        case "1":
            let arreyWords1 = ["cuaderno", "camiseta", "pendiente"]
            wordSelection([...arreyWords1])
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 6)}`
            );
            break;
        case "2":
            let arreyWords2 = ["chaleco", "tiza", "vaca"]
            wordSelection([...arreyWords2])
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 6)}`
            );
            break;
        case "3":
            let arreyWords3 = ["actividad", "abrazo", "banana"]
            wordSelection([...arreyWords3])
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 6)}`
            );
            break;
        case "4":
            let arreyWords4 = ["piscina", "naranja", "escuela"]
            wordSelection([...arreyWords4])
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 6)}`
            );
            break;
        case "5":
            let arreyWords5 = ["chef", "pelo", "helicóptero"]
            wordSelection([...arreyWords5])
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 6)}`
            );
            break;
            case "6":
                let arreyWords6 = ["nube", "manzana", "lapiz"]
                wordSelection([...arreyWords6])
                $tableContainer.setAttribute(
                    "data-next",
                    `${Math.floor(Math.random() * 6)}`
                );
                break;
        default:
            break;
    }
}

/*Estas dos funciones son los temporizadores, me preguntarán por qué están divididas, mi lógica de programación es que mi solución
fue porque a la primera se le mostraría el minuto número uno y los segundos correspondientes y a la segunda función solo los segundos
que faltan. La segunda función es importante porque cuando llega al número 0, es decir, que se acabaron los segundos, se ejecuta la funcion
end_Game que esa funcion mostrara al usuario las cantidades de estrellas
y el porcentaje*/
async function temporizador() {
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
            lesson_id: 5,
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
            $correctFailed.innerHTML = `Has acertado ${acceptedPoints} veces y no has cometido ningún error.`;
        } else if (correctCounter == 1) {
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

let $imgs = document.querySelectorAll(".wordButtons > button > img")
let $buttons = document.querySelectorAll(".wordButtons > button");

//Función principal que te permite automatizar el proceso de la lección, de hecho, como su nombre lo dice.
function desordenarPalabras(palabras) {
    // Creamos una copia del arreglo para no modificar el original
    const palabrasDesordenadas = [...palabras];

    // Usamos el método sort() con una función de comparación aleatoria
    palabrasDesordenadas.sort(() => Math.random() - 0.5);

    return palabrasDesordenadas;
}

let $small = document.querySelectorAll("button > small")
function wordSelection(words) {
    totalTimes++;
    let wordsA = desordenarPalabras(words)
    $theLetter.innerHTML = `${wordsA[1].slice(0, 1)}`;
    for (let i = 0; i < $buttons.length; i++) {
        $imgs[i].src = `../../../../img/player/${wordsA[i]}.png`;
        $imgs[i].setAttribute("data-word", wordsA[i]);
        $small[i].innerHTML = wordsA[i]
    }
    $theLetter.setAttribute("data-theWord", wordsA[1]);
    let contador = 0;
    $buttons.forEach(e => {
        if (e.textContent !== $theLetter.getAttribute("data-theWord")) {
            contador++;
        }
    })
    /*
    console.log(contador)
    if (contador == $buttons.length) {
        $buttons[0].innerHTML = $theLetter.getAttribute("data-theWord")
    }**/
}
let arreyWords = ["chaleco", "pelo", "abrazo"]
wordSelection([...arreyWords])


//EVENTOS
//Principales
document.addEventListener("click", e => {
    //Reproducir el audio:
    if (e.target.matches(".cuidado")) {
        messengerForUser(true)
    }

    //Ver las cantidades de estrellas y el porcentaje; pasar a la informacion final
    if (e.target.matches(".siguiente")) {
        let $last = document.querySelector(".last");
        let $first = document.querySelector(".first");
        $first.style.display = "none";
        $last.classList.add("animationBounceOut");
        $last.removeAttribute("style");
        $sonidoSiguiente.play()
    }

    //Repetir lo que el usuario tiene que hacer
    if (e.target.matches(".repeatVerso")) {
        messengerForUser(false)
    }


    //Esto es para verificar la respuesta del usuario al ejercicio.
    if (e.target.matches(".wordButtons > button > img")) {
        if (e.target.getAttribute("data-word") == $theLetter.getAttribute("data-theWord")) {
            acceptedPoints++;
            $wrongSound.pause();
            correctCounter++;
            $correctSound.play();
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.classList.add("hoverVerde")
            $colButton.forEach(e => {
                if (e.textContent.length > 0) {
                    e.disabled = true
                }
            })
            $theLetter.innerHTML = e.target.getAttribute("data-word")
            $theLetterContainer.classList.add("hoverVerde")
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }
            setTimeout(() => {
                $theLetterContainer.classList.remove("hoverVerde")
                e.target.classList.remove("hoverVerde");
                $colButton.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.removeAttribute("disabled");
                    }
                })
                defineNextLetter()
            }, 2000);
        } else {
            ErrorCounter++;
            $theLetterContainer.classList.add("hoverRed")
            $wrongSound.play();
            $colButton.forEach(el => {
                el.disabled = true;
            })
            setTimeout(() => {
                e.target.classList.remove("hoverRed");
                $colButton.forEach(e => {
                    e.removeAttribute("disabled")
                })
                $theLetterContainer.classList.remove("hoverRed")
                $colButton.forEach(e => {
                    e.classList.remove("hoverRed");
                    e.removeAttribute("disabled");
                });
                defineNextLetter();
                $theLetter.classList.remove("hoverRed")
            }, 2000);
            e.target.classList.add("hoverRed")
            $colButton.forEach(e => {
                e.disabled = true;
                e.classList.add("hoverRed");
            })
        }
    }
})

//Este es un evento del mouse y se activa el sonido cuando el mouse está sobre el botón.
document.addEventListener("mousemove", (e) => {
    if (e.target.matches(".colButton > button")) {
        $letterSound.play();
    }
});

//No es una función, más bien es lo primero que se ejecutará al iniciar la lección.
setTimeout(() => {
    let $main = document.querySelector("main");
    $main.removeChild($main.children[10]);
    setTimeout(async () => {
        $countDownBody.removeAttribute("style");
        _1_3();
        messengerForUser()
        setTimeout(() => {
            temporizador()
        }, 2500);
        setTimeout(() => {
            let $messengerInformation = document.querySelector(
                ".messengerInformation"
            );
            $messengerInformation.removeAttribute("style");
            $messengerInformation.classList.add("AnimationMessengerInformation");
        }, 4000);
    }, 0);
}, 1500);