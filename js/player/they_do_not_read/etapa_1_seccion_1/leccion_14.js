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


let totalTimes = 0;
let acceptedPoints = 0;

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

let $dataValidation = document.querySelector(`.numberUsed`);

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
        let texto = `Leer la lectura y contesta las preguntas.`;
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
        if (incorrectCounter == 0) {
            $correctFailed.innerHTML = `Has acertado ${acceptedPoints} veces y no has cometido ningún error.`;
        } else if (incorrectCounter == 1) {
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


document.addEventListener("DOMContentLoaded", async (e) => {
    if (localStorage.getItem("lectura") === null) {
        localStorage.setItem("lectura", null);
    }
});

function voiceLectura() {
    let texto = `${localStorage.getItem("lectura")}.`;
    const hablar = (texto) =>
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    return hablar(texto);
}


function messengerForUser(voz) {
    let texto = voz;
    const hablar = (texto) =>
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    return hablar(texto);
}

document.addEventListener("click", e => {
    if (e.target.matches(".repeatVerso")) {
        let vozRepeat = `Encuentra el elemento oculto que es diferente a los demás.`;
        messengerForUser(vozRepeat)
    }
    if (e.target.matches(".cuidado")) {
        let vozCuidado = "¡Cuidado!. ¿Vas a abandonar tu lección y perderás todo el progreso?. ¿Estás seguro de que quieres abandonar?";
        messengerForUser(vozCuidado)
    }


    if (e.target.matches(".siguiente")) {
        let $continue = document.querySelector(".siguiente");
        let $last = document.querySelector(".last");
        let $first = document.querySelector(".first");
        $first.style.display = "none";
        $last.classList.add("animationBounceOut");
        $last.removeAttribute("style");
        $sonidoSiguiente.play();
    }

    if(e.target.matches(".repeatReading")){
        let voiceFullReading = $titleLectura.textContent + $paragrahLectura.textContent;
        messengerForUser(voiceFullReading) 
    }

    if(e.target.matches(".repeatquestion")){
        let voiceTitleQuestion = $titleQuestion.textContent;
        messengerForUser(voiceTitleQuestion)
    }
});

let $titleLectura = document.querySelector(".title > em");
let $paragrahLectura = document.querySelector(".read > p");
let $titleQuestion = document.querySelector(".questions > h4 > em");
let $seleccionMultiple = document.querySelectorAll(".questions > div > button");
let $seleccionMultipleImg = document.querySelectorAll(".questions > div > button > img");

function readingStructure(title, paragrah, tituloPreguntas,seleccionMultipleImg, trueAnswers) {
    totalTimes++;
    $titleLectura.innerHTML = title;
    $paragrahLectura.innerHTML = paragrah;
    $titleQuestion.innerHTML = tituloPreguntas
    for (let i = 0; i < 3; i++) {
        if (trueAnswers == i) {
            $seleccionMultipleImg[i].src = seleccionMultipleImg[i]
            $seleccionMultipleImg[i].setAttribute("data-statu", "true");
            continue;
        }
        $seleccionMultipleImg[i].setAttribute("data-statu", "false")
        $seleccionMultipleImg[i].src = seleccionMultipleImg[i]
    }
}

//Lecturas
let readingMyLionJulio = {
    forVoice: ["Mi leon Julio. Este es mi león, mi león se llama Julio. Julio es muy peligroso. Es de color anaranjado. A Julio le gusta gobernar y comer carne."],
    reading: {
        title: " Mi leon Julio.",
        paragrah: `Este es mi león, mi león se llama Julio. <br> Julio es muy peligroso. Es de color amarillo. <br> A Julio le gusta gobernar y comer carne.`
    },
    questionStructure: {
        title: ["¿Quien es julio?", "¿De que color es Julio?", "¿Como es Julio?", "¿Que le gusta a Julio?"],
        imagesAnswers: [["../../../../img/player/imagesLeccion9/lion.png","../../../../img/player/imagesLeccion9/cat.png","../../../../img/player/imagesLeccion9/dog.png"]
                        ,["../../../../img/player/imagesLeccion9/lion_black.png","../../../../img/player/imagesLeccion9/lion.png","../../../../img/player/imagesLeccion9/lion_orange.png"],
                        ["../../../../img/player/imagesLeccion9/lion_fuerte.png","../../../../img/player/imagesLeccion9/lion_peligroso.png","../../../../img/player/imagesLeccion9/lion.png"],
                         ["../../../../img/player/imagesLeccion9/lion_eat.png","../../../../img/player/imagesLeccion9/lion_sing.png","../../../../img/player/imagesLeccion9/lion_slep.png"]
                        ],
        textResponses: [["Un leon.", "Un gato.", "Un Perro."], ["Negro.", "Amarillo", "Anaranjado"], ["Fuerte", "Peligroso", "Amistoso."], ["Gobernar y comer carne.", "Cantar por las mañanas", "Dormir en las tardes."]],
        correctAnswers: [0, 1, 1, 0]
    }
}

document.addEventListener("DOMContentLoaded", e => readingStructure(readingMyLionJulio.reading.title, readingMyLionJulio.reading.paragrah, 
                         readingMyLionJulio.questionStructure.title[0], readingMyLionJulio.questionStructure.imagesAnswers[0],
                         readingMyLionJulio.questionStructure.correctAnswers[0]))

let readingMyFriend = {
    reading: {
        title: "Mi amigo.",
        paragrah: `Mi amigo se llama Manuel, es un gran amigo. <br>Tiene cinco años. Manuel juega al fútbol.<br> Nos divertimos mucho juntos. Y cuando terminamos<br> de jugar, siempre me acompaña a casa.`
    },
    questionStructure: {
        title: ["¿Cual es el nombre de mi amigo?", "¿Cuantos años tiene mi amigo?", "¿Que juega Manuel?", "¿¿A dónde me acompaña siempre Manuel?"],
        textResponses: [["Manuel", "Jose", "Mario"], ["3 años", "10 años", "5 años"], ["Futbol", "VideoJuegos", "Balocesto"], ["A mi casa", "A nuestro colegio", "A la casa de un amigo."]],
        correctAnswers: [0, 2, 0, 0]
    }
}

let readingMyDearTeacher = {
    reading: {
        title: "Mi querida maestra.",
        paragrah: "Mi maestra tiene 25 años y siempre nos saluda con una sonrisa, <br> lleva zapatos rosas. Cuando mis amigos y yo estamos <br> tristes, nos lee un cuento y nos llena de abrazos."
    },
    questionStructure: {
        title: ["1. ¿Como recibe la maestra a sus alumnos?", "2. ¿De que color son los zapatos de la maestra?", "3. ¿Por que le llena de abrazos la maestra a los niños?", "¿Cuantos años tiene la maestra?"],
        imagesAnswers: [["../../../../img/player/imagesLeccion9/teacher_sing.png","../../../../img/player/imagesLeccion9/teacher_smile.png","../../../../img/player/imagesLeccion9/teache_learning_them.png"],
        ["../../../../img/player/imagesLeccion9/tacones_blue.png","../../../../img/player/imagesLeccion9/tacones_rosa.png","../../../../img/player/imagesLeccion9/tacones_verde.png"],
        ["../../../../img/player/imagesLeccion9/children_sad.png","../../../../img/player/imagesLeccion9/children-happy.png","../../../../img/player/imagesLeccion9/childrens_estudiosos.png"],
        ["../../../../img/player/imagesLeccion9/teacher_age_20.png","../../../../img/player/imagesLeccion9/teache_age_25.png","../../../../img/player/imagesLeccion9/teacher_children_12.png"]],
        textResponses: [["Una cancion", "Una sonrisa", "Con muchas tareas"], ["Azul", "Rosa", "Verde"], ["Estan tristes", "Estan alegres", "Estan estudiosos"], ["20 años", "12 años", "25 años"]],
        correctAnswers: [1, 1, 0, 1]
    }
}

let readingTheFamilyMemo = {
    reading: {
        title: "La familia de Memo.",
        paragrah: `Susi es la mamá de Memo. Ema quiere a Memo <br>y a Mami, Mami mima a Mimi. Ema y Mimi son hermanas<br> de Memo, su papá
                se llama Juan y quiere<br> mucho a Susi. Juan y Susi quieren mucho a sus hijos.`
    },
    questionStructure: {
        title: ["¿Como se llama la mamà de Memo?", "¿Cual es el nombre del hermano de Ema y Mimi?", "¿Como se llama el papà de Ema?", "¿Como se llaman los padres de Ema, Mimi y memo?"]
        , textResponses: [["Ema", "Susy", "Mimi"], ["Juan", "Jose", "Memo"], ["Juan", "Oscar", "Jose"], ["Juan y susi", "Memo y Maria", "Juan y Mimi"]],
        correctAnswers: [1, 2, 0, 0]
    }
}

let readingTheKite = {
    reading: {
        title: "La cometa.",
        paragrah: `El padre de Rafael le regaló una cometa. Rafael se siente muy feliz cuando la vuela. <br>
                    Un día, cuando Rafael vuela su cometa, la cuerda se rompe accidentalmente. <br>
                    La cometa sube al cielo y Rafael intenta alcanzarla corriendo. Si lo logro.`
    },
    questionStructure: {
        title: ["¿Qué le dieron a Rafael?", "¿Cómo se sintia Rafael cuando utilizaba su cometa?", "¿Qué pasó con la cometa?", "¿Logró Rafael recuperarla al final?"],
        imagesAnswers: [["../../../../img/player/imagesLeccion9/book.png","../../../../img/player/imagesLeccion9/video-juego.png","../../../../img/player/imagesLeccion9/kite.png"],
                        ["../../../../img/player/imagesLeccion9/boy_happy.png","../../../../img/player/imagesLeccion9/niño-obligado.png","../../../../img/player/imagesLeccion9/niño_enojado.png"],
                        ["../../../../img/player/imagesLeccion9/kite_break.png","../../../../img/player/imagesLeccion9/kite.png","../../../../img/player/imagesLeccion9/niños_volando_cometa.png"],
                        ["../../../../img/player/imagesLeccion9/niño_no.png","../../../../img/player/imagesLeccion9/niño_mas_menos.png","../../../../img/player/imagesLeccion9/niño_si.png"]],
        textResponses: [["Un libro", "Un videoJuego", "Una cometa"], ["Feliz", "enojado", "Obligado"], ["La cuerda se rompió", "Se quemo", "Lo regalò"], ["No", "No, pero al menos lo intento.", "Si"]],
        correctAnswers: [2, 0, 0, 2]
    }
}
let $questions = document.querySelector(".questions")
let $nextLectura = document.querySelector(".nextLectura")

document.addEventListener("mousemove", (e) => {
    if (e.target.matches(".nextLectura") || e.target.matches(".questions > div  > button")) {
        $letterSound.play();

    }
});
let $read = document.querySelector(".read")
async function defineNext() {
    switch ($nextLectura.getAttribute("data-next-lectura")) {
        case "0":
            switch ($nextLectura.getAttribute("data-view")) {
                case "1":
                    $questions.removeAttribute("style");
                    $read.removeAttribute("style")
                    $nextLectura.style.display = "none";
                    readingStructure(readingMyLionJulio.reading.title, readingMyLionJulio.reading.paragrah, 
                        readingMyLionJulio.questionStructure.title[0], readingMyLionJulio.questionStructure.imagesAnswers[0],
                        readingMyLionJulio.questionStructure.correctAnswers[0])
                    $nextLectura.setAttribute("data-view", "2")
                    break;
                case "2":
                    readingStructure(readingMyLionJulio.reading.title, readingMyLionJulio.reading.paragrah, readingMyLionJulio.questionStructure.title[1],
                        readingMyLionJulio.questionStructure.imagesAnswers[1], readingMyLionJulio.questionStructure.correctAnswers[1]);
                    $nextLectura.setAttribute("data-view", "3")
                    break;
                case "3":
                    readingStructure(readingMyLionJulio.reading.title, readingMyLionJulio.reading.paragrah, readingMyLionJulio.questionStructure.title[2],
                        readingMyLionJulio.questionStructure.imagesAnswers[2], readingMyLionJulio.questionStructure.correctAnswers[2]);
                    $nextLectura.setAttribute("data-view", "4")
                    break;
                case "4":
                    readingStructure(readingMyLionJulio.reading.title, readingMyLionJulio.reading.paragrah, readingMyLionJulio.questionStructure.title[3],
                        readingMyLionJulio.questionStructure.imagesAnswers[3], readingMyLionJulio.questionStructure.correctAnswers[3]);
                    $nextLectura.setAttribute("data-view", "5");
                    break;
                case "5":
                    randomNumber = Math.floor(Math.random() * 5);
                    $nextLectura.setAttribute("data-next-lectura", randomNumber);
                    $nextLectura.removeAttribute("style")
                    $nextLectura.innerHTML = `Comenzar con la siguiente lectura <i class="bi bi-caret-right"></i>`
                    $nextLectura.setAttribute("data-view", 1)
                    $questions.style.display = "none"
                    $read.style.display = "none"
                    $containerNext.removeAttribute("style");
                    break;
            }
            break;
        case "1":

            switch ($nextLectura.getAttribute("data-view")) {
                case "1":
                    $read.removeAttribute("style")
                    $questions.removeAttribute("style");
                    $nextLectura.style.display = "none";
                    readingStructure(readingMyFriend.reading.title, readingMyFriend.reading.paragrah, readingMyFriend.questionStructure.title[0],
                        readingMyFriend.questionStructure.textResponses[0], readingMyFriend.questionStructure.correctAnswers[0]);
                    $nextLectura.setAttribute("data-view", "2")
                    break;
                case "2":
                    readingStructure(readingMyFriend.reading.title, readingMyFriend.reading.paragrah, readingMyFriend.questionStructure.title[1],
                        readingMyFriend.questionStructure.textResponses[1], readingMyFriend.questionStructure.correctAnswers[1]);
                    $nextLectura.setAttribute("data-view", "3")
                    break;
                case "3":
                    readingStructure(readingMyFriend.reading.title, readingMyFriend.reading.paragrah, readingMyFriend.questionStructure.title[2],
                        readingMyFriend.questionStructure.textResponses[2], readingMyFriend.questionStructure.correctAnswers[2]);
                    $nextLectura.setAttribute("data-view", "4")
                    break;
                case "4":
                    readingStructure(readingMyFriend.reading.title, readingMyFriend.reading.paragrah, readingMyFriend.questionStructure.title[3],
                        readingMyFriend.questionStructure.textResponses[3], readingMyFriend.questionStructure.correctAnswers[3]);
                    $nextLectura.setAttribute("data-view", "5")
                    break;
                case "5":
                    randomNumber = Math.floor(Math.random() * 5);
                    $nextLectura.setAttribute("data-next-lectura", randomNumber);
                    $nextLectura.removeAttribute("style")
                    $nextLectura.innerHTML = `Comenzar con la siguiente lectura <i class="bi bi-caret-right"></i>`
                    $nextLectura.setAttribute("data-view", 1)
                    $questions.style.display = "none"
                    $read.style.display = "none"
                    $containerNext.removeAttribute("style");
                    break;
                default:
                    break;
            }
            break
        case "2":

            switch ($nextLectura.getAttribute("data-view")) {
                case "1":
                    $read.removeAttribute("style")
                    $questions.removeAttribute("style");
                    $nextLectura.style.display = "none";
                    readingStructure(readingMyDearTeacher.reading.title, readingMyDearTeacher.reading.paragrah, readingMyDearTeacher.questionStructure.title[0],
                        readingMyDearTeacher.questionStructure.imagesAnswers[0], readingMyDearTeacher.questionStructure.correctAnswers[0]);
                    $nextLectura.setAttribute("data-view", "2")
                    break;
                case "2":
                    readingStructure(readingMyDearTeacher.reading.title, readingMyDearTeacher.reading.paragrah, readingMyDearTeacher.questionStructure.title[1],
                        readingMyDearTeacher.questionStructure.imagesAnswers[1], readingMyDearTeacher.questionStructure.correctAnswers[1]);
                    $nextLectura.setAttribute("data-view", "3")
                    break;
                case "3":
                    readingStructure(readingMyDearTeacher.reading.title, readingMyDearTeacher.reading.paragrah, readingMyDearTeacher.questionStructure.title[2],
                        readingMyDearTeacher.questionStructure.imagesAnswers[2], readingMyDearTeacher.questionStructure.correctAnswers[2]);
                    $nextLectura.setAttribute("data-view", "4")
                    break;
                case "4":
                    readingStructure(readingMyDearTeacher.reading.title, readingMyDearTeacher.reading.paragrah, readingMyDearTeacher.questionStructure.title[3],
                        readingMyDearTeacher.questionStructure.imagesAnswers[3], readingMyDearTeacher.questionStructure.correctAnswers[3]);
                    $nextLectura.setAttribute("data-view", "5")
                    break;
                case "5":
                    randomNumber = Math.floor(Math.random() * 5);
                    $nextLectura.setAttribute("data-next-lectura", randomNumber);
                    $nextLectura.removeAttribute("style")
                    $nextLectura.innerHTML = `Comenzar con la siguiente lectura <i class="bi bi-caret-right"></i>`
                    $nextLectura.setAttribute("data-view", 1)
                    $questions.style.display = "none"
                    $read.style.display = "none"
                    $containerNext.removeAttribute("style");
                    break;
                default:
                    break;
            }
            break
        case "3":

            switch ($nextLectura.getAttribute("data-view")) {
                case "1":
                    $read.removeAttribute("style")
                    $questions.removeAttribute("style");
                    $nextLectura.style.display = "none";
                    readingStructure(readingTheFamilyMemo.reading.title, readingTheFamilyMemo.reading.paragrah, readingTheFamilyMemo.questionStructure.title[0],
                        readingTheFamilyMemo.questionStructure.textResponses[0], readingTheFamilyMemo.questionStructure.correctAnswers[0]);
                    $nextLectura.setAttribute("data-view", "2")
                    break;
                case "2":
                    readingStructure(readingTheFamilyMemo.reading.title, readingTheFamilyMemo.reading.paragrah, readingTheFamilyMemo.questionStructure.title[1],
                        readingTheFamilyMemo.questionStructure.textResponses[1], readingTheFamilyMemo.questionStructure.correctAnswers[1]);
                    $nextLectura.setAttribute("data-view", "3")
                    break;
                case "3":
                    readingStructure(readingTheFamilyMemo.reading.title, readingTheFamilyMemo.reading.paragrah, readingTheFamilyMemo.questionStructure.title[2],
                        readingTheFamilyMemo.questionStructure.textResponses[2], readingTheFamilyMemo.questionStructure.correctAnswers[2]);
                    $nextLectura.setAttribute("data-view", "4")
                    break;
                case "4":
                    readingStructure(readingTheFamilyMemo.reading.title, readingTheFamilyMemo.reading.paragrah, readingTheFamilyMemo.questionStructure.title[3],
                        readingTheFamilyMemo.questionStructure.textResponses[3], readingTheFamilyMemo.questionStructure.correctAnswers[3]);
                    $nextLectura.setAttribute("data-view", "5")
                    break;
                case "5":

                    randomNumber = Math.floor(Math.random() * 5);
                    $nextLectura.setAttribute("data-next-lectura", randomNumber);
                    $nextLectura.removeAttribute("style")
                    $nextLectura.innerHTML = `Comenzar con la siguiente lectura <i class="bi bi-caret-right"></i>`
                    $nextLectura.setAttribute("data-view", 1)
                    $questions.style.display = "none"
                    $read.style.display = "none"
                    $containerNext.removeAttribute("style");
                    break;
                default:
                    break;
            }
            break
        case "4":

            switch ($nextLectura.getAttribute("data-view")) {
                case "1":
                    $read.removeAttribute("style")
                    $questions.removeAttribute("style");
                    $nextLectura.style.display = "none";
                    readingStructure(readingTheKite.reading.title, readingTheKite.reading.paragrah, readingTheKite.questionStructure.title[0],
                        readingTheKite.questionStructure.imagesAnswers[0], readingTheKite.questionStructure.correctAnswers[0]);
                    $nextLectura.setAttribute("data-view", "2")
                    break;
                case "2":
                    readingStructure(readingTheKite.reading.title, readingTheKite.reading.paragrah, readingTheKite.questionStructure.title[1],
                        readingTheKite.questionStructure.imagesAnswers[1], readingTheKite.questionStructure.correctAnswers[1]);
                    $nextLectura.setAttribute("data-view", "3")
                    break;
                case "3":
                    readingStructure(readingTheKite.reading.title, readingTheKite.reading.paragrah, readingTheKite.questionStructure.title[2],
                        readingTheKite.questionStructure.imagesAnswers[2], readingTheKite.questionStructure.correctAnswers[2]);
                    $nextLectura.setAttribute("data-view", "4")
                    break;
                case "4":
                    readingStructure(readingTheKite.reading.title, readingTheKite.reading.paragrah, readingTheKite.questionStructure.title[3],
                        readingTheKite.questionStructure.imagesAnswers[3], readingTheKite.questionStructure.correctAnswers[3]);
                    $nextLectura.setAttribute("data-view", "5")
                    break;
                case "5":
                    randomNumber = Math.floor(Math.random() * 5);
                    $nextLectura.setAttribute("data-next-lectura", randomNumber);
                    $nextLectura.removeAttribute("style")
                    $nextLectura.innerHTML = `Comenzar con la siguiente lectura <i class="bi bi-caret-right"></i>`
                    $nextLectura.setAttribute("data-view", 1)
                    $questions.style.display = "none"
                    $read.style.display = "none"
                    $containerNext.removeAttribute("style");
                    break;
                default:
                    break;
            }
            break

        default:
            break;
    }
}
document.addEventListener("click", e => {

    if (e.target.matches(".questions > div > button > img")) {

        if (e.target.getAttribute("data-statu") == "true") {
            acceptedPoints++;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }
            e.target.classList.add("hoverVerde");
            $correctSound.play()
            correctCounter++
            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                defineNext()
            }, 2500);
        } else {
            ErrorCounter++
            e.target.classList.add("hoverRed");
            $wrongSound.play()
            $seleccionMultiple.forEach(element => {
                element.disabled = "true"
                if (element.getAttribute("data-statu") == "true") {
                    element.classList.add("hoverVerde");
                }
            });
            setTimeout(() => {
                e.target.classList.remove("hoverRed");
                $seleccionMultiple.forEach(e => {
                    if (e.getAttribute("data-statu") == "true") {
                        e.classList.remove("hoverVerde");
                    }
                    e.removeAttribute("disabled")
                });
                defineNext()
            }, 2500);
        }
    }


    if (e.target.matches(".nextLectura")) {
        defineNext()
    }
})