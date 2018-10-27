// Определение случайного числа от 1 до 100 включительно
function guessedNumber() {
    let val = Math.floor(100 * Math.random()) + 1;
    return val
}

// Функция преобразования введенного текста в целое число
function stringToInt(value) {
    val = Number.parseInt(value)
    return val;
}

// Функция выводит все введенные цифры
function all_input_numbers(all_nums) {
    let y = '';
    for (let i of all_nums) {
        y += (i + ' ');
    }
    return y;
}


// Функция проверок и изменений игровых условий и генерации игровых сообщений
function getWindowMessage(input_number) {
    //если игра активна
    if (settings.active_game) {

        // введены буквы вместо цифр
        if (isNaN(input_number)) {
            return MESSAGE.not_number_mes;
        }

        // введено число меньше 1 или больше 100
        if (input_number < 1 || input_number > 100) {
            return MESSAGE.out_of_range_mes;
        }

        // введенное число равно загаданому числу
        if (input_number == number_in_memory) {
            settings.setNum.add(input_number);
            settings.active_game = false;
            document.getElementById('btn').style.visibility = 'hidden';
            settings.counter++;
            return MESSAGE.win_mes;
        }

        // введенное число больше загаданного числа
        if (input_number > number_in_memory) {
            settings.setNum.add(input_number);
            settings.counter++;
            return MESSAGE.less_mes;
        }

        // введенное число меньше загаданного числа
        if (input_number < number_in_memory) {
            settings.setNum.add(input_number);
            settings.counter++;
            return MESSAGE.more_mes;
        }
    } else {
        return MESSAGE.welcome_mes;
    }
}