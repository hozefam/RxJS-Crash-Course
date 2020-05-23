import { fromEvent } from 'rxjs';

const source$ = fromEvent(document, 'click');

const subOne = source$.subscribe(
  (val) => console.log(val),
  null,
  () => console.log('Complete')
);
const subTwo = source$.subscribe((val) => console.log(val));

setTimeout(() => {
  subOne.unsubscribe();
  console.log('SubOne is unsubscribed!!!');
}, 3000);
