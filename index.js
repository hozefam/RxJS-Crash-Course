import { interval } from 'rxjs';
import { scan, mapTo, filter, tap } from 'rxjs/operators';

const countdown = document.getElementById('countdown');
const message = document.getElementById('message');
const progressbar = document.getElementById('progressbar');

console.log(countdown);

const counter$ = interval(1000)
  .pipe(
    mapTo(-1),
    scan((acc, curr) => {
      return acc + curr;
    }, 10),
    filter((val) => val >= 0)
  )
  .subscribe((value) => {
    countdown.innerHTML = value;
    progressbar.style.width = `${100 - value * 10}%`;
    progressbar.innerHTML = `${100 - value * 10}%`;
    if (!value) {
      message.innerHTML = 'liftOff!';
      progressbar.style.display = 'hidden';
    }
  });
