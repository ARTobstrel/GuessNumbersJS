// Основные настройки игры
let settings = {
    'active_game': false,
    'bonus_game': false,
    'counter': 0,
    'setNum': new Set(),
}

// создание переменной для хранения сообщений
let window_message;
window_message = MESSAGE.welcome_mes;

// создание переменной window_out в которой будут передаваться все сообщения, так же вывод на экран приветственного сообщения
let window_out = document.getElementById('screen-out');
window_out.innerHTML = window_message;

// Присвоение событий кнопке 'new game'
document.getElementById('btn-newgame').onclick = function () {
    document.getElementById('btn').style.visibility = 'visible';
    settings.active_game = true;
    settings.bonus_game = false;
    settings.counter = 0;
    number_in_memory = guessedNumber();
    window_out.innerHTML = MESSAGE.start;
};

// Присвоение события кнопке 'Send'
document.getElementById('btn').onclick = function () {
    value = document.getElementById('input-text').value;
    input_number = stringToInt(value);
    window_out.innerHTML = getWindowMessage(input_number);
    for (let i of settings.setNum) {
        console.log(i);
    }
}