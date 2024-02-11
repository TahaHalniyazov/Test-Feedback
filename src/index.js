
// import Inputmask from 'inputmask'
import './index.html'; 
import './index.sass'; 


// Inputmask("+7 (999) 999-99-99").mask("#phone");



const myForm = document.forms["form"];
const formArr = Array.from(form);
const validFormArr = [];
const button = myForm.elements["button"];

formArr.forEach((el) => {
        if (el.hasAttribute("data-reg")) {
        el.setAttribute("is-valid", "0");
        validFormArr.push(el);
    }
});

myForm.addEventListener("input", inputHandler);
button.addEventListener("click", buttonHandler);

function inputHandler({ target }) {
    if (target.hasAttribute("data-reg")) {
        inputCheck(target);
    }
}

function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    if (reg.test(inputValue)) {
        el.setAttribute("is-valid", "1");
        el.style.border = "2px solid rgb(0, 196, 0)";
    } else {
        el.setAttribute("is-valid", "0");
        el.style.border = "2px solid rgb(255, 0, 0)";
    }
}

function buttonHandler(e) {
    const allValid = validFormArr.map(el => el.getAttribute("is-valid"));
    const isAllValid = allValid.every(valid => valid === "1");
    console.log(isAllValid);
        if (!isAllValid) {
        e.preventDefault();
    }
}

// const body = document.body;

// const clickBtn = document.querySelector("#click");

// clickBtn.addEventListener("click", isChecked);

// function isChecked () {
//     if (clickBtn.checked) {
//         body.classList.add("lock");
//     }
//     else {
//         body.classList.remove("lock")
//     }
// }

const clickBtn = document.querySelector("#click");
const modal = document.querySelector(".modal");

clickBtn.addEventListener("change", function() {
    if (clickBtn.checked) {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        modal.classList.add("open");
        document.body.classList.add("modal-open");
    } else {
        document.body.style.paddingRight = "";
        modal.classList.remove("open");
        document.body.classList.remove("modal-open");
    }
}); 





document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");

    form.addEventListener("submit", async function(event) {
        event.preventDefault(); // Отменяем стандартное поведение формы

        // Создаем объект FormData для сбора данных из формы
        const formData = new FormData(form);

        try {
            // Отправляем данные на сервер с помощью Fetch API
            const response = await fetch('http://localhost:9090/api/registration', {
                method: 'POST',
                body: formData
            });

            // Преобразуем ответ сервера в JSON
            const data = await response.json();

            // Обрабатываем ответ от сервера
            if (data.status === "success") {
                // Если успешно, очищаем поля формы и выводим сообщение об успехе
                form.reset();
                alert("Ваша заявка успешно отправлена");
            } else if (data.status === "error") {
                // Если есть ошибки, обрабатываем их и выводим соответствующие сообщения
                for (const field in data.fields) {
                    const errorMessage = data.fields[field];
                    // Здесь можно выводить сообщения об ошибке например под каждым полем формы
                    // Например: const input = form.querySelector(`[name="${field}"]`);
                    // input.nextElementSibling.textContent = errorMessage;
                    
                    alert(errorMessage);
                }
            }
        } catch (error) {
            // В случае ошибки выводим сообщение об ошибке
            console.error('Ошибка при отправке формы:', error);
        }
    });
});

function resetInputStyles() {
    const form = document.getElementById("form");
    const formInputs = form.querySelectorAll("input[data-reg]");

    formInputs.forEach(input => {
        input.style.border = ""; // Сбрасываем стиль границы инпута
    });
}


















