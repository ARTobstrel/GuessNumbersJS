// Получение случайного числа от 1 до 100 включительно
function guessedNumber() {
    let rand = Math.floor(100 * Math.random()) + 1;
    console.log(rand);
    return rand;
}

// Получение случайного числа в диапазоне от мин к макс
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

// Функция преобразования введенного текста в целое число
function stringToInt(value) {
    val = Number.parseInt(value);
    return val;
}

// Функция выводит все введенные пользователем цифры
function all_input_numbers(all_nums) {
    let y = '';
    for (let i of all_nums) {
        y += (i + ' ');
    }
    return y;
}

// Функция выбирает случайное сообщение из массива, messages.js
function select_random_mes(mes_array) {
    index = Math.floor(Math.random() * mes_array.length);
    return mes_array[index];
}

// Функция правильно склоняет предложение в случае угадывания за 3 и менее попыток
function getStringCounter(counter) {
    if (counter === 1) {
        return ' одной попытки';
    }

    if (counter === 2) {
        return ' двух попыток';
    }

    if (counter === 3) {
        return ' трёх попыток';
    }

    else {
        return ' невероятного числа попыток'
    }
}


// Функция добавляет в начале каждого сообщения переход на новую строку
function getBR(text) {
    return (`<br>${text}`);
}

// Функция проверяет активацию бонусной игры
// если бонусная игра активна, то сделать видимой соответствующую кнопку.
function checkBonusGame() {
    // если пользователь ранее открыл бонусную игру, то по умолчанию она будет доступна всегда
    if (localStorage.getItem('bonusGameGuessNumber')) {
        bonus_game = true;
    }
    if (bonus_game) {
        document.getElementById('btn-bonusgame').style.visibility = 'visible';
        localStorage.setItem("bonusGameGuessNumber", true);
    }
    else {
        document.getElementById('btn-bonusgame').style.visibility = 'hidden';
        localStorage.removeItem("bonusGameGuessNumber");
    }
}


// Функция проверяет ввод скрытых команд
function checkFeatures(value) {
    if (value === PRINT) { // активация/деактивация вывода пользовательских цифр
        if (input_print) {
            input_print = false;
            window_out.innerHTML += getBR('input_print = false')
        }
        else {
            input_print = true;
            window_out.innerHTML += getBR('input_print = true')
        }
        return GAGE;
    }
    if (value === BONUS) { // активация/деактивация бонусной игры
        if (bonus_game) {
            bonus_game = false;
            localStorage.removeItem("bonusGameGuessNumber");
            window_out.innerHTML += getBR('bonus_game = false')
        }
        else {
            bonus_game = true;
            window_out.innerHTML += getBR('bonus_game = true')
        }
        checkBonusGame();
        return GAGE;
    }

    if (value === AUTHOR) {
        window_out.innerHTML += getBR('Fadeev Artem');
        return GAGE;
    }

    if (value === KEYBOARD) {
        keybord.style.visibility = 'visible';
        window_out.innerHTML += getBR('keybord = true');
        return GAGE;
    }

    if (value === GETNUMS) {
        all_nums = 'nums: ' + all_input_numbers(setNum);
        window_out.innerHTML += getBR(all_nums);
        return GAGE;
    }

    // if (value.slice(0, 9) === FONTCOLOR) {
    //     window_out.innerHTML += getBR('OK');
    //     return GAGE
    // }

    return value;
}


// Функция очищает окно для ввода цифр
function clearUserValue() {
    value_user.value = '';
}

// Функция проверок и изменений игровых условий и генерации игровых сообщений
function getWindowMessage(input_number) {
    //если игра активна
    if (active_game) {

        // если введен GAGE то ничего не выводить
        if (input_number === GAGE) {
            return '#';
        }

        // введены буквы вместо цифр
        if (isNaN(input_number)) {
            return select_random_mes(MESSAGE.not_number_mes);
        }

        // введено число меньше 1 или больше 100
        if (input_number < 1 || input_number > 100) {
            return select_random_mes(MESSAGE.out_of_range_mes);
        }

        // число введено повторно
        if (setNum.has(input_number)) {
            let y = select_random_mes(MESSAGE.already_exists_mes);
            return y.replace('num', input_number);
        }

        // введенное число равно загаданому числу
        if (input_number === number_in_memory) {
            setNum.add(input_number);
            active_game = false;
            input_frame.style.visibility = 'hidden';
            counter++;

            //если количество попыток не превышает 3 то запустить бонусную игру
            if (counter <= 3) {
                bonus_game = true;
                checkBonusGame();
                font_color = 'blue';
                return select_random_mes(MESSAGE.bonus_mes);
            } else {
                return select_random_mes(MESSAGE.win_mes);
            }
        }

        // введенное число больше загаданного числа
        if (input_number > number_in_memory) {
            setNum.add(input_number);
            counter++;
            return select_random_mes(MESSAGE.less_mes);
        }

        // введенное число меньше загаданного числа
        if (input_number < number_in_memory) {
            setNum.add(input_number);
            counter++;
            return select_random_mes(MESSAGE.more_mes);
        }
    } else {
        // игра не активна, значит вывести приветственное сообщение
        if (input_number === GAGE) {
            return '#';
        }
        return select_random_mes(MESSAGE.welcome_mes);
    }
}

function getWindowMessageBonus(input_number, comp_number) {

    if (comp_number === input_number) {
        return select_random_mes(MESSAGE.win_bonus_mes);
    }

    if (comp_number < input_number) {
        min_value = comp_number + 1;
        return select_random_mes(MESSAGE.more_mes);
    }

    if (comp_number > input_number) {
        max_value = comp_number - 1;
        return select_random_mes(MESSAGE.less_mes);
    }
}