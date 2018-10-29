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
window_out.innerHTML = window_message; // выводит приветственное сообщение на экран

// Присвоение событий кнопке 'new game'
document.getElementById('btn-newgame').onclick = function () {
    document.getElementById('input-frame').style.visibility = 'visible';
    settings.active_game = true;
    settings.bonus_game = false;
    settings.counter = 0;
    settings.setNum.clear();
    number_in_memory = guessedNumber();
    window_out.innerHTML = MESSAGE.start; // выводит стартовое сообщение на экран 
};

// Присвоение события кнопке 'Send'
document.getElementById('btn').onclick = function () {
    value = document.getElementById('input-text').value;
    input_number = stringToInt(value);

    // данная команда отоброжает сообщение на экране
    if (input_number == number_in_memory) {
        // если игрок угадал число, то экран полностью заменяется новым сообщением, с подстановкой переменных в строку
        let htmltext = `${getWindowMessage(input_number)}`.replace('<number_in_memory>', `${number_in_memory}`); //подстановка загаданного числа
        htmltext = htmltext.replace('<counter>', `${settings.counter}`); //подстановка количества попыток
        let all_nums = all_input_numbers(settings.setNum) + '';
        htmltext = htmltext.replace('<all_input_numbers>', `${all_nums}`); //подстановка введенных цифр
        window_out.innerHTML = htmltext;
    } else {
        // в ином случае сообщения будут выводится друг за другом
        window_out.innerHTML += (`<br>${getWindowMessage(input_number)}`);
    }


    document.getElementById('input-text').value = ''; // очищает поле ввода цифр
}