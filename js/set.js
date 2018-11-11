// Основные настройки игры
let active_game = false;
let bonus_game = false;
let counter = 0;
let setNum = new Set();


//Создание переменных
let window_message;
let window_out = document.getElementById('screen-out'); // создание переменной window_out в которой будут передаваться все сообщения
let htmltext; // переменная с текстом который попадет в window_message
let all_nums;
let max_value = 1000;
let min_value = 1;
let comp_number;


// Если пользователь ранее открыл бонусную игру, то по умолчанию она будет доступна всегда
if (localStorage.getItem('bonusGameGuessNumber')) {
    bonus_game = true;
}

// Если бонусная игра активна, то сделать видимой соответствующую кнопку.
if (bonus_game) {
    document.getElementById('btn-bonusgame').style.visibility = 'visible';
}