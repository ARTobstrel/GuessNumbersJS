
window_message = select_random_mes(MESSAGE.welcome_mes); //
window_out.innerHTML = window_message; // Выводит первое приветствие при загрузке страницы


// Присвоение событий кнопке 'new game'
document.getElementById('btn-newgame').onclick = function () {

    document.getElementById('input-frame').style.visibility = 'visible';
    set.bonus_game = false;
    set.active_game = true;
    set.counter = 0;
    set.setNum.clear();
    number_in_memory = guessedNumber();
    window_out.innerHTML = select_random_mes(MESSAGE.start); // выводит стартовое сообщение на экран 
};

// Присвоение события кнопке 'Send'
document.getElementById('btn-send').onclick = function () {
    value = document.getElementById('input-text').value;
    input_number = stringToInt(value);

    // если активна бонусная игра, то срабатывает эта ветка
    if (set.bonus_game) {

        while (notEqual) {
            comp_number = randomInteger(min_value, max_value);
            htmltext = select_random_mes(MESSAGE.comp_running_mes).replace('num', comp_number);
            window_out.innerHTML += htmltext;
            htmltext = getWindowMessageBonus(input_number, comp_number);
            window_out.innerHTML += htmltext;
            console.log(comp_number);
        }

    } else {

        // данная команда отоброжает сообщение на экране
        if (input_number === number_in_memory) {

            if (set.counter <= 3) {
                htmltext = `${getWindowMessage(input_number)}`.replace('number_in_memory', `${number_in_memory}`);
                htmltext = htmltext.replace('counter', `${set.counter}` + ' попыток');
                window_out.innerHTML = htmltext;

            } else {

                // если игрок угадал число, то экран полностью заменяется новым сообщением, с подстановкой переменных в строку
                htmltext = `${getWindowMessage(input_number)}`.replace('number_in_memory', `${number_in_memory}`); //подстановка загаданного числа
                htmltext = htmltext.replace('counter', `${set.counter}`); //подстановка количества попыток
                all_nums = all_input_numbers(set.setNum) + '';
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
    set.active_game = false;
    set.counter = 0;
    set.setNum.clear();

};