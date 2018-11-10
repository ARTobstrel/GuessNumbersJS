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

// Функция проверок и изменений игровых условий и генерации игровых сообщений
function getWindowMessage(input_number) {
    //если игра активна
    if (active_game) {

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
            document.getElementById('input-frame').style.visibility = 'hidden';
            counter++;

            //количество попыток не превышает 3 то запустить бонусную игру
            if (counter <= 3) {
                bonus_game = true;
                document.getElementById('btn-bonusgame').style.visibility = 'visible';
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

        return select_random_mes(MESSAGE.welcome_mes);
    }
}

function getWindowMessageBonus(input_number, comp_number) {

    if (comp_number === input_number) {
        notEqual = false;
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