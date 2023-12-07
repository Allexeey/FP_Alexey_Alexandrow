const { of, range } = rxjs;
const { filter, toArray } = rxjs.operators;

const isPrime = num => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
};

const numbers$ = range(1, 100);

numbers$
  .pipe(
    filter(isPrime),
    toArray()
  )
  .subscribe(primeNumbers => {
    console.log('Простые числа:', primeNumbers);
  });