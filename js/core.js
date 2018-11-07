// Основные настройки игры
let settings = {
    'active_game': false,
    'bonus_game': false,
    'counter': 0,
    'setNum': new Set(),
};

//Создание переменных
let window_message;
window_message = select_random_mes(MESSAGE.welcome_mes); // создание переменной для хранения сообщений
let htmltext; // переменная с текстом который попадет в window_message
let all_nums;
let core_bonus_game = new BonusGame(); //переменная для хранения экземпляра класса BonusGame()
let max_value = 1000;
let min_value = 1;
let notEqual = true;

if (settings.bonus_game) {
    document.getElementById('btn-bonusgame').style.visibility = 'visible';
}

// создание переменной window_out в которой будут передаваться все сообщения, так же вывод на экран приветственного сообщения
let window_out = document.getElementById('screen-out');
window_out.innerHTML = window_message; // выводит приветственное сообщение на экран

// Присвоение событий кнопке 'new game'
document.getElementById('btn-newgame').onclick = function () {

    document.getElementById('input-frame').style.visibility = 'visible';
    settings.bonus_game = false;
    settings.active_game = true;
    settings.counter = 0;
    settings.setNum.clear();
    number_in_memory = guessedNumber();
    window_out.innerHTML = select_random_mes(MESSAGE.start); // выводит стартовое сообщение на экран 
};

// Присвоение события кнопке 'Send'
document.getElementById('btn-send').onclick = function () {
    value = document.getElementById('input-text').value;
    input_number = stringToInt(value);

    // если активна бонусная игра, то срабатывает эта ветка
    if (settings.bonus_game) {

        while (notEqual) {
            let comp_number = randomInteger(min_value, max_value);
            htmltext = select_random_mes(MESSAGE.comp_running_mes).replace('num', comp_number);
            window_out.innerHTML += htmltext;
            htmltext = getWindowMessageBonus(input_number, comp_number);
            window_out.innerHTML += htmltext;
            console.log(comp_number);
        }

    } else {

        // данная команда отоброжает сообщение на экране
        if (input_number === number_in_memory) {

            if (settings.counter <= 3) {
                htmltext = `${getWindowMessage(input_number)}`.replace('number_in_memory', `${number_in_memory}`);
                htmltext = htmltext.replace('counter', `${settings.counter}` + ' попыток');
                window_out.innerHTML = htmltext;

            } else {

                // если игрок угадал число, то экран полностью заменяется новым сообщением, с подстановкой переменных в строку
                htmltext = `${getWindowMessage(input_number)}`.replace('number_in_memory', `${number_in_memory}`); //подстановка загаданного числа
                htmltext = htmltext.replace('counter', `${settings.counter}`); //подстановка количества попыток
                all_nums = all_input_numbers(settings.setNum) + '';
                htmltext = htmltext.replace('all_input_numbers', `${all_nums}`); //подстановка введенных цифр
                window_out.innerHTML = htmltext;
            }

        } else {
            // в ином случае сообщения будут выводится друг за другом
            window_out.innerHTML += (`<br>${getWindowMessage(input_number)}`);
        }


        document.getElementById('input-text').value = ''; // очищает поле ввода цифр
    }

};//end event onclick


// Присвоение события кнопке 'Bonus'
document.getElementById('btn-bonusgame').onclick = function () {
    //Вывод на экран правил игры
    window_out.style.color = 'blue';
    window_out.innerHTML = select_random_mes(MESSAGE.start_bonus_mes);

    document.getElementById('input-frame').style.visibility = 'visible';
    settings.active_game = false;
    settings.counter = 0;
    settings.setNum.clear();

};