function getTestData() {
    const p1 = new Guest(
        'Иван',
        'Иванович',
        25
    );
    p1.equipment = [
        new Equipment('Лыжи', '2 комплекта'),
        new Equipment('Спортивная одежда', '1 штука'),
    ];
    p1.teachers = [
        new Teacher('Сергей', 'Сергевич', 'Сноуборд, Лыжный спорт', '3 года'),
        new Teacher('Григорий', 'Швепс', 'Альпинизм', '6 лет'),
        new Teacher('Мария', 'Захарова', 'Йога', '4 года')
    ];
    p1.allActivities = [
        new Activities('Дайвинг', 4),
        new Activities('Йога', 3),
        new Activities('Сноуборд', 5),
        new Activities('Альпинизм', 2)
    ];

    const p2 = new Guest(
        'Инна',
        'Гришаева',
        25
    );
    p2.equipment = [
        new Equipment('Коврик', '2 штуки'),
        new Equipment('Акваланг', '3 комплекта'),
    ];
    p2.teachers = [
        new Teacher('Антон', 'Максимов', 'Дайвинг', '5 лет'),
        new Teacher('Елена', 'Лазина', 'Йога', '7 лет')
    ];
    p2.allActivities = [
        new Activities('Дайвинг', 3),
        new Activities('Йога', 5),
        new Activities('Пеший туризм', 4),
    ];

    const p3 = new Guest(
        'Николай',
        'Никитин',
        35
    );
    p3.equipment = [
        new Equipment('Доска для серфинга', '1 штука'),
        new Equipment('Спортивная одежда', '2 штуки'),
        new Equipment('Походный рюкзак', '1 штука'),
        new Equipment('Шлем', '1 штука'),
    ];
    p3.teachers = [
        new Teacher('Михаил', 'Андропов', 'Серфинг', '9 лет'),
        new Teacher('Федор', 'Шаляпин', 'Кемпинг', '5 лет'),
        new Teacher('Константин', 'Константинов', 'Боевые искусства', '8 лет'),
    ];
    p3.allActivities = [
        new Activities('Серфинг', 4),
        new Activities('Пеший туризм', 3),
        new Activities('Кемпинг', 4),
        new Activities('Боевые искусства', 5),
    ];

    return [p1, p2, p3];
}

function getNewguest() {
    const p1 = new Guest(
        'Иван-new',
        'Иванович-new',
        45
    );
    p1.equipment = [
        new Equipment('Спортивная одежда', '1 штука'),
    ];
    p1.teachers = [
        new Teacher('Иван', 'Иванов', 'Пеший туризм', '10 лет'),
    ];
    p1.allActivities = [
        new Activities('Пеший туризм', 5)
    ];

    return p1;
}