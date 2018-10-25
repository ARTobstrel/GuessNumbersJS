// class GameMessages():
//     """Все игровые сообщения"""

//     START = ""
//     WELCOME_MES = ("Компьютер ZX-Spectrum загадал число от 1 до 100. Попробуй отгадай его за наименьшее количество попыток.\n",
//                    "Отгадайте число от 1 до 100. Если вы отгадаете за три или менее попытки, то вам будет доступна бонусная игра.\n",
//                    "Проверьте вашу интуицию. Вам необходимо отгадать число от 1 до 100.\n")
//     OUT_OF_RANGE_MES = "Введите число строго от 1 до 100.\n"
//     ALREDY_EXISTS_MES = ("Вы уже вводили число {}.\n\rВнимательнее.\n",
//                          "Число {} уже было. Не повторяйтесь.\n")
//     WIN_MES = "Поздравляем!!! Вы отгадали число. Это действительно {}.\n\r Количество попыток - {}.\n\r Введенные числа: {}.\n\r"
//     SPAM_MES = "Попытка спама.\n"
//     BONUS_GAME_M

const MESSAGE = {
    'welcome_mes': 'Добро пожаловать в новейшую игру всех времен и народов. Для начала игры нажмите "new game"\n\r',
    'start': 'Компьютер ZX-Spectrum загадал число от 1 до 100. Попробуй отгадай его за наименьшее количество попыток\n\r',
    'win_mes': 'Поздравляем!!! Вы отгадали число. Это действительно {}.\n\r Количество попыток - {}.\n\r Введенные числа: {}',
    'not_number_mes': 'Необходимо вводить только цифры.\n\r',
    'less_mes': '...меньше\n\r',
    'more_mes': '...больше\n\r',
    'out_of_range_mes': 'Введите число строго от 1 до 100.\n\r',
}
