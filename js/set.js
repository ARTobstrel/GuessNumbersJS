// Основные настройки игры
active_game = false;
bonus_game = false;
counter = 0;
setNum = new Set();


//Создание переменных
let window_message;
let window_out = document.getElementById('screen-out'); // создание переменной window_out в которой будут передаваться все сообщения
let htmltext; // переменная с текстом который попадет в window_message
let all_nums;
let max_value = 1000;
let min_value = 1;
let notEqual = true;
let comp_number;

if (bonus_game) {
    document.getElementById('btn-bonusgame').style.visibility = 'visible';
}