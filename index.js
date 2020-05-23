import { Observable } from 'rxjs';

const observer = {
  next: (value) => console.log('next', value),
  error: (err) => console.log('error', err),
  complete: () => console.log('Complete!'),
};

const observable = new Observable((subscriber) => {
  let count = 0;

  setInterval(() => {
    subscriber.next(count);
    count = count + 1;
  }, 1000);

  return () => {
    console.log('Clean up called!');
  };
});

console.log('before');
const subscription_1 = observable.subscribe(observer);
const subscription_2 = observable.subscribe(observer);
console.log('after');

setTimeout(() => {
  subscription_1.unsubscribe();
}, 3000);

setTimeout(() => {
  subscription_2.unsubscribe();
}, 8000);

// Learning:
// Complete is not called during unsubscribe call
// Complete is called only when the subscriber.complete() is invoked
