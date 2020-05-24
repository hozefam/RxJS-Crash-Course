import { from } from 'rxjs';

// function* hello() {
//   yield 10;
//   yield 20;
//   yield 30;
//   yield 40;
//   yield 50;
//   yield 60;
// }

// const iterator = getData();

const observer = {
  next: (val) => console.log('next', val),
  error: (err) => console.log('error', err),
  complete: () => console.log('complete!'),
};

from([1, 2, 3, 4, 5]).subscribe(console.log);
from(fetch('https://api.github.com/users/octocat')).subscribe(console.log);
// from(iterator).subscribe(console.log);
