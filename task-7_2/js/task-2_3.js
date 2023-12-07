const { fromEvent, merge } = rxjs;
const { map } = rxjs.operators;

// Получаем ссылки на кнопки
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

// Функция для изменения фона страницы случайным образом
function changeBackgroundColor() {
// Генерируем случайный цвет
const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

// Устанавливаем новый цвет фона страницы
document.body.style.backgroundColor = randomColor;
}

// Создаем Observable для каждой кнопки
const click1$ = fromEvent(button1, 'click').pipe(map(() => changeBackgroundColor()));
const click2$ = fromEvent(button2, 'click').pipe(map(() => changeBackgroundColor()));
const click3$ = fromEvent(button3, 'click').pipe(map(() => changeBackgroundColor()));

// Объединяем потоки в один
const merged$ = merge(click1$, click2$, click3$);

// Подписываемся на объединенный поток
merged$.subscribe();