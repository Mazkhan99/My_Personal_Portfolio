let digitaClock = document.querySelector(".digital-clock");

const body = document.querySelector("body"),
  hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute"),
  secondHand = document.querySelector(".second"),
  modeSwitch = document.querySelector(".mode-switch");
const updateTime = () => {
  let date = new Date(),
    secToDeg = date.getSeconds() * 6,
    minToDeg = date.getMinutes() * 6,
    hrToDeg = 30 * date.getHours() + date.getMinutes() / 2;
  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hrToDeg}deg)`;

  let clock = date.toLocaleTimeString();
  digitaClock.innerHTML = clock;
};

setInterval(updateTime, 1000);

updateTime();


let hour = 0;
let min = 0;
let sec = 0;
let count = 0;

let start_stop = document.querySelector("#check");
start_stop.addEventListener("click", (e) => {
  if (start_stop.checked) {
    timer = true;
    stopwatch();
  } else {
    timer = false;
  }
});

let reset = document.querySelector(".reset");
reset.addEventListener("click", (e) => {
  timer = false;
  hour = 0;
  min = 0;
  sec = 0;
  count = 0;
  start_stop.checked = false;
  document.querySelector(".stop-hour").innerText = "00";
  document.querySelector(".stop-min").innerText = "00";
  document.querySelector(".stop-sec").innerText = "00";
  document.querySelector(".stop-ms").innerText = "00";
});
function stopwatch() {
  if (timer) {
    count++;
    if (count == 100) {
      sec++;
      count = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hour++;
      min = 0;
    }
    let hrString = hour;
    let minString = min;
    let secString = sec;
    let countString = count;

    if (hour < 10) {
      hrString = "0" + hrString;
    }

    if (min < 10) {
      minString = "0" + minString;
    }

    if (sec < 10) {
      secString = "0" + secString;
    }

    if (count < 10) {
      countString = "0" + countString;
    }
    document.querySelector(".stop-hour").innerText = hrString;
    document.querySelector(".stop-min").innerText = minString;
    document.querySelector(".stop-sec").innerText = secString;
    document.querySelector(".stop-ms").innerText = countString;
    setTimeout(stopwatch, 10);
  }
}
