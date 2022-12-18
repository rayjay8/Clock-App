const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const time = new Date();
const h = time.getHours();
const m = time.getMinutes();
const s = time.getSeconds();

const isecond = document.querySelector(".second");
const iminute = document.querySelector(".minute");
const ihour = document.querySelector(".hour");

// hour.innerHTML = h < 10 ? `0${h}` : h;
// minute.innerHTML = m < 10 ? `0${m}` : m;
// second.innerHTML = s < 10 ? `0${s}` : s;

// isecond.style.transform = `rotate(${s * 6}deg)`;
// iminute.style.transform = `rotate(${m * 6}deg)`;
// ihour.style.transform = `rotate(${h * 30}deg)`;

let i = 0,
  j = 0,
  k = 0;

setInterval(() => {
  if (i < 60) {
    i++;
    iminute.style.transform = `rotate(${i * 6}deg)`;
    if (i < 10) {
      second.innerHTML = `0${i}`;
    } else {
      second.innerHTML = i;
    }
    if (i == 59) {
      i = -1;
    }
    if (second.innerHTML == "00") {
      j++;
      ihour.style.transform = `rotate(${j * 6}deg)`;
      if (j < 10) {
        minute.innerHTML = `0${j}`;
      } else {
        minute.innerHTML = j;
      }
      if (j == 59) {
        j = -1;
      }
    }
    if (minute.innerHTML == "00" && second.innerHTML == "00") {
      k++;
      isecond.style.transform = `rotate(${k * 30}deg)`;
      if (k < 10) {
        hour.innerHTML = `0${k}`;
      } else {
        hour.innerHTML = k;
      }
      if (k == 23) {
        k = -1;
      }
    }
  }
}, 1000);
