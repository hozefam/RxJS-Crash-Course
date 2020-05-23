import { Observable } from 'rxjs';

const observable = new Observable((subscriber) => {
  let count = 0;

  setInterval(() => {
    subscriber.next(count);
    if (count >= 5) {
      subscriber.complete();
    }
    count = count + 1;
  }, 1000);

  return () => {
    console.log('Clean up called!');
  };
});

// params are - next, error and complete

console.log('before');
observable.subscribe(
  (value) => console.log('next', value),
  (err) => console.log('error', err),
  () => console.log('Complete!')
);
console.log('after');
