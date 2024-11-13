const countdownElement = document.querySelector(".countDownBody > div > h2");
export let $countDownBody = document.querySelector(".countDownBody");

//Funciones de ventana modal para contar de 3 a 1
export function _1_3() {
    let CountdownNext = document.querySelector(".countDownNext");
    localStorage.setItem("pauseTime",CountdownNext.textContent )

    let count = 3;
    speechSynthesis.cancel()
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


