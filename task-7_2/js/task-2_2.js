const { Observable, throwError } = rxjs;

const countdownObservable = new Observable(observer => {
    let count = 5;
    const intervalId = setInterval(() => {
        if (count > 0) {
            observer.next(count);
            count--;
        } else {
            clearInterval(intervalId);
            observer.error('Обратный отсчет завершен. Обновите страницу, чтобы начать сначала');
        }
    }, 1000);
});

const countdownObserver = {
    next: value => {
        alert(`Обратный отсчет: ${value}`);
    },
    error: err => {
        alert(`Ошибка: ${err}`);
    },
    complete: () => {
        alert('Обратный отсчет завершен!');
    }
};

countdownObservable.subscribe(countdownObserver);