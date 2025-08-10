let minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');

document.querySelector('#btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber}?`;
    gameRun = true;
})

document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ? //рандомная фраза
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const textRandom = Math.round(Math.random() * 3);
            const phraseAnswer = (textRandom === 0) ? `Вы загадали число ${answerNumber}?` :
                (textRandom === 1) ? `Это число ${answerNumber}?` :
                    `Я думаю это число ${answerNumber}?`;

            answerField.innerText = phraseAnswer;
            gameRun = true;
        }
    }
})

document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber + 0;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const textRandom = Math.round(Math.random() * 3);
            const phraseAnswer = (textRandom === 0) ? `Вы загадали число ${answerNumber}?` :
                (textRandom === 1) ? `Это число ${answerNumber}?` :
                    `Я думаю это число ${answerNumber}?`;

            answerField.innerText = phraseAnswer;
            gameRun = true;
        }
    }
})

document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun) {
        const randomPhrase = Math.round(Math.random() * 3);
        const Answer = (randomPhrase === 0) ? `Я всегда угадываю\n\u{1F60E}` :
            (randomPhrase === 1) ? `Я же говорил, что угадаю \n\u{1F60E}` :
                `Я молодец\n\u{1F60E}`;

        answerField.innerText = Answer;
        gameRun = false;
    }
})

