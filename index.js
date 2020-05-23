import { Observable } from 'rxjs';

const observable = new Observable((subscriber) => {
  subscriber.next('Hello');
  subscriber.next('World');
  subscriber.complete();
  subscriber.next('Hello Again'); // <-< Will not appear as complete is already called
});

// params are - next, error and complete
observable.subscribe(
  (value) => console.log('next', value),
  (err) => console.log('error', err),
  () => console.log('Complete!')
);
