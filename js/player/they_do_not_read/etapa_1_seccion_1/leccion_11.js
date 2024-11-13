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
const CountdownNext = document.querySelector(".countDownNext");
let $colButton = document.querySelectorAll(".colButton > button")
let $theLetter = document.querySelector(".theLetter > span")
let $theLetterContainer = document.querySelector(".theLetter");

let totalTimes = 0;
let acceptedPoints = 0;

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
        let texto = `Seleccione la palabra que comienza con la letra indicada en el cuadro.`;
        const hablar = (texto) =>
            speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
        hablar(texto);
    }
}

//Función para pasar al siguiente ejercicio mientras no se agoten los segundos
function defineNextLetter() {
    let arreyWords = []
    switch ($tableContainer.getAttribute("data-next")) {
        case "0":
            arreyWords = ["Gato", "Silla", "Papel", "Vaca", "Zapato", "Queso", "Marca"]
            wordSelection([...arreyWords], "Marca")
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 14)}`
            );
            break;
        case "1":
            arreyWords = ["Yoyó", "Zoología", "Estudio", "Biología",
                "Queso", "Lengua", "Mesa"
            ]
            wordSelection([...arreyWords], "Yoyó")
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 14)}`
            );
            break;
        case "2":
            arreyWords = ["Yoyó", "Zoología", "Mesa", "Biología",
                "Verde", "aigoloiB", "Vaca"
            ]
            wordSelection([...arreyWords], "Biología")
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 14)}`
            );
            break;
        case "3":
            arreyWords = ["Puerta", "Reloj", "Perro", "Teclado",
                "Zapato", "Cama", "Gallina"
            ]
            wordSelection([...arreyWords], "Gallina")
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 14)}`
            );
            break;
        case "4":
            arreyWords = ["Yoyó", "Camisa", "Cielo", "Bebé",
                "Biologia", "Padre", "Queso"
            ]
            wordSelection([...arreyWords], "Padre")
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 14)}`
            );
            break;
        case "5":
            arreyWords = ["Payaso", "Libro", "Casa", "Auto",
                "Belleza", "Juego", "Esquema"
            ]
            wordSelection([...arreyWords], "Casa")
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 14)}`
            );
            break;
        case "6":
            arreyWords = ["Bombillo", "Lengua", "Nieve", "Espejo",
                "Pintar", "Zapato", "Cariño"
            ]
            wordSelection([...arreyWords], "Cariño")
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 14)}`
            );
            break;
        case "7":
            arreyWords = ["Libro", "Guitarra", "Cosa", "Voz",
                "Estudiar", "Trabajar", "Rey"
            ]
            wordSelection([...arreyWords], "Rey")
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 14)}`
            );
            break;
        case "8":
            arreyWords = ["Cosmo", "Ciencias", "Lapiz", "Sofá",
                "Caballo", "Foto", "Amor"
            ]
            wordSelection([...arreyWords], "Amor")
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 14)}`
            );
            break;
        case "9":
            arreyWords = ["Piso", "Casa", "LLamada", "Maqueta",
                "Biología", "Foto", "Telefono"
            ]
            wordSelection([...arreyWords], "Maqueta")
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 14)}`
            );
            break;
        case "10":
            arreyWords = ["Digital", "Horas", "Estudiar", "Programar",
                "Texto", "Hoja", "Sentar"
            ]
            wordSelection([...arreyWords], "Programar")
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 14)}`
            );
            break;
        case "11":
            arreyWords = ["Cotufas", "Cuna", "Película", "Imágen",
                "Cine", "Sol", "Luz"
            ]
            wordSelection([...arreyWords], "Película")
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 14)}`
            );
            break;
        case "12":
            arreyWords = ["Llorar", "LLave", "Zorro", "Gallo",
                "Raya", "Mayo", "Niño"
            ]
            wordSelection([...arreyWords], "Zorro")
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 14)}`
            );
            break;
        case "13":
            arreyWords = ["Baño", "Puño", "Carro", "Raya",
                "Verde", "Lucha", "Taza"
            ]
            wordSelection([...arreyWords], "Carro")
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 14)}`
            );
            break;
        case "14":
            arreyWords = ["Libro", "Caja", "Negro", "Rojo",
                "Queso", "Pollo", "Luz"
            ]
            wordSelection([...arreyWords], "Caja")
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 14)}`
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
            lesson_id: 11,
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

//Función principal que te permite automatizar el proceso de la lección, de hecho, como su nombre lo dice.
function wordSelection(words, correctWord) {
    totalTimes++;
    let $buttons = document.querySelectorAll(".wordButtons > button")
    console.info(words)
    $theLetter.innerHTML = `${correctWord.slice(0, 1)}`
    for (let i = 0; i < $buttons.length; i++) {
        $buttons[i].innerHTML = words[i]
    }
    $theLetter.setAttribute("data-theWord", correctWord);
    let contador = 0;
    $buttons.forEach(e => {
        if (e.textContent !== $theLetter.getAttribute("data-theWord")) {
            contador++;
        }
    })
    console.log(contador)
    if (contador == $buttons.length) {
        $buttons[0].innerHTML = $theLetter.getAttribute("data-theWord")
    }
}
let arreyWords = ["Gato", "Silla", "Papel", "Vaca", "Zapato", "Queso", "Marca"]
wordSelection([...arreyWords], "Marca")

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
    if (e.target.matches(".wordButtons > button")) {
        if (e.target.textContent == $theLetter.getAttribute("data-theWord")) {
            $wrongSound.pause();
            acceptedPoints++;
            correctCounter++;
            $correctSound.play();
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.classList.add("hoverVerde")
            $colButton.forEach(e => {
                if (e.textContent.length > 0) {
                    e.disabled = true
                }
            })
            $theLetter.innerHTML = e.target.textContent
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
                el.disabled = true
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