import { Observable } from 'rxjs';

const observer = {
  next: (value) => console.log('next', value),
  error: (err) => console.log('error', err),
  complete: () => console.log('complete'),
};

const observable = new Observable((subscriber) => {
  subscriber.next('Hello');
  subscriber.next('World');
  subscriber.complete();
});

observable.subscribe(observer);
