const min = document.querySelector(".min-num");
const max = document.querySelector(".max-num");
const input = document.querySelector("#guess-input");
const message = document.querySelector(".message");
const btn = document.querySelector("#guess-btn");
const randomNumber=Math.floor(Math.random()*(10-1)+1);
min.innerText=1;
max.innerText=10;
let attempt=3;

btn.addEventListener("click", function(){
    const inputNumber=parseInt(input.value);

    if (isNaN(inputNumber) || inputNumber > 10 || inputNumber < 1) {
        warningTxt(`Введите число от 1 до 10!`, "red");
    }
    else if (inputNumber != randomNumber) {
        attempt--;
        warningTxt(`Вы не угадали число. Осталось попыток: ${attempt}`, "red");
    }
    if (attempt===0) {
        warningTxt(`Вы проиграли. Загаданное число: ${randomNumber}!`, "red");
        btnTxt(`Новая игра`, "red");
        input.disabled=true;
        input.style.border="1px solid red";
        input.value="";
        btn.addEventListener("click", ()=>window.location.reload());
    }
    if (randomNumber===inputNumber) {
        warningTxt(`Поздравляем!Вы угадали число: ${inputNumber}!`, "green");
        btnTxt(`Новая игра`, "green");
        input.disabled=true;
        input.style.border="1px solid green";
        input.value="";
        btn.addEventListener("click", ()=>window.location.reload());
    }
    function btnTxt(txt, color) {
        btn.innerText=txt;
        input.style.color=color;

    }
    function warningTxt (txt, color) {
        message.textContent=txt;
        message.style.color=color;
    }
})