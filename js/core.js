// Основные настройки игры
let settings = {
    'active_game': false,
    'bonus_game': false,
    'counter': 0,
    'setNum': new Set(),
}

// Присвоение событий кнопке 'new game'
document.getElementById('btn-newgame').onclick = function () {
    document.getElementById('btn').style.visibility = 'visible';
    settings.active_game = true;
    settings.bonus_game = false;
    settings.counter = 0;
    number_in_memory = guessedNumber();
    console.log(number_in_memory);
    console.log(MESSAGE.start);
};

// Присвоение события кнопке 'Send'
document.getElementById('btn').onclick = mainStackGame;

