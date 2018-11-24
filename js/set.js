// Основные настройки игры
let active_game = false;  // активация игры
let bonus_game = false; // активация бонусной игры
let counter = 0;
let setNum = new Set();
let input_print = false; // отображение цифр на дисплее введенных пользователем
let font_color = 'black';
const GAGE = 250482; // эталон


//Создание переменных
let window_message;
let window_out = document.getElementById('screen-out'); // создание переменной window_out в которой будут передаваться все сообщения
let htmltext; // переменная с текстом который попадет в window_message
let all_nums;
let max_value = 1000;
let min_value = 1;
let comp_number;
let keybord = document.getElementById('keybord');

//Скрытые команды
const PRINT = 'print';
const BONUS = 'bonus';
const AUTHOR = 'author';
const KEYBORD = 'keybord';