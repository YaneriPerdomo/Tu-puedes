
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

let $intentoText = document.querySelector(".intentoText")
let $buttons = document.querySelectorAll(".colButton > button")

let $theLetterContainer = document.querySelector(".theLetter")


let $intentosNumber = document.querySelectorAll(".intentos > .number");
let $intento = document.querySelector(".intentos")
let $ceroIntentos = document.querySelector(".ceroIntentos")




//Audios
let $endLeccion = document.querySelector(".endLeccion");
let $sonidoSiguiente = document.querySelector(".sonidoSiguiente")

let $theWord = document.querySelector(".palabra");
let $space = document.querySelectorAll(".palabra > span")

//FUNCIONES



//Funcion que genera la voz de google
function messengerForUser(cuidado) {
    if (cuidado) {
        let texto = `¡Cuidado!. ¿Vas a abandonar tu lección y perderás todo el progreso?. ¿Estás seguro de que quieres abandonar? `;
        const hablar = (texto) =>
            speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
        hablar(texto);
    } else {
        let texto = `Selecciona la sibala que falta`;
        const hablar = (texto) =>
            speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
        hablar(texto);
    }
}
//Función para pasar al siguiente ejercicio mientras no se agoten los segundos
function defineNextLetter() {
    $intentoText.innerHTML = "Intentos:"
    $intentosNumber[0].innerHTML = 3
    switch ($tableContainer.getAttribute("data-next")) {
        case "0":
            let array0 = ["ca", "ce", "co", "ci", "cu"]
            missingSyllable("sa", "casa", [...array0]);
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "1":
            let array1 = ["la", "al", "li", "a", "lu"]
            missingSyllable("piz", "lapiz", [...array1])
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "2":
            let array2 = ["ba", "va", "vo", "be", "ua"]
            missingSyllable("ca", "vaca", [...array2])
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "3":
            let array3 = ["ada", "aba", "abra", "obra", "adra"]
            missingSyllable("zo", "abrazo", [...array3])
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "4":
            let array4 = ["nar", "naa", "uar", "ara", "mar"]
            missingSyllable("anja", "naranja", [...array4])
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "5":
            let array5 = ["pe", "ba", "be", "da", "po"]
            missingSyllable("lo", "pelo", [...array5])
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "6":
            let array6 = ["nu", "vu", "uu", "mu", "na"]
            missingSyllable("be", "nube", [...array6])
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "7":
            let array7 = ["as", "ti", "to", "te", "tj"]
            missingSyllable("za", "tiza", [...array7])
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "8":
            let array8 = ["ti", "ta", "to", "te", "tj"]
            missingSyllable("za", "tiza", [...array8])
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "9":
            let array9 = ["ba", "be", "da", "pa", "ap"]
            missingSyllable("nana", "banana", [...array9])
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "10":
            let array10 = ["oh", "ho", "o", "or", "hor"]
            missingSyllable("miga", "hormiga", [...array10])
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "11":
            let array11 = ["pie", "bia", "na", "pi", "pio"]
            missingSyllable("rna", "pierna", [...array11])
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "12":
            let array12 = ["cs", "ka", "ca", "ha", "kar"]
            missingSyllable("miseta", "camiseta", [...array12])
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "13":
            let array13 = ["cue", "cua", "kua", "cuo", "cu"]
            missingSyllable("derno", "cuaderno", [...array13])
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "14":
            let array14 = ["es", "as", "os", "ec", "eo"]
            missingSyllable("cuela", "escuela", [...array14])
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "15":
            let array15 = ["pur", "ba", "pe", "per", "par"]
            missingSyllable("ro", "perro", [...array15])
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
            );
            break;
        case "16":
            let array16 = ["in", "mi", "ni", "na", "np"]
            missingSyllable("ño", "niño", [...array16])
            $tableContainer.setAttribute(
                "data-next",
                `${Math.floor(Math.random() * 16)}`
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
            lesson_id: 6,
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
        if (acceptedPoints == 0) {
            $correctFailed.innerHTML = `Has acertado ${acceptedPoints} veces y no has cometido ningún error.`;
        } else if (acceptedPoints == 1) {
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

//Función principal que te permite automatizar el proceso de la lección, de hecho, como su nombre lo dice.

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
    if (e.target.matches(".colButton > button")) {
        console.log(e.target.textContent);
        let userWord = "",
            string = "";
        userWord = `${e.target.textContent}${$space[1].textContent}`;
        console.log(userWord)
        if (userWord == $tableContainer.getAttribute("data-CompleteSyllable")) {
            acceptedPoints++;
            $wrongSound.pause();
            correctCounter++;
            $correctSound.play();
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.classList.add("hoverVerde")
            $space.forEach(el => {
                if (el.textContent == "__") {
                    console.info(el.textContent)
                    el.setAttribute("data-re", "true")
                    el.innerHTML = e.target.textContent;
                }
            })
            $buttons.forEach(e => {
                if (e.textContent.length > 0) {
                    e.disabled = true
                }
            })
            $theWord.classList.add("hoverVerde")
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }
            setTimeout(() => {
                $space.forEach(el => {
                    if (el.getAttribute("data-re") == "true") {
                        el.innerHTML = "__";
                        el.removeAttribute("data-re")
                    }
                })
                $theWord.classList.remove("hoverVerde")
                e.target.classList.remove("hoverVerde");
                $buttons.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.removeAttribute("disabled");
                    }
                })
                defineNextLetter()
            }, 2000);
        } else {
            $intentosNumber[0].textContent = parseInt($intentosNumber[0].textContent) - 1;
            ErrorCounter++;
            $wrongSound.play();
            $buttons.forEach(el => {
                el.disabled = true
            })
            $theWord.classList.add("hoverRed");
            $space.forEach(el => {
                if (el.textContent == "__") {
                    console.info(el.textContent)
                    el.setAttribute("data-re", "true")
                    el.innerHTML = e.target.textContent;
                }
            })
            setTimeout(() => {
                $space.forEach(el => {
                    if (el.getAttribute("data-re") == "true") {
                        el.innerHTML = "__";
                        el.removeAttribute("data-re")
                    }
                })
                e.target.classList.remove("hoverRed");
                $theWord.classList.remove("hoverRed")
                $buttons.forEach(e => {
                    e.removeAttribute("disabled")
                })
            }, 2000);
            e.target.classList.add("hoverRed");
            if ($intentosNumber[0].textContent == 1) {
                $intentoText.innerHTML = "Intento:"
            }
            if ($intentosNumber[0].textContent == 0) {
                $buttons.forEach(e => {
                    e.disabled = true;
                    e.classList.add("hoverRed");
                })
                $intento.classList.add("swing");
                $ceroIntentos.play()
                setTimeout(() => {
                    $buttons.forEach(e => {
                        e.classList.remove("hoverRed");
                        e.removeAttribute("disabled");
                        $intentoText.innerHTML = "Intentos:"
                        $intentosNumber[0].innerHTML = 3;
                    })
                    defineNextLetter()
                    $intento.classList.remove("swing")
                }, 2000);
            }
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
            let $messengerInformation = document.querySelector(".messengerInformation");
            $messengerInformation.removeAttribute("style");
            $messengerInformation.classList.add("AnimationMessengerInformation");
        }, 4000);
    }, 0);
}, 1500);


let $img = document.querySelector(".palabra > img")
function missingSyllable(halfSyllable, CompleteSyllable, array) {
    totalTimes++
    $space[0].innerHTML = "__";
    $space[1].innerHTML = halfSyllable;
    $img.src = `../../../../img/player/${CompleteSyllable}.png`;
    for (let i = 0; i < $buttons.length; i++) {
        $buttons[i].innerHTML = array[i];
    }
    return $tableContainer.setAttribute("data-CompleteSyllable", CompleteSyllable);
}
document.addEventListener("DOMContentLoaded", e => {
    let array0 = ["in", "mi", "ni", "na", "np"]
    missingSyllable("ño", "niño", [...array0])
}) 